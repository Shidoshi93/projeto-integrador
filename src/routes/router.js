import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Nav from "../components/Nav/Nav";
import Feed from '../pages/feed'
import Login from '../pages/login'
import Signup from '../pages/singup'
import CadastroDoacao from '../pages/singup2'
import Profile from '../pages/profile'
import PostDetail from "../pages/postDetail/postDetail";
import Home from '../pages/home'

function Router() {
    return (
        <BrowserRouter>
            <Nav />
            <Switch>
                <Route exact path='/'>
                    <Home />
                </Route>
                <Route exact path='/feed'>
                    <Feed />
                </Route>

                <Route exact path='/detail/:id'>
                    <PostDetail />
                </Route>

                <Route exact path='/login'>
                    <Login />
                </Route>

                <Route exact path='/signup'>
                    <Signup />
                </Route>

                <Route exact path='/donation'>
                    <CadastroDoacao />
                </Route>

                <Route exact path='/profile'>
                    <Profile />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}
export default Router;