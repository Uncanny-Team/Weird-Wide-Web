import React from "react"
import { Navbar, Button, Icon, Dropdown, NavItem, Modal, Input, Row } from "react-materialize"

const Nav = props => (
    <Navbar options right href='#' brand={<span><header><h1>W<span className="animate-flicker">e</span>ird Wide Web</h1></header></span>}>
        <NavItem  href='#'>Randomize</NavItem>
        <NavItem  href='#'>Submit</NavItem>
        <NavItem><Dropdown trigger={
                    <Button className="dropdown-trigger">Categories<Icon right>arrow_drop_down</Icon></Button>

                }>
                {/* add more as needed   */}
                    <NavItem><a href="#">Movies</a></NavItem>
                    <NavItem><a href="#">Internet</a></NavItem>
                    <NavItem><a href="#">Music</a></NavItem>
                    <NavItem><a href="#">Books</a></NavItem>
                    <NavItem><a href="#">TEST</a></NavItem>

                </Dropdown></NavItem>
        <NavItem  href={props.userPageUrl}>{props.userName}<span>BreannaLordoftheDarkStar71</span> </NavItem>
        <NavItem><Modal
                    header='Login'
                    trigger={<Button>Login</Button>}>
                    <Row>
                        <Input type="email" s={12} label="Email" validate />
                    </Row>
                    <Row>
                        <Input type="password" s={12} label="Password" validate />
                    </Row>
                </Modal></NavItem>
    </Navbar>
)

export default Nav;