
import React, {useState, useEffect,useContext} from "react";
import axios from "axios";
import { useGoogleLogin,googleLogout } from "@react-oauth/google";

import GoogleIcon from '../../images/icons/google-logo.png'
import { Icon, IconCont } from "../../style/styles";
// context
import UserContext from '../fetchData/data'

import styled from "styled-components";
import * as palette from "../style-variables"

import { motion } from "framer-motion";
import { PopUpAnim } from "../../animation";

const Login = () => {
  const { loading, userData, setUserData } = useContext(UserContext)
  const [user, setUser] = useState();
  const [profile, setProfile] = useState();
  const [accessToken, setAccessToken] = useState(localStorage.getItem('accessToken'))
  const [popup, setPopup] = useState(false)
  // const storedData = localStorage.getItem('accessToken');
  // localStorage.getItem('accessToken')
  // console.log(userData)

  const login = useGoogleLogin({
    onSuccess: (codeResponse) => {
      setUser(codeResponse)
      // console.log(codeResponse)
      localStorage.setItem('accessToken', codeResponse.access_token);
      setAccessToken(codeResponse.access_token)
    },
    onError: (error) => console.log("Login Failed:", error)
  });

  // log out function to log the user out of google and set the profile array to null
  const logOut = () => {
    googleLogout();
    setAccessToken(null);
    setUserData(null);
    localStorage.setItem('accessToken','')
  };

  useEffect(() => {
    if (typeof accessToken === "string") {
      axios
        .get(
          `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${accessToken}`,
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
              Accept: "application/json",
            },
          }
        )
        .then((res) => {
          setUserData(res.data);
        })
        .catch((err) => console.log(err));
    }
  }, [user]);

  return (
    <>
    {!userData ? 
    <IconContSign>
      <button
      type="button"
      className="bg-mainColor flex justify-center items-center p-3 rounded-lg cursor-pointer outline-none"
      onClick={() => login()}
    >
      <IconCont 
      className='flex'
      whileTap={{scale: .95}}
      whileHover={{
          scale: 0.95,
      }}>
          <Icon src={GoogleIcon}></Icon>
          <p>Login</p>
      </IconCont>
    </button>
    </IconContSign> : 
    <>
    <IconContSign className='flex' onClick={()=> setPopup(!popup)}>
      
      <Icon style={{marginRight: '.25rem', borderRadius: "1rem"}} src={userData.picture}></Icon>
      
    {popup && (

    
    <PopUp 
    variants={PopUpAnim}
    initial="hidden"
    animate="show"
    exit="exit"
    >
      <p>Logged as:</p>
      <p>{userData.email}</p>
      <button className="flex" style={{justifyContent: 'center'}} onClick={()=>logOut()}>
        
        <Icon src={GoogleIcon}></Icon>  
        Logout    
      </button>
    </PopUp>
    )}
    </IconContSign>
    
    </>
    }
    </>
  );
};

const IconContSign = styled(IconCont)`
  margin: 0 10px;
  text-align: right;
  padding-right: 20px;
  img {max-width: 22px;}
  p,button {font-size: .9rem;}
  button {column-gap: .5rem}
`

const PopUp = styled(motion.div)`
  position: absolute;
  top: 130%;
  right: 20px;
  background: ${palette.MAIN_COLOR};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  box-shadow: ${palette.SHADOW1};
  border-radius: 0.5rem;
  border: 1px solid ${palette.GRAY_COLOR};
  p,button {
    padding: .85rem;
    width: 100%;
    &:hover {
      background: ${palette.GRAY_COLOR};
    }
  }
`

export default Login;