import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Nav from "../components/Nav/Nav";
import Feed from '../pages/feed'
import Login from '../pages/login'
import Signup from '../pages/singup'
import CadastroDoacao from '../pages/singup2'
import Profile from '../pages/profile'
import GeralNav from "../components/Nav/geralNav";
import PostDetail from "../pages/postDetail/postDetail";
import Home from '../pages/home';
import Recadastro from "../pages/newpassword"


function Router() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/'>
                    <Nav />
                    <Home />
                </Route>
                <Route exact path='/feed'>
                    <GeralNav />
                    <Feed />
                </Route>

                <Route exact path='/detail/:id'>
                    <GeralNav />
                    <PostDetail />
                </Route>

                <Route exact path='/login'>
                    <Login />
                </Route>

                <Route exact path='/signup'>
                    <Nav />
                    <Signup />
                </Route>

                <Route exact path='/donation'>
                    <GeralNav />
                    <CadastroDoacao />
                </Route>

                <Route exact path='/profile'>
                    <GeralNav />
                    <Profile />
                </Route>

                <Route exact path='/newpassword'>
                    <Nav />
                    <Recadastro />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}
export default Router;