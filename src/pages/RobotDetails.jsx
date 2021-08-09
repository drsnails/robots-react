import { Component } from 'react'
import { Link } from 'react-router-dom'
import { robotService } from '../services/robotService'

export class RobotDetails extends Component {
  state = {
    robot: null
  }

  componentDidMount() {
    this.loadRobot()
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.match.params.id !== this.props.match.params.id) {
      this.loadRobot()
    }
  }


  loadRobot = async () => {
    const { id } = this.props.match.params
    const robot = await robotService.getById(id)
    this.setState({ robot })
  }

  goBack = () => {
    this.props.history.push('/')
    // this.props.history.goBack()
  }

  render() {
    const { robot } = this.state
    if (!robot) return <div>Loading...</div>
    return (
      <div className="robot-details text-center">
        <img src={'https://robohash.org/' + robot._id} alt="" />
        <p>{robot.model}</p>
        <p>{robot.type}</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur debitis dolores autem sequi aliquid. Iusto, nulla ea suscipit iste modi sequi possimus, consequuntur blanditiis ut magnam veritatis reprehenderit iure quaerat?</p>
        <section className="actions">
          <button onClick={this.goBack}>Back</button>
          <Link to={'/robot/edit/' + robot._id}>Edit</Link>
          <Link to="/robot/r1">Next robot</Link>
        </section>
      </div>
    )
  }
}
