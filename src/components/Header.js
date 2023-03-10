import React, { useEffect } from 'react';
import styled from "styled-components";
import { auth, provider } from "../firebase";
import { useDispatch, useSelector } from "react-redux"; //these are helpers
import { useNavigate } from "react-router-dom";
import { selectUserName, selectUserPhoto, setSignOutState, setUserLoginDetails } from "../features/user/userSlice";
import { Link } from "react-router-dom";

//React-Redux hooks to let React components interact with the Redux store.

/*
The <Header> component will see the new state value from the store and 
re-render itself with the new data
*/
const Header = (props) => {

    //useDispatch() - allow us to dispatch actions to a store.
    const dispatch = useDispatch();

    //The react-router hook returns a function that lets you navigate.
    const navigate = useNavigate();

    //useSelector() - we can read data from the store.
    const userName = useSelector(selectUserName);
    const userPhoto = useSelector(selectUserPhoto);

    useEffect(() => {
        auth.onAuthStateChanged(async (user) => {

            //Currently signed-in user. If a user isn't signed in, user is null:
            if (user) {
                setUser(user)
                navigate('/home')
            }
        })
    }, [userName]) //runs this functionality when username changes

    //sign in with a google account
    const handleAuth = () => {
        if (!userName) {

            //To sign in with a pop-up window, call signInWithPopup(auth, provider)
            auth.signInWithPopup(provider).then((result) => {
                // The signed-in user info.
                setUser(result.user);//sets user info
            }).catch((error) => {
                // Handle Errors here.
                alert(error.message);//shows an error message
            });
        }
        else if (userName) {
            //Sign out
            auth.signOut().then(() => {
                dispatch(setSignOutState())
                navigate('/')
            })
                .catch((err) => alert(err.message)); // Handle Errors here.
        }
    };

    const setUser = (user) => {

        //The corresponding Redux action will be dispatched to the store.
        dispatch(

            //The slice reducer will see the actions and update its state.
            setUserLoginDetails({
                name: user.displayName,
                email: user.email,
                photo: user.photoURL,
            })
        );
    }

    return (
        <Nav>
            <Logo><img src="/images/logo.svg" alt="Disney+" /></Logo>
            {!userName ? <Login onClick={handleAuth}>Login</Login> : (
                <>
                    <NavMenu>
                        <Link to='/Home'>
                            <img src="/images/home-icon.svg" alt="Home" />
                            <span>HOME</span>
                        </Link>
                        <a href="/search"><img src="/images/search-icon.svg" alt="Search" />
                            <span>SEARCH</span>
                        </a>
                        <a href="/watchlist"><img src="/images/watchlist-icon.svg" alt="Watchlist" />
                            <span>WATCHLIST</span>
                        </a>
                        <a href="/Originals"><img src="/images/original-icon.svg" alt="Originals" />
                            <span>ORIGINALS</span>
                        </a>
                        <a href="/movies"><img src="/images/movie-icon.svg" alt="Movies" />
                            <span>MOVIES</span>
                        </a>
                        <a href="/series"><img src="/images/series-icon.svg" alt="Series" />
                            <span>SERIES</span>
                        </a>
                    </NavMenu>
                    <SignOut>
                        <UserImage src={userPhoto} alt={userName} />
                        <DropDown>
                            <span onClick={handleAuth}>Sign Out</span>
                        </DropDown>
                    </SignOut>

                </>)}
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

const Login = styled.a`
    background-color:rgba(0, 0, 0, 0.6);
    padding:8px 16px;
    text-transform:uppercase;
    letter-spacing:1.5px;
    border: 1px solid #f9f9f9;
    border-radius:4px;
    transition: all 0.2s ease 0s;

    &:hover{
        background-color: #f9f9f9;
        color:#000;
        border-color:transparent;
    }
`
const UserImage = styled.img`
    height: 100%;
`

const DropDown = styled.div`
    background-color: rgb(19, 19, 19);
    position:absolute;
    top:50px;
    right:0px;
    border: 1px solid rgba(151, 151, 151, 0.34);
    box-shadow: rgb(0,0,0 / 50%) 0px 0px 18px 0px;
    padding:10px;
    font-size: 14px;
    letter-spacing: 3px;
    width:105px;
    opacity:0;

`;

const SignOut = styled.div`
    position: relative;
    height:48px;
    width:48px;
    display:flex;
    cursor:pointer;
    align-items:center;
    justify-content:center;

    ${UserImage}
    {
        border-radius: 50%;
        width:100%;
        height:100%;
    }

    &: hover{
        ${DropDown}{
            opacity:1;
            transition-duration:1s;
        }
    }
`;


export default Header
