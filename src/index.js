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
import Blog from './Blog';
import NameForm from './NameForm';
import EssayForm from './EssayForm';
import Flavorform from './FlavorForm';
import Reservation from './Reservation';
import Calculator from './Calculator';
import WelcomeDialog from './WelcomeDialog';
import SignUpDialog from './SignUpDialog';
import FilterableProductTable from './ProductStuff';
import reportWebVitals from './reportWebVitals';

const author = {
  name: 'Hello Kitty',
  avatarUrl: 'https://placekitten.com/g/64/64'
}

const numbers = [1,2,3,4,5]
const postss = [
  {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
  {id: 2, title: 'Installation', content: 'You can install React from npm.'}
];
const PRODUCTS = [
  {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
  {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
  {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
  {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
  {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
  {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
];

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
    <Blog posts={postss} />
    <NameForm />
    <EssayForm />
    <Flavorform />
    <Reservation />
    <Calculator />
    <WelcomeDialog />
    <SignUpDialog />
    <FilterableProductTable products={PRODUCTS} />
  </React.StrictMode>,
  document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
