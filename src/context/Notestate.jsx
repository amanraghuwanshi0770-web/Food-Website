import { useState } from "react";
import notecontext from "./notecontext";
import junkFoodData from "./backend";

const Notestate = (props) => {

   let [all,setall] = useState(junkFoodData)
  let [input, setinput] = useState('')
    let [showcart,setshowcart] = useState('')
  
  return (
    <notecontext.Provider
      value={{
        input,
        setinput,
        all,
        setall,
        showcart,
        setshowcart
      }}>
      {props.children}
    </notecontext.Provider>
  );
};

export default Notestate;
