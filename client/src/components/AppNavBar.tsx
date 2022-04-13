import React , {Component,useState} from 'react'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container
} from 'reactstrap';
function AppNavBar() {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const toggle =() => {

        setIsOpen(!isOpen)
    }
    


return(
  <div>
     <Navbar color="dark" dark expand="md" className="mb-5">
        <Container>
            <NavbarBrand href="/">Shoppinglist</NavbarBrand>
           <Navbar Toggler onclick={toggle} />
            <Collapse isopen={isOpen} navbar>
                <Nav className="ml-auto" navbar>
                    <NavItem>
                        <NavLink href="/http://www.google.com/">Google</NavLink>
                    </NavItem>
                </Nav>
            </Collapse>
        </Container>
    </Navbar>
</div>
);
}

export default AppNavBar ;