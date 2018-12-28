import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from "./pages/Header";
import Footer from './pages/Footer';
import getAllQuestions from './getAllQuestions';
import "../App.css";

const App = () => (
    <div>
          <Header /> 
          <div className="container">
            <Switch>
                <Route exact path="/" component={getAllQuestions} />
            </Switch>
          </div>
            <footer className="container">
        <Footer />
      </footer>
    </div>
);

export default App;
