import { createContext, useContext, useEffect, useState } from "react";
import { useQuery } from "react-query";
import { KEY_USERS } from "../helpers/query-keys";

export const GlobalContext = createContext();

const GlobalContextProvider = ({ children }) => {
  

  async function getUsers(url = ''){
    const response = await fetch(url,{
        method:'GET',
        headers:{
          'Content-Type':'application/json',
        }
    });
    return response.json();
}

const propsReactQuery = useQuery([KEY_USERS], () =>
  getUsers('api/users')
)

  //REGISTER STATE
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [photo, setPhoto] = useState("");



  //current user INFO
  const [currentUserEmail, setCurrentUserEmail] = useState("");
  const [currentUser, setCurrentUser] = useState('')
  console.log(currentUser.email);
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
        currentUserEmail,
        setCurrentUserEmail,
        currentUser,setCurrentUser,
        propsReactQuery,
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
