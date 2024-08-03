import {
  createContext,
  useState,
  useEffect,
  ReactNode,
  useCallback,
} from "react";
//   import axios from 'axios';
//   import { getCookie, isAuth } from "../auth/helper";
//   import BASE_URL from "../baseUrl";
const GlobalStorage = createContext();
export default GlobalStorage;

export const DataStorage = ({ children }) => {
  const [helloCheck, setHelloCheck] = useState("");
  const [userProfile, setUserProfile] = useState();
  const [refreshProfile, setRefreshProfile] = useState(false);
  


  return (
    <GlobalStorage.Provider
      value={{
        helloCheck,
        setHelloCheck,
        userProfile,
        setUserProfile,
        refreshProfile, setRefreshProfile,
      
      }}
    >
      {children}
    </GlobalStorage.Provider>
  );
};
