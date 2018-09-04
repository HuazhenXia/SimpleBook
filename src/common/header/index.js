import React,{ Component } from 'react';
import { HeaderWrapper, Logo, Nav,
    NavItem, NavSearch, Addition,
    Button, SearchWrapper } from './style'


class Header extends Component{
    render(){
        return (
            <HeaderWrapper>
                <Logo href='/' />
                <Nav>
                    <NavItem className="left active">Home </NavItem>
                    <NavItem className="left">App</NavItem>
                    <NavItem className="right">Sign In</NavItem>
                    <NavItem className="right">
                        <i className="iconfont">&#xe636;</i>
                    </NavItem>
                    <SearchWrapper>
                        <NavSearch placeholder="Search"></NavSearch>
                        <i className="iconfont">&#xe609;</i>
                    </SearchWrapper>
                    
                </Nav>
                <Addition>
                    <Button className="writting">
                        <i className="iconfont">&#xe615;</i>
                        Write
                    </Button>
                    <Button className="reg">Sign Up</Button>
                </Addition>
            </HeaderWrapper>
        )
    }
}

export default Header
