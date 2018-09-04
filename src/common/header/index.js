import React,{ Component } from 'react';
import { HeaderWrapper, Logo, Nav,
    NavItem, NavSearch, Addition,
    Button } from './style'


class Header extends Component{
    render(){
        return (
            <HeaderWrapper>
                <Logo href='/' />
                <Nav>
                    <NavItem className="left active">Home </NavItem>
                    <NavItem className="left">App</NavItem>
                    <NavItem className="right">Sign In</NavItem>
                    <NavItem className="right">Aa</NavItem>
                    <NavSearch placeholder="Search">
                    </NavSearch>
                </Nav>
                <Addition>
                    <Button className="writting">Write</Button>
                    <Button className="reg">Sign Up</Button>
                </Addition>
            </HeaderWrapper>
        )
    }
}

export default Header
