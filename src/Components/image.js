import React from "react";
import styled from "styled-components";


const Image = props => {
  return(
        <>
            <img className="APOD" src={props.photoUrl} alt="" /> 
        </>
    
  );
};

export default Image;