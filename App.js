import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Page from './Page';
import SearchPage from './SearchPage';
import AddIngredientPage from './AddIngredientPage';
import RecipeBook from './RecipeBook';
import Book from './Book';

const App = () => {
    //switches from one site to another
  return (
    <Switch>
      <Route exact path="/" component={Page} />
      <Route path="/search" component={SearchPage} />
      <Route path="/add-ingredient" component={AddIngredientPage} />
      <Route path="/recipe-book" component={RecipeBook} />
      <Route path="/book" component={Book} />
    </Switch>
  );
};

export default App;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);