import React from "react"
import { Navbar, Button, Icon, Dropdown, NavItem, Modal, Input, Row } from "react-materialize"

const Nav = props => (
    <Navbar right href='#' brand={<span><header><h1>W<span className="animate-flicker">e</span>ird Wide Web</h1></header></span>}>

        <NavItem  href='/'>Random</NavItem>
        <NavItem  href='#'>Submit</NavItem>

        <NavItem><Dropdown trigger={
            <Button className="dropdown-trigger">
                Pages<Icon right>arrow_drop_down</Icon>
            </Button>

        }>
            {/* add more as needed   */}
            <NavItem><a href="/">Home</a></NavItem>
            <NavItem><a href="/form">Submit Form</a></NavItem>
            <NavItem><a href="/display">Search</a></NavItem>

        </Dropdown></NavItem>
        <NavItem href={props.userPageUrl}>{props.userName}<span>BreannaLordoftheDarkStar71</span> </NavItem>
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