import React from 'react';
import styled from  'styled-components';


const Image = styled.img `
border: 1px solid black;
margin: 1rem 0 1rem 0 ;
height: 60vh; `

export default function Pic(props){
    const {pic} = props;
    
    return (
        
        <div>
            {/* <img src="https://buff.ly/2UybmBQ" alt="pizza pie"></img> */}
            <Image src={pic} alt="Nasa Space Photo"/>
        </div>
        
    )
}