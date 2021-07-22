// import React from "react";

// const App = () => {
//   return (
//     <>
//       <h1>Lambda Eats</h1>
//       <p>You can remove this code and create your own header</p>
//     </>
//   );
// };
// export default App;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Route, Link, Switch } from 'react-router-dom';
import Header from './components/Header';
import styled from "styled-components";
import Pic from './components/Pic'
import Form from './components/pizza'

const Container = styled.div`
*{
  padding:0px;
  margin:0px;
  font-family: san-serif;
  text-align: center;
  color: dodgerblue;
}`;



export default function App () {
  const [url, setUrl] =useState("https://buff.ly/2UybmBQ");
  return (
 
 
    <Container>
      <Switch>
      
      <Route>
      <Header id="order-pizza"path='/'/>
      </Route>
      
      <Route >
        <Form id="pizza-form" path="components/pizza">SHOW ME</Form>
      </Route>
      
      </Switch>
      <Pic pic={url}/>
    </Container>


  );
}

