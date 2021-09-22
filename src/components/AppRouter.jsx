import React from 'react';
import Home from '../routes/Home';
import Auth from '../routes/Auth';
import { BrowserRouter, Route, Switch } from "react-router-dom"
import NavBar from '../routes/NavBar';
const AppRouter = () => {
    return (
        <div>

            <BrowserRouter>
                <NavBar />
                <Switch>
                    <Route path="/Home" exact>
                        <Home />
                    </Route>
                    <Route path="/Auth" exact>
                        <Auth />
                    </Route>
                </Switch>
            </BrowserRouter>

        </div>
    );
};

export default AppRouter;