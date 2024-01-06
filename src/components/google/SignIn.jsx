
import React, {useState, useEffect,useContext} from "react";
import axios from "axios";
import { useGoogleLogin,googleLogout } from "@react-oauth/google";

import GoogleIcon from '../../images/icons/google-logo.png'
import { Icon, IconCont } from "../../style/styles";
// context
import UserContext from '../fetchData/data'

const Login = () => {
  const { loading, userData, setUserData } = useContext(UserContext)
  const [user, setUser] = useState();
  const [profile, setProfile] = useState();
  const [accessToken, setAccessToken] = useState(localStorage.getItem('accessToken'))
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
    </button> : 
    <IconCont>
    <div>
      <p>Logged as:</p>
      <p>{userData.email}</p>
      
      <button className="flex" onClick={()=>logOut()}>
        
        <Icon style={{marginRight: '.25rem'}} src={GoogleIcon}></Icon>Logout
      </button>
    </div>
    
    </IconCont>
    }
    </>
  );
};

export default Login;