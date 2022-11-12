import { createContext, useContext, useEffect, useState } from "react";
import { directory, profile } from "../pages";
import { useQuery, useMutation, queryClient } from "react-query";
import { auth } from "../lib/firebase";

export const GlobalContext = createContext();

const GlobalContextProvider = ({ children }) => {
  function showCurrentUser() {
    try {
      const user = auth.currentUser;
      setCurrentUser(user.email);
    } catch (error) {
      console.log(error);
    }
  }

  //REGISTER STATE
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [photo, setPhoto] = useState("");



  //current user INFO
  const [currentUserEmail, setCurrentUserEmail] = useState("");

  return (
    <GlobalContext.Provider
      value={{
        name,
        setName,
        email,
        setEmail,
        password,
        setPassword,
        photo,
        setPhoto,
        showCurrentUser,
        currentUserEmail,
        setCurrentUserEmail,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContextProvider;

export const useGlobalInfo = () => {
  const values = useContext(GlobalContext);

  return { ...values };
};
