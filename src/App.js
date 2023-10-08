import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Body from "./components/Body";
import Header1 from "./components/Header1";
import Axios from "./components/Axios";
import PopUpNoInternet from "./components/PopUpNoInternet";
import { Globals } from "./globals/Globals";
import { useState } from "react";


const router = createBrowserRouter([
  {
    path: "/",
    element: 
    <Header1/>
  },
  {
    path : "/learn",
    element:
    <>
      <Header1/>
      <Body/>
    </>
  },{
    path:"/axios",
    element :<>
      <Header1/>
      <Axios Mode={"Explore"}/>
    </>
  }
]);

export default function App() {
  const [Mode,SetMode]=useState('Explore')
  const [interNetError , setError] = useState(false);
  const [keyword,setKey]=useState('all')
  const [country,setCountry] = useState(localStorage.getItem('country')||'us')
  const [ErrorMsg , setErrorMsg] = useState()
  const [apiKey,setswapKey]=useState('0a08cf6a23cb4719be8e4baaa290667a');
  const apiKey1='0a08cf6a23cb4719be8e4baaa290667a'
  const apiKey2='4c3d292137c04facb58dedae1916c041'
  return (
    <Globals.Provider value={{Mode,
                              SetMode,
                              interNetError,
                              setError,
                              keyword,
                              setKey,
                              country,
                              setCountry,
                              ErrorMsg ,
                              setErrorMsg,
                              apiKey,
                              setswapKey,
                              apiKey1,
                              apiKey2
                              }}>
      <PopUpNoInternet/>
      <RouterProvider router={router} />
    </Globals.Provider>
    
  )
}