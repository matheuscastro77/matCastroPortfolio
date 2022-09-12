import React, { useState } from "react";
import GlobalStateContext from "./GlobalStateContext"

const GlobalState = (props) => {

  const [menu, setMenu] = useState(false)
 
  return (
    <GlobalStateContext.Provider value={{ menu, setMenu }}>
      {props.children}
    </GlobalStateContext.Provider>
  )
}
export default GlobalState
