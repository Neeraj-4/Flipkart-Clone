import { createContext, useState } from "react"

export const Datacontext = createContext(null);

const Dataprovider = ({children}) => {
  const [accountHolder,setAccountHolder]=useState('');
  return (
    <Datacontext.Provider value={{accountHolder,setAccountHolder}}>

    {children};
    </Datacontext.Provider>
  )
}

export default Dataprovider
