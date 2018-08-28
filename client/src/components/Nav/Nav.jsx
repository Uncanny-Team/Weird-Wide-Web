import React from "react"
// import Router from "router"
import { Navbar, Button, Icon, Dropdown, NavItem, Modal, Input, Row } from "react-materialize"

const Nav = props => (
    <Navbar right href='#' brand={<span><header><h1>W<span className="animate-flicker">e</span>ird Wide Web</h1></header></span>}>
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
        <NavItem  href={props.userPageUrl}><span>{props.user ? props.user.username: ""}</span> </NavItem>
        <NavItem><Modal
                    header='Login'
                    trigger={<Button>Login</Button>}
                    actions={<div>
                        <Button onClick={props.handleGoogle}>Login with Google</Button>
                        <Button onClick={props.handleCreate}>Create Account</Button>
                        <Button onClick={props.handleLogin}>Login</Button>
                    </div>}>
    
                    <Row>
                        <Input name="username" type="text" s={12} label="Usernamer" onChange={props.handleInputChange} validate />
                    </Row>
                    <Row>
                        <Input name="email" type="email" s={12} label="Email" onChange={props.handleInputChange} validate />
                    </Row>
                    <Row>
                        <Input name="password" type="password" s={12} label="Password" onChange={props.handleInputChange} validate />
                    </Row>
                </Modal></NavItem>
    </Navbar>
)

export default Nav;