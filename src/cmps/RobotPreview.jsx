import { Link } from "react-router-dom"

export function RobotPreview({ robot, deleteRobot }) {

  function onDeleteRobot(ev) {
    ev.stopPropagation()
    deleteRobot(robot._id)
  }

  return (
    <div className="robot-preview" >
      <Link to={'/robot/' + robot._id}>
        <img src={'https://robohash.org/' + robot._id} alt="" />
        <p>{robot.model}</p>
        <p>{robot.type}</p>
      </Link>
      <section className="actions">
        <button onClick={onDeleteRobot}>Delete</button>
      </section>
    </div>
  )
}
