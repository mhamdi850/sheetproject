import React, {useEffect, useState} from 'react';
import Routes from "./Components/Routes";
import {UidContext} from "./Components/AppContext";
import axios from "axios";
import {useDispatch} from "react-redux";
import { getUser } from './actions/user.actions';

const App = () => {
    const [uid, setUid] = useState(null)
     const dispatch = useDispatch()

    //contrôler le token du user
    useEffect(()=>{
      const fetchToken = async() => {
        await axios({
          method:"get",
          url: `${process.env.REACT_APP_API_URL}jwtid`,
          withCredentials: true
        })
        .then((res) => 
            {
            console.log(res)
            setUid(res.data)
            })
        .catch((err) => console.log("no token"))
      }
      fetchToken()

      if (uid) dispatch(getUser(uid))
      //callback pour éviter que l'opération se répète à l'infini []
    }, [uid])

  return(
  <UidContext.Provider value={uid}>
      <Routes />
  </UidContext.Provider>
  )

}
export default App