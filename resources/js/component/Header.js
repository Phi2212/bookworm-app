
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from '../bookworm_icon.svg'
import React from 'react'

import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
} from 'reactstrap';

export default class Header extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    
    render() {
        return (
            <div>
                <Navbar color="danger" light expand="md">
                    <NavbarBrand href="/"><img src={Logo} alt='Logo' /></NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="justify-content-center" navbar>
                            <NavItem>
                                <NavLink href="/Home"> Home </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/components/"> Shop </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/About"> About </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/components/"> Cart </NavLink>
                            </NavItem>
                        </Nav>
                        <Nav className="ms-auto" navbar>
                            <NavItem>
                                <NavLink href="/Signin"> Sign In </NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}
