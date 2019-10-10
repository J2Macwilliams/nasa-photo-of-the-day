import React, {useState, useEffect} from "react";
import axios from "axios";
import Title from "./title";
import Date from "./date";
import Image from "./image";


const Data = () => {
  const [photo, setPhoto] = useState([]);
  
  

  useEffect(() => {
    axios
      .get(`https://api.nasa.gov/planetary/apod?api_key=juqFK0XMHkuJYbg0mJM66eF31hMsRNrxhU2Mjhfo`)
      .then(response => {
        console.log(response);
        setPhoto(response.data)
      });
  }, []);

  return (
      <div className="photo">
        <Title title={photo.title}/>
        <Image photoUrl={photo.url}/>
        <Date date={photo.date}/>
      </div>
  );
}
export default Data;

  