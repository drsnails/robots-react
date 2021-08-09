import { HashRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import { AppHeader } from './cmps/AppHeader';
import { About } from './pages/About';
import { RobotApp } from './pages/RobotApp';
import { RobotDetails } from './pages/RobotDetails';
import { RobotEdit } from './pages/RobotEdit';

export function App() {

  const PrivateRoute = (props) => {
    // return props.isAdmin ? <Route {...props} /> : <Redirect to="/" />
    return props.isAdmin ? <Route path={props.path} component={props.component} /> : <Redirect to="/" />
  }

  return (
    <Router>
      <main>
        <AppHeader />
        <Switch>
          <Route path="/robot/edit/:id?" component={RobotEdit} />
          <Route path="/robot/:id" component={RobotDetails} />
          <PrivateRoute path="/about" component={About} isAdmin={true} />
          <Route path="/" component={RobotApp} />
        </Switch>
      </main>
    </Router>
  );
}

