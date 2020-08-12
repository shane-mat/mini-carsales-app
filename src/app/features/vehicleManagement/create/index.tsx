import React, { useState, Fragment } from 'react';
import { useHistory, RouteComponentProps } from "react-router-dom";
import agent from '../../../api/agent';
import CarForm from '../../cars/create';
import { ICar } from '../../cars/models/Car';
import { toast } from 'react-toastify';
import { Header } from 'semantic-ui-react';

interface VehicleParams {
    vehicleType: string;
}

const CreateVehicle: React.FC<RouteComponentProps<VehicleParams>> = ({ match }) => {

    const [submitting, setSubmitting] = useState(false);
    const history = useHistory();

    const vehicleType = match.params.vehicleType;

    const handleCreateVehicle = (car: ICar) => {
        setSubmitting(true);

        try {
            agent.Cars.create(car)
                .then((res) => {
                    setSubmitting(false);
                    toast.success('Created successfuly');
                    history.push('/');
                })
                .catch(err => {
                    setSubmitting(false);
                    toast.error('Problem submitting data');
                });
        }
        catch (error) {
            console.log(error);
        }
    }

    let createForm;

    if (vehicleType === 'car') {
        createForm = (
            <Fragment>
                <Header as="h4">
                    <Header.Content>Create Car</Header.Content>
                </Header>
                <CarForm createCar={handleCreateVehicle} submitting={submitting} />
            </Fragment>
        );
    }

    return (
        <Fragment>
            {createForm}
        </Fragment>
    );
}

export default CreateVehicle;