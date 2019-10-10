import React from "react";
import styled from "styled-components";

const Apod = styled.img`
  border: 5px solid #7396c8;
  border-radius: 20px;
  box-shadow: 2.5px 2.5px 2.5px #322c2d;
  width:90%;
`;



const Image = props => {
  return(
        <>
            <Apod src={props.photoUrl} alt="" /> 
        </>
    
  );
};

export default Image;