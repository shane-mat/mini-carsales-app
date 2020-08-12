import React, { Fragment } from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Container } from 'semantic-ui-react';
import { Route } from 'react-router-dom';
import HomePage from './features/home';
import NavBar from './features/nav';
import './App.css';
import CreateVehicle from './features/vehicleManagement/create';
import { ToastContainer } from 'react-toastify';

const App = () => {
  return (
    <Fragment>
      <ToastContainer position='bottom-right'/>
      <NavBar />
        <Container style={{ marginTop: '5em' }}>
          <Route path='/vehicle/create/:vehicleType' component={CreateVehicle}/>
          <Route exact path='/' component={HomePage}/>
        </Container>
    </Fragment>
  );
}

export default App;