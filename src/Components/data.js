import React, {useState, useEffect} from "react";
import styled from "styled-components";
import axios from "axios";
import Title from "./title";
import Date from "./date";
import Image from "./image";

const Photo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: left;
  padding: 2%;
`;

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
      <Photo>
        <Title title={photo.title}/>
        <Image photoUrl={photo.url}/>
        <Date date={photo.date}/>
      </Photo>
  );
}
export default Data;

  