import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import NavbarComponent from './components/common/NavbarComponent';
import CreateCategoryContainer from './containers/categoryContainers/CreateCategoryContainer';
import DetailCategoryContaioner from './containers/categoryContainers/DetailCategoryContaioner';
import EditCategoryContainer from './containers/categoryContainers/EditCategoryContainer';
import HomeContainer from './containers/categoryContainers/CategoryHomeContainer';

function App() {
  return (
    <div>
      <NavbarComponent />
      <BrowserRouter>
        <Route path="/" exact component={HomeContainer} />

        <Route path="/create" exact component={CreateCategoryContainer} />

        <Route path="/detail/:id" exact component={DetailCategoryContaioner} />

        <Route path="/edit/:id" exact component={EditCategoryContainer} />
      </BrowserRouter>
    </div>
  );
}

export default App;
