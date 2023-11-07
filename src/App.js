import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Header from './components/header';
import Profile from './components/Profile';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Navbar></Navbar>
      <Profile></Profile>
    </div>
  );
}

export default App;
//To add the tags for the profile component, 
//just the profile, you don't need to add the post (the small profile pic and the text)
