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
import {
    ContentContainer
} from '../styles/global';


function Router() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/'>
                    <Nav />
                    <ContentContainer>
                    <Home />
                    </ContentContainer>
                </Route>
                <Route exact path='/feed'>
                    <GeralNav />
                    <ContentContainer>
                    <Feed />
                    </ContentContainer>
                </Route>

                <Route exact path='/detail/:id'>
                    <GeralNav />
                    <ContentContainer>
                    <PostDetail />
                    </ContentContainer>
                </Route>

                <Route exact path='/login'>
                    <Login />
                </Route>

                <Route exact path='/signup'>
                    <Nav />
                    <ContentContainer>
                    <Signup />
                    </ContentContainer>
                </Route>

                <Route exact path='/donation'>
                    <GeralNav />
                    <ContentContainer>
                    <CadastroDoacao />
                    </ContentContainer>
                </Route>

                <Route exact path='/profile'>
                    <GeralNav />
                    <ContentContainer>
                    <Profile />
                    </ContentContainer>
                </Route>

                <Route exact path='/newpassword'>
                    <Nav />
                    <ContentContainer>
                    <Recadastro />
                    </ContentContainer>
                </Route>
            </Switch>
        </BrowserRouter>
    )
}
export default Router;