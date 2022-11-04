import { createContext, useContext, useState } from "react";
import { directory, profile } from "../pages";
import {useQuery, useMutation, queryClient} from 'react-query'


export const GlobalContext = createContext();


const GlobalContextProvider = ({ children }) => {

    async function getData(url = ''){
        const response = await fetch(url,{
            method:'GET',
            headers:{
              'Content-Type':'application/json',
            }
        });
        return response.json();
    }

    const propsReactQuery = useQuery(['members'], () =>
      getData('api/members')
    )

    

    
    async function updateData(url='',body={}){
      const response = await fetch(url, {
        method: 'PUT',
        headers:{
          'Content-Type':'application/json',
        },
        body: JSON.stringify(body)
      });
      return response.json();
    }
    async function deleteData(url=''){
      const response = await fetch(url,{
        method:'DELETE',
        headers:{
          'Content-Type':'application/json',
        },
      });
      return response.json();
    }
    // async function findByName(url=''){
    //   const response = await fetch(url, {
    //     method:'GET',
    //     headers:{
    //       'Content-Type':'application/json'
    //     },
    //   });
    //   return response.json();
    // }

    

    
    //fetch
    const [data, setData] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const [isError, setIsError] = useState(false)
    const [isSuccess, setIsSuccess] = useState(false)
    const [filter, setFilter] = useState('')
  
    //modal member buttontype sidebar
    const [open, setOpen] = useState(false)
    const [currentMember, setCurrentMember] = useState(null)
    const [buttonType, setButtonType] = useState(null);
    const [sidebarOpen, setSidebarOpen] = useState(false);
  
    //FORMULARIO
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [location, setLocation] = useState("");
    const [sits, setSits] = useState("");
    const [title, setTitle] = useState("");
    const [team, setTeam] = useState("");
    const [salary, setSalary] = useState("");
    const [birthday, setBirthday] = useState("");
    const [about, setAbout] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const [coverImageUrl, setCoverImageUrl] = useState("");
  
    return (
      <GlobalContext.Provider
        value={{
          propsReactQuery,
          getData,
          
          updateData,
          deleteData,
          //findByName,
          isLoading,setIsLoading,
          isError,setIsError,
          isSuccess, setIsSuccess,
          data, setData,
          filter,setFilter,
          open,setOpen,
          sidebarOpen,setSidebarOpen,
          name, setName,
          phone, setPhone,
          email, setEmail,
          location, setLocation,
          sits, setSits,
          title, setTitle,
          team, setTeam,
          salary, setSalary,
          birthday, setBirthday,
          about, setAbout,
          imageUrl, setImageUrl,
          coverImageUrl, setCoverImageUrl,
          buttonType, setButtonType,
          currentMember, setCurrentMember
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