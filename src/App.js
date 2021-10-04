
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Componants/Header/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './Componants/Home/Home';
import About from './Componants/About/About';
import Services from './Componants/Services/Services';
import Contact from './Componants/Contact/Contact';
import Footer from './Componants/Footer/Footer';
import Banner from './Componants/Header/Banner';
import NotFound from './Componants/PageNotFound/NotFound';

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/about">
            <About></About>
          </Route>
          <Route exact path="/service">
            <Services></Services>
          </Route>
          <Route exact path="/contact">
            <Contact></Contact>
          </Route>

          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>

    </div>
  );
}

export default App;
