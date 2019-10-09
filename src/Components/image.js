import React, { useEffect, useState } from "react";
import axios from "axios";

function Image() {
  const [image, setImage] = useState([]);

  useEffect(() => {
    axios
      .get(`https://api.nasa.gov/planetary/apod?api_key=juqFK0XMHkuJYbg0mJM66eF31hMsRNrxhU2Mjhfo`)
      .then(response => {
        console.log(response);
        setImage(response.data)
      });
  }, []);

  return (
    <div className="photoContainer">
      <div className="photo">
          <h2>{image.title}</h2>
         <img className="APOD" src={image.url} alt="Nasa APOD"/>
         {/* <p>{image.explanation}</p> */}
         <p>{image.date}</p>
      </div>
    </div>
  );
}
export default Image;