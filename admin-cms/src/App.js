import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoginPage from './views/pages/login/LoginPage';
import DefaultLayout from './views/layouts/DefaultLayout';
import routers from './routers';
import Page404 from './views/pages/page404/Page404';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/login'><LoginPage/></Route>
        <Route path='/' ><DefaultLayout routers={routers} /></Route>
        <Route exact path='/page404'><Page404/></Route>
      </Switch>
    </Router>
  );
}

export default App;
