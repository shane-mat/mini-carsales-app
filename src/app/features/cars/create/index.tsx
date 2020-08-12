import React, { useState } from 'react';
import {  Segment, Button, Form, Grid } from 'semantic-ui-react';
import {  NavLink } from "react-router-dom";
import { ICar, CarFormValues } from '../models/Car';
import { Form as FinalForm, Field } from 'react-final-form';
import TextInput from '../../common/form/TextInput';
import {combineValidators, isRequired} from 'revalidate';
import SelectInput from '../../common/form/SelectInput';
import { bodyTypeOptions } from '../options/bodyTypeOptions';

const validate = combineValidators({
    make: isRequired('Make'),
    model: isRequired('Model'),
    engine: isRequired('Engine'),
    numberOfDoors: isRequired('NumberOfDoors'),
    numberOfWheels: isRequired('NumberOfWheels'),
    bodyType: isRequired('Body Type')
});

interface IProps {
    createCar: (car: ICar) => void;
    submitting: boolean;
}

const CarForm: React.FC<IProps> = ({ createCar, submitting }) => {

    const [car] = useState(new CarFormValues());

    const handleFinalFormSubmit = (values: any) => {
        const {...car} = values;
      
        createCar(car);
    }

    return (
        <Grid>
            <Grid.Column width={8}>
                <Segment>
                    <FinalForm
                        validate={validate}
                        initialValues={car} 
                        onSubmit={handleFinalFormSubmit}
                        render={({ handleSubmit }) => (
                            <Form onSubmit={handleSubmit}>
                                <Field 
                                    placeholder='Make' 
                                    name='make' 
                                    value={car.make} 
                                    component={TextInput}/>
                                <Field 
                                    placeholder='Model' 
                                    name='model' 
                                    value={car.model} 
                                    component={TextInput}/>
                                <Field 
                                    placeholder='Engine' 
                                    name='engine' 
                                    value={car.engine} 
                                    component={TextInput} />
                                <Field 
                                    placeholder='Doors(number of)' 
                                    name='numberOfDoors' 
                                    type='number' 
                                    value={car.numberOfDoors} 
                                    component={TextInput}  />
                                <Field 
                                    placeholder='Wheels(numbr of)' 
                                    name='numberOfWheels' 
                                   
                                    value={car.numberOfWheels} 
                                    component={TextInput} />
                                <Field 
                                    placeholder='Select Body Type' 
                                    name='bodyType' 
                                    component={SelectInput} 
                                    options={bodyTypeOptions}/>

                                <Button loading={submitting} positive type='submit' content='Submit' />
                                <Button type='submit' content='Cancel' as={NavLink} exact to='/' />
                            </Form>
                        )}
                    />
                </Segment>
            </Grid.Column>
        </Grid>
    )
}

export default CarForm;