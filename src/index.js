import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Welcome from './Welcome';
import Comment from './Comment';
import Clock from './Clock';
import Toggle from './Toggle';
import LoginControl from './LoginControl';
import Page from './Page';
import NumberList from './NumberList';
import reportWebVitals from './reportWebVitals';

const author = {
  name: 'Hello Kitty',
  avatarUrl: 'https://placekitten.com/g/64/64'
}

const numbers = [1,2,3,4,5]

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Welcome name="Alam Husnan" />
    <Welcome name="Husnan Alam" />
    <Welcome name="Someone Here" />
    <Comment text="some comment" date="2021-06-29" author={author} />
    <Clock />
    <Clock />
    <Clock />
    <Toggle />
    <LoginControl />
    <Page />
    <NumberList numbers={numbers}/>
  </React.StrictMode>,
  document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
