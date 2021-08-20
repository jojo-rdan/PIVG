import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import LandingPage from './components/LandingPage';
import HomePage from './components/HomePage';
import GameDetails from './components/GameDetails';
import CreateVideogame from './components/CreateVideogame'

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Switch>
        <Route exact path='/' component={LandingPage}/>
        <Route exact path='/home' component={HomePage}/>
        <Route exact path='/videogame' component={CreateVideogame}/>
        <Route exact path='/home/:id' component={GameDetails}/>
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
