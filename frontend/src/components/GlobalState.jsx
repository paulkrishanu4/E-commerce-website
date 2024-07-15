import { createContext, useReducer, useEffect, useState } from "react"
import AppReducer from "./AppReducer";


const initialState ={
  watchlist: localStorage.getItem("watchlist")
  ? JSON.parse(localStorage.getItem("watchlist"))
  : [],
  total_price:0,
};
export const GlobalContext = createContext(initialState);

export const GlobalProvider = (props) => {
  var getTotalCartAmount=0;
  const [state, dispatch] = useReducer(AppReducer,initialState);
  const [total,setTotal] = useState(0);
  const[logout,setLogout]=useState();
  const[logininfo,setLogininfo]=useState({});

  useEffect(() => {
    localStorage.setItem("watchlist", JSON.stringify(state.watchlist));
  }, [state]);

 
 getTotalCartAmount+=total; 
  const addMovie = (items) =>{
    dispatch({type: "add_book_to_watchlist", payload: items})
  }

  const removeMovie = (id) => {
    dispatch({ type: "remove_book_from_watchlist", payload: id });
  };
  return (
    <GlobalContext.Provider value={{watchlist: state.watchlist, watched: state.watched, addMovie,removeMovie,setTotal,getTotalCartAmount,logout,setLogout,logininfo,setLogininfo}}>
      {props.children}
    </GlobalContext.Provider>
  )
};