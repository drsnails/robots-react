import { RobotPreview } from './RobotPreview';

export function RobotList({ robots, deleteRobot }) {
  return (
    <div className="robot-list specific-cards-grid">
      {robots.map(robot => (
        <RobotPreview deleteRobot={deleteRobot} robot={robot} key={robot._id} />
      ))}
    </div>
  )
}
