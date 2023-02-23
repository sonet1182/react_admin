import React from 'react';
import {BrowserRouter as Router, Switch} from 'react-router-dom';
import PublicRoute from './PublicRoute';


import axios from 'axios';
import CoachPrivateRoute from './CoachPrivateRoute';
import StudentPrivateRoute from './StudentPrivateRoute';
import MasterLayout from './layouts/student/MasterLayout';

axios.defaults.baseURL = "http://localhost:8000/";
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.post['Accept'] = 'application/json';

axios.defaults.withCredentials = true;

axios.interceptors.request.use(function (config){
  const token = localStorage.getItem('auth_token');
  config.headers.Authorization = token ? `Bearer ${token}` : '';
  return config;
});


function App() {
  return (
    <div className="App">
        <Router>
          <Switch>

            <CoachPrivateRoute path="/coach" name="Coach" />
            <StudentPrivateRoute path="/student" name="Student" />


            <PublicRoute path="/" name="Home" />

            {/* <Route path="/login">
              {localStorage.getItem('auth_token') ? <Redirect to='/' /> : <Login />}
            </Route>
            <Route path="/register">
              {localStorage.getItem('auth_token') ? <Redirect to='/' /> : <Register />}
            </Route> */}

            {/* <Route path="/admin" name="Admin" render={(props) => <MasterLayout {...props} />} /> */}


          </Switch>
        </Router>
    </div>
  );
}

export default App;
