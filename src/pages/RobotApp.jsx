import { Component } from 'react'
import { RobotList } from '../cmps/RobotList'
import { RobotDetails } from './RobotDetails'
import { robotService } from '../services/robotService'
import { RobotFilter } from '../cmps/RobotFilter'
import { Link } from 'react-router-dom'

export class RobotApp extends Component {
  state = {
    robots: null,
    filterBy: null,
  }

  componentDidMount() {
    this.loadRobots()


  }

  async loadRobots() {
    const robots = await robotService.query(this.state.filterBy)
    this.setState({ robots })
  }


  onChangeFilter = (filterBy) => {
    this.setState({ filterBy }, this.loadRobots)
  }

deleteRobot = async (robotId) => {
    await robotService.remove(robotId)
    this.loadRobots()
  }

  render() {
    const { robots } = this.state
    if (!robots) return <div className="page-loading-screen">Loading...</div>

    return (
      <div className="robot-app">
        <h1>Robot Shop</h1>
        <RobotFilter onChangeFilter={this.onChangeFilter} />
        <RobotList robots={robots} deleteRobot={this.deleteRobot} />
        <Link to="robot/edit">Add Robot</Link>

      </div>
    )
  }
}
