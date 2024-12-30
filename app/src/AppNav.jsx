import React, { Component } from 'react';
import {Nav,Navbar,NavItem,NavbarBrand, NavLink} from 'reactstrap';

class AppNav extends Component {
    state = {  } 
    render() { 
        return (
            <div>
                <Navbar color="dark" dark expand="md" className="w-100 fixed-top">
                    <NavbarBrand href="/" className="me-auto">Expense Tracker Application</NavbarBrand>
                    <Nav className="ms-auto" navbar>
                        <NavItem>
                            <NavLink href="/">Home</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/Category">Category</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/Expenses">Expenses</NavLink>
                        </NavItem>
                    </Nav>
                </Navbar>
            </div>
          );
    }
}
 
export default AppNav;