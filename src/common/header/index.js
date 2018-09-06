import React from 'react';
import { connect } from 'react-redux';
import { actionCreators } from './store';
import { CSSTransition } from 'react-transition-group';
import { HeaderWrapper, Logo, Nav,
    NavItem, NavSearch, Addition,
    Button, SearchWrapper, SearchInfo,
    SearchInfoTitle, SearchInfoSwitch,
    SearchInfoItem } from './style'

const getListArea = (show) => {
    if(show){
        return (
            <SearchInfo>
                <SearchInfoTitle>HOT
                    <SearchInfoSwitch>Switch</SearchInfoSwitch>
                </SearchInfoTitle>
                <div>
                    <SearchInfoItem>Education</SearchInfoItem>
                    <SearchInfoItem>Story</SearchInfoItem>
                    <SearchInfoItem>Story</SearchInfoItem>
                    <SearchInfoItem>Sports</SearchInfoItem>
                    <SearchInfoItem>Sports</SearchInfoItem>
                    <SearchInfoItem>Education</SearchInfoItem>
                </div>
            </SearchInfo>
        )
    }else{
        return null;
    }
}

const Header = (props) => {
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
                        in={props.focused}
                        timeout={200}
                        classNames="slide"
                    >
                    <NavSearch
                        onFocus={props.onFocusHandler}
                        onBlur={props.onBlurHandler}
                        className={props.focused ? 'focused' : ''}
                        placeholder="Search">
                    </NavSearch>
                    </CSSTransition>
                    <i className={props.focused ? 'focused iconfont' : 'iconfont'}>&#xe609;</i>
                    { getListArea(props.focused) }
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

const mapStateToProps = (state) => {
    return {
        focused: state.get('header').get('focused')
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onFocusHandler(){
            dispatch(actionCreators.searchFocus());
        },
        onBlurHandler(){
            dispatch(actionCreators.searchBlur());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
