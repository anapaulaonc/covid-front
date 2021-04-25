import React from 'react';
import { BrowserRouter, Route, Switch} from "react-router-dom";
import ChartsPage from './pages/ChartsPage/ChartsPage';
import MainPage from './pages/MainPage/MainPage';

const Routes = () => (
    <BrowserRouter>

    <Switch>        
        <Route exact path="/" /*component={MainPage} */>
         <MainPage/>
        </Route>  

        <Route exact path="/charts/:id" >
         <ChartsPage/>
        </Route>
    </Switch>    
    </BrowserRouter>
);
export default Routes;