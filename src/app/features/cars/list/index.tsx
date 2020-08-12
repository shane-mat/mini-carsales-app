import React from 'react';
import { Table } from 'semantic-ui-react';
import { ICar } from '../models/Car';

interface IProps {
    cars: ICar[]
}

const ListCar: React.FC<IProps> = ({ cars }) => {

    return (
        <div>
            <Table singleLine>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Make</Table.HeaderCell>
                        <Table.HeaderCell>Model</Table.HeaderCell>
                        <Table.HeaderCell>Engine</Table.HeaderCell>
                        <Table.HeaderCell>Body Type</Table.HeaderCell>
                        <Table.HeaderCell>Number of Wheels</Table.HeaderCell>
                        <Table.HeaderCell>Number of Doors</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                {cars.map((car: ICar) =>
                     <Table.Row key={car.id}>
                     <Table.Cell>{car.make}</Table.Cell>
                     <Table.Cell>{car.model}</Table.Cell>
                     <Table.Cell>{car.engine}</Table.Cell>
                     <Table.Cell>{car.numberOfDoors}</Table.Cell>
                     <Table.Cell>{car.numberOfWheels}</Table.Cell>
                     <Table.Cell>{car.bodyType}</Table.Cell>
                 </Table.Row>
                )}               
                </Table.Body>
            </Table>
        </div >
    )
}

export default ListCar;