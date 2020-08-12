import React, { useState, useEffect } from 'react';
import { Header, List } from 'semantic-ui-react';
import { ICar } from '../../cars/models/Car';
import agent from '../../../api/agent';
import LoadingComponent from '../../common/loading';
import ListCar from '../../cars/list';

const ListVehicle = () => {
    const [cars, setCars] = useState<ICar[]>([]);
    const[loading, setLoading] = useState(true);

    useEffect(() => {
        try {
            agent.Cars.list()
                .then(res => {
                    setCars(res);
                })
                .then(() => setLoading(false));
        }
        catch(error) {
            console.log(error);
        }
    },  []);

    if(loading) {
        return <LoadingComponent content='Loading Cars..' />;
    }
    if(!cars || !cars.length) {
        return <div>No Vehicles Found!</div>;
    } 

    return (
        <div>
            <Header as="h4">
                <Header.Content>Cars</Header.Content>
            </Header>
            <List>
               <ListCar cars={cars} />
            </List>
        </div>
    )
}

export default ListVehicle;