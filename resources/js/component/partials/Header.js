
import 'bootstrap/dist/css/bootstrap.min.css';

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
                <Navbar color="light" light expand="md">
                    <NavbarBrand href="/">BookWorm</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ms-auto" navbar>
                            <NavItem>
                                <NavLink href="/components/"> Home </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/components/"> Shop </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/components/"> About </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/components/"> Cart </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/components/"> Login </NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}
