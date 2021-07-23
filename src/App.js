import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Route, Link, Switch } from 'react-router-dom';
import Header from './components/Header';
import styled from "styled-components";
import Pic from './components/Pic'
import Form from './components/pizza'
import * as yup from "yup";
// import schema from "./validations/formSchema";

const Container = styled.div`
*{
  padding:0px;
  margin:0px;
  font-family: san-serif;
  text-align: center;
  color: dodgerblue;
}`;

// const initialFormValues = {
//   name-input: "",
//   email: "",
//   password: "",
//   terms: "",
// };


export default function App () {
  const [url, setUrl] =useState("https://buff.ly/2UybmBQ");
  return (
 
 
    <Container>
      <Switch>
        
      <Route >
        <Form id="pizza-form" path="components/pizza">SHOW ME</Form>
      </Route>
      
      <Route>
      <Header id="order-pizza"path='/'/>
      <Pic pic={url}/>
      </Route>
      
      
      </Switch>
      
    </Container>


  );
}

