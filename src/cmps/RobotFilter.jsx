import { Component } from 'react'

export class RobotFilter extends Component {

  state = {
    type: '',
    model: '',
    minBatteryStatus: '',
    maxBatteryStatus: ''
  }

  handleChange = ({ target }) => {
    var field = target.id
    var value = target.type === 'number' ? +target.value : target.value
    this.setState({ [field]: value }, () => {
      this.props.onChangeFilter(this.state)
    })
  }

  render() {
    return (
      <form className="simple-form robot-filter">
        <label htmlFor="model">Model
        <input type="text" id="model" onChange={this.handleChange} />
        </label>

        <label htmlFor="type">Type
        <input type="text" id="type" onChange={this.handleChange} />
        </label>

        <label htmlFor="maxBatteryStatus">Max Battery
        <input type="number" id="maxBatteryStatus" onChange={this.handleChange} />
        </label>

        <label htmlFor="minBatteryStatus">Min Battery
        <input type="number" id="minBatteryStatus" onChange={this.handleChange} />
        </label>
      </form>
    )
  }
}
