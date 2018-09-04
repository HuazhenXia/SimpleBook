import React,{ Component } from 'react';
import {CSSTransition} from 'react-transition-group';
import { HeaderWrapper, Logo, Nav,
    NavItem, NavSearch, Addition,
    Button, SearchWrapper } from './style'


class Header extends Component{

    constructor(props){
        super(props);
        this.state = {
            focused: false
        }
    }

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
                        <CSSTransition
                            in={this.state.focused}
                            timeout={200}
                            classNames="slide"
                        >
                            <NavSearch
                                onFocus={this.onFocusHandler}
                                onBlur={this.onBlurHandler}
                                className={this.state.focused ? 'focused' : ''}
                                placeholder="Search">
                            </NavSearch>
                        </CSSTransition>
                        <i className={this.state.focused ? 'focused iconfont' : 'iconfont'}>&#xe609;</i>
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

    onBlurHandler = () => {
        this.setState({
            focused: false
        })
    }

    onFocusHandler = () => {
        this.setState({
            focused: true
        })
    }
}

export default Header
