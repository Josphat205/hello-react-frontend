import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setGreetings } from "../features/greetingSlice";
const Home = () => {
  const dispatch = useDispatch();
  const fetchData = async () => {
    const response = await axios.get("http://localhost:3000/messages");
    dispatch(setGreetings(response.data));
  };
  useEffect(() => {
    fetchData();
  },[]);
  const greeting = useSelector(state => state.greeting.greeting.message);
  return (
    <div style={{alignItems:"center"}}>
      <h1>Greetings</h1>
      {greeting ? <p>{greeting?.message} posted on {greeting?.created_at}</p> : <p>No greetings yet!</p>}
    </div>
  );
};

export default Home;
