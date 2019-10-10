import React from "react";

const Image = props => {
  return(
        <>
            <img className="APOD" src={props.photoUrl} alt="" /> 
        </>
    
  );
};

export default Image;