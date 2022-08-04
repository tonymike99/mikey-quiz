import axios from "axios";
import { useEffect } from "react";
import { createContext, useContext, useState } from "react";

type ChildrenProps = {
  children: React.ReactNode;
};

type LoginResponse = {
  foundUser: string | null;
  encodedToken: string;
};

type Response = {
  status: number;
  data: LoginResponse;
};

const defaultObj = {};
const AuthContext = createContext(defaultObj);

const AuthProvider = ({ children }: ChildrenProps) => {
  const [userDetails, setUserDetails] = useState(null);
  const [encodedToken, setEncodedToken] = useState(null);

  // ****************************************************************************************************

  useEffect(() => {
    const localToken = localStorage.getItem("mikey-quiz-jwt-token");

    if (localToken) {
      verifyJwtTokenOnPageRefresh(localToken);
    }
  }, []);

  // ****************************************************************************************************

  const authenticateLoginDetails = async (loginDetails: {}) => {
    try {
      const params = {
        method: "post",
        url: "/api/auth/login",
        data: loginDetails,
      };

      const loginResponse: Response = await axios.request(params);

      if (loginResponse.status === 200) {
        setUserDetails(loginResponse.data.foundUser);
        setEncodedToken(loginResponse.data.encodedToken);
        localStorage.setItem(
          "mikey-quiz-jwt-token",
          loginResponse.data.encodedToken
        );
      }
    } catch (error) {
      console.log(error.response.data);
    }
  };

  const authenticateSignupDetails = async (signupDetails: {}) => {
    try {
      const params = {
        method: "post",
        url: "/api/auth/signup",
        data: signupDetails,
      };

      const signupResponse = await axios.request(params);

      if (signupResponse.status === 201) {
        setUserDetails(signupResponse.data.createdUser);
        setEncodedToken(signupResponse.data.encodedToken);
        localStorage.setItem(
          "mikey-quiz-jwt-token",
          signupResponse.data.encodedToken
        );
      }
    } catch (error) {
      console.log(error.response.data);
    }
  };

  const logoutUserDetails = () => {
    setUserDetails(null);
    setEncodedToken(null);
    localStorage.removeItem("mikey-quiz-jwt-token");
    localStorage.removeItem("storedFilters");
    localStorage.removeItem("storedWishlistProducts");
    localStorage.removeItem("storedCartProducts");
  };

  const verifyJwtTokenOnPageRefresh = async (localToken: string | null) => {
    try {
      const params = {
        method: "post",
        url: "/api/auth/verifyJwtToken",
        data: {
          localToken,
        },
      };

      const verifyJwtTokenResponse = await axios.request(params);

      if (verifyJwtTokenResponse.status === 200) {
        setUserDetails(verifyJwtTokenResponse.data.foundUser);
        setEncodedToken(localToken);
      }
    } catch (error) {
      console.log(error.response.data);
    }
  };

  const valueObj = {
    userDetails,
    encodedToken,
    authenticateLoginDetails,
    authenticateSignupDetails,
    logoutUserDetails,
  };

  // ****************************************************************************************************

  return (
    <AuthContext.Provider value={valueObj}>{children}</AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };
