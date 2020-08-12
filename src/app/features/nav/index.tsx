import React from 'react';
import { Menu, Container, Dropdown } from 'semantic-ui-react';
import './styles/styles.css';
import { NavLink } from 'react-router-dom';

const NavBar = () => {

    return (
        <div>
            <Menu fixed='top' inverted>
                <Container>
                    <Menu.Item header as={NavLink} exact to='/'>Mini Carsales</Menu.Item>
                    <Dropdown text='Create' pointing className='link item'>
                        <Dropdown.Menu>
                            <Dropdown.Item name='create-car' exact as={NavLink} to='/vehicle/create/car'>Create Car</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Container>
            </Menu>
        </div>
    )
};

export default NavBar;