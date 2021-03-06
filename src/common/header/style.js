import styled from 'styled-components';
import logo from '../../statics/logo.png';

export const HeaderWrapper = styled.div`
    position: relative;
    height: 56px;
    border-bottom: 1px solid #f0f0f0;
`
export const Logo = styled.a`
    position: absolute;
    left: 0;
    top: 0;
    display: inline-block;
    width: 100px;
    height: 56px;
    background: url(${logo});
    background-size: contain;
`

export const Nav = styled.div`
    width: 960px;
    height: 100%;
    margin: 0 auto;
    padding-right: 70px;
    box-sizing: border-box;
`

export const NavItem = styled.div`
    line-height: 56px;
    padding: 0 15px;
    font-size: 16px;
    color: #333;
    &.left{
        float: left;
    }

    &.right{
        float: right;
        color: #969696;
    }

    &.active{
        color:#ea6f5a;
    }
`

export const NavSearch = styled.input`
    &.slide-enter{
        transition: all .2s ease-out;
    }

    &.silde-enter-active{
        width:240px;
    }

    &.slide-exit{
        transition: all 0.2s ease-out;
    }

    &.slide-exit-active{
        width: 160px;
    }

    width: 160px;
    height:38px;
    margin-top: 9px;
    margin-left: 18px;
    padding: 0 30px 0 20px;
    box-sizing: border-box;
    border: none;
    outline: none;
    border-radius: 19px;
    background: #eee;
    font-size: 14px;
    color: #666;
    &::placeholder{
        color: #999;
    }
    &.focused{
        width: 240px;
    }
`

export const SearchWrapper = styled.div`
    float: left;
    position: relative;

    .iconfont {
        position: absolute;
        right: 5px;
        bottom: 5px;
        width: 30px;
        line-height: 30px;
        border-radius: 15px;
        text-align: center;
        z-index: 9999;
        &.focused{
            background: #777;
            color:#fff;
        }
    }

`

export const SearchInfo = styled.div`
    position: absolute;
    left: 0;
    top: 56px;
    background: #fff;
    width: 240px;
    z-index: 9999;
    padding: 0 20px;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.2)
`

export const SearchInfoTitle = styled.div`
    margin-top: 20px;
    margin-bottom: 15px;
    line-height:20px;
    font-size: 14px;
    color:#969696;
`

export const SearchInfoSwitch = styled.span`
    float: right;
    font-size: 12px;

`

export const SearchInfoList = styled.div`
	overflow: hidden;
`;

export const SearchInfoItem = styled.a`
    display: block;
    float: left;
    line-height: 20px;
    padding:0 5px;
    margin-right: 10px;
    margin-bottom: 10px;
    font-size: 12px;
    border: 1px solid #ddd;
    color: #969696;
    border-radius: 4px;
`

export const Addition = styled.div`
    position: absolute;
    right: 0;
    top: 0;
`
export const Button = styled.div`
    float: right;
    margin-top: 9px;
    margin-right: 20px;
    padding: 0 20px;
    line-height: 38px;
    border-radius: 19px;
    border: 1px solid #ec6149;
    font-size: 14px;
    &.reg {
        color: #ec6149;
    }

    &.writting{
        color: #fff;
        background: #ec6149;
    }
`