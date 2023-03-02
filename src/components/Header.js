import React from 'react';
import styled from "styled-components";

const Header = (props) => {
    return (
        <Nav>
            <Logo><img src="/images/logo.svg" alt="Disney+" /></Logo>
            <NavMenu>
                <a href="/home"><img src="/images/home-icon.svg" alt="Home" />
                    <span>HOME</span>
                </a>
                <a href="/search"><img src="/images/search-icon.svg" alt="Search" />
                    <span>SEARCH</span>
                </a>
                <a href="/watchlist"><img src="/images/watchlist-icon.svg" alt="Watchlist" />
                    <span>WATCHLIST</span>
                </a>
                <a href="/originals"><img src="/images/original-icon.svg" alt="Originals" />
                    <span>ORIGINALS</span>
                </a>
                <a href="/movies"><img src="/images/movie-icon.svg" alt="Movies" />
                    <span>MOVIES</span>
                </a>
                <a href="/series"><img src="/images/series-icon.svg" alt="Series" />
                    <span>SERIES</span>
                </a>
            </NavMenu>

        </Nav>
    )
}

const Nav = styled.nav`
position:fixed;
top:0;
left:0;
right:0;
height:70px;
background-color:#090b13;
display:flex;
justify-content:space-between;
align-items:center;
padding:0 36px;
z-index:3;
`

const Logo = styled.a`
padding:0;
width:80px;
margin-top:4px;
max-height:70px;
font-size:0;
display:inline-block;

img{
    display:block;
    width:100%;
}
`;

const NavMenu = styled.div`
align-items:center;
display:flex;
flex-flow:row nowrap;
height:100%;
justify-content:flex-end;
margin:0px;
padding:0px;
position:relative;
margin-right:auto;
margin-left:25px;

a{
    display:flex;
    align-items:center;
    padding:0 12px;

    img{
        height:20px;
        min-width:20px;
        width:20px;
        z-index:auto;
    }

    span{
        color: rgb(249, 249, 249);
        font-size:13px;
        letter-spacing:1.42px;
        line-height:1.08;
        padding:2px 3px;
        white-space:nowrap;
        position:relative;
        margin-bottom:-4px;
    
        &:before{
            background-color:rgb(249, 249, 249);
            border-radius:0px 0px 4px 4px;
            bottom:-5px;
            content:"";
            left:0px;
            height:2px;
            opacity:0;
            position:absolute;
            right:0px;
            transform-origin: left center;
            transform:scaleX(0) ;
            transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
            visibility:hidden;
            width:auto;
        }
    }

    &:hover{
        span:before{
            transform:scaleX(1);
            visibility:visible;
            opacity:1 !important;
        }
    }
}
`

export default Header
