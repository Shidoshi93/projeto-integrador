import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Nav from "../components/nav/Nav";
import Feed from '../pages/feed'
import Login from '../pages/login/login'
import Signup from '../pages/signup/signup'
import CadastroDoacao from '../pages/donation/donation'
import Profile from '../pages/profile'
import GeralNav from "../components/nav/geralNav";
import PostDetail from "../pages/postDetail/postDetail";
import Home from '../pages/home/home';
import Recadastro from "../pages/password/newpassword"
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