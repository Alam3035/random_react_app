import logo from './logo.svg';
import './App.css';

function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

const user = {
  firstName: 'Alam',
  lastName: 'Husnan'
}

const element = <h1>Hello, {formatName(user)}</h1>;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {element}
      </header>
    </div>
  );
}

export default App;
