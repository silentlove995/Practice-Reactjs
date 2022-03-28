import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { getToken } from './helpers/storage';
import { useJwt ,isExpired, decodeToken } from 'react-jwt'
import store from './redux/store';


let token = getToken()

if(token){
  console.log(token)
  let decodedData = decodeToken(token)
  console.log(decodedData)

  // if token still valid
  store.dispatch({ type: "USER_LOGIN_SUCCEEDED", payload: {
    username: decodedData.username,
    token
  }})
}

ReactDOM.render(
  
    <App />,
  
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
