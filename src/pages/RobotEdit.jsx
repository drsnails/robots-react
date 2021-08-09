import { Component, createRef } from 'react'
import { robotService } from '../services/robotService'

export class RobotEdit extends Component {

  inputRef = createRef()

  state = {
    robot: null,
    errMsg: ''
  }

  async componentDidMount() {

    try {
      const id = this.props.match.params.id
      const robot = id ? await robotService.getById(id) : robotService.getEmptyRobot()
      this.setState({ robot }, () => this.inputRef.current.focus())
    } catch (err) {
      this.setState({ errMsg: 'Cannot Find Robot' })
    }

  }

  handleChange = ({ target }) => {
    const field = target.name
    const value = target.type === "number" ? +target.value : target.value
    this.setState(prevState => ({ robot: { ...prevState.robot, [field]: value } }))
  }

  onSaveRobot = async (ev) => {
    ev.preventDefault()
    const { robot } = this.state
    await robotService.save(robot)
    this.props.history.push('/')
  }



  render() {
    if (!this.state.robot) return <div>{this.state.errMsg || 'Lodaing...'}</div>
    const { model, type, batteryStatus } = this.state.robot
    return (
      <form className="robot-edit">
        <label htmlFor="model">Model</label>
        <input ref={this.inputRef} value={model} name="model" type="text" id="model" onChange={this.handleChange} />

        <label htmlFor="type">Type</label>
        <input value={type} name="type" type="text" id="type" onChange={this.handleChange} />

        <label htmlFor="batteryStatus">Max Battery</label>
        <input value={batteryStatus} name="batteryStatus" type="number" id="batteryStatus" onChange={this.handleChange} />

        <button onClick={this.onSaveRobot}>Save</button>

        <p>{this.state.errMsg}</p>
      </form>
    )
  }
}
