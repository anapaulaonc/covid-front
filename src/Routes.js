import React from 'react';
import { BrowserRouter, Route, Switch} from "react-router-dom";
import MainPage from './pages/MainPage/MainPage';

const Routes = () => (
    <BrowserRouter>

    <Switch>        
        <Route exact path="/" /*component={MainPage} */>
         <MainPage/>
        </Route>  
    </Switch>    
    </BrowserRouter>
);
export default Routes;