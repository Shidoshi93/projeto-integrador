import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Nav from "../components/Nav/Nav";
import Feed from '../pages/feed'

function Router() {
    return (
        <BrowserRouter>
            <Nav />
            <Switch>
                <Route exact path='/feed'>
                    <Feed />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}
export default Router;