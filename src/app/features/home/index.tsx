import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import ListVehicle from "../vehicleManagement/list";
import { Container } from 'semantic-ui-react';

const HomePage = () => {
  return (
    <div className="">
      <Container style={{ marginTop: '6em' }}>
        <ListVehicle />
      </Container>
    </div>
  );
}

export default HomePage;
