import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./card";

function Image() {
  const [image, setImage] =useState([]);

  useEffect(() => {
    axios
      .get(`https://api.nasa.gov/planetary/apod?api_key=juqFK0XMHkuJYbg0mJM66eF31hMsRNrxhU2Mjhfo`)
      .then(response => {
        console.log(response);
        // setImage(response.data)
      });
  }, []);

  return (
    <div className="photoContainer">
      <div className="photo">
        {image.map((photo) => {
            return (
            <Card 
            title={photo.title}
            Url={photo.url}
            explanation={photo.explanation}
            date={photo.date}
            />
            );
        })}
      </div>
    </div>
  );
}
export default Image;