import React, {useState, useEffect} from "react";
import axios from "axios";
import Title from "./title";
import Date from "./date";


const Data = () => {
  const [photo, setPhoto] = useState([]);
  const [title, setTitle] = useState([]);

  useEffect(() => {
    axios
      .get(`https://api.nasa.gov/planetary/apod?api_key=juqFK0XMHkuJYbg0mJM66eF31hMsRNrxhU2Mjhfo`)
      .then(response => {
        console.log(response);
        setPhoto(response.data)
        setTitle(response.data)
      });
  }, []);

  return (
      <div className="photo">
        <Title title={title.title}/>
         <img className="APOD" src={photo.url} alt="Nasa-APOD"/>
        <Date date={photo.date}/>
        
        
        
      </div>
  );
}
export default Data;

  