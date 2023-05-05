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
  const greeting = useSelector(state => state.greeting.greeting);
    
    return (
        <div>
      <h1>Greetings</h1>
      
        <p>
          {greeting.message.message} posted on {greeting.message.created_at}
        </p>
     
    </div>
    )
};

export default Home;
