
export interface ICar{
    id: string,
    make: string;
    model: string;
    engine: string;
    numberOfDoors: string;
    numberOfWheels: string;
    bodyType: string;   
}

export class CarFormValues implements ICar {
    id: string = '';
    make: string ='';
    model: string ='';
    engine: string ='';
    numberOfDoors: string ='';
    numberOfWheels: string ='';
    bodyType: string =''; 
}