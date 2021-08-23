import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Feed from '../pages/feed'
import Login from '../pages/login/login'
import Signup from '../pages/signup/signup'
import CadastroDoacao from '../pages/donation/donation'
import Profile from '../pages/profile'
import PostDetail from "../pages/postDetail/postDetail";
import Home from '../pages/home/home';
import Recadastro from "../pages/password/newpassword"
import {
    ContentContainer
} from '../styles/global';
import NavNoCredentials from "../components/Nav/Nav";
import NavUserHasCredentials from "../components/Nav/NavUserHasCredentials"

function Router() {
    const token = localStorage.getItem("token")
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/'>
                    <NavNoCredentials />
                    <ContentContainer>
                        <Home />
                    </ContentContainer>
                </Route>
                <Route exact path='/feed'>
                    {token ? <NavUserHasCredentials 
                        feed = {true}
                    /> : <NavNoCredentials />}
                    <ContentContainer>
                        <Feed />
                    </ContentContainer>
                </Route>

                <Route exact path='/detail/:id'>
                    <NavUserHasCredentials 
                        detail = {true}
                    />
                    <ContentContainer>
                        <PostDetail />
                    </ContentContainer>
                </Route>

                <Route exact path='/login'>
                    <NavNoCredentials
                        hasLogin={false}
                    />
                    <Login />
                </Route>

                <Route exact path='/signup'>
                    <NavNoCredentials 
                        hasLogin={false}
                    />
                    <ContentContainer>
                        <Signup />
                    </ContentContainer>
                </Route>

                <Route exact path='/donation'>
                    <NavUserHasCredentials 
                        donation = {true}
                    />
                    <ContentContainer>
                        <CadastroDoacao />
                    </ContentContainer>
                </Route>

                <Route exact path='/profile'>
                    <NavUserHasCredentials 
                        profile = {true}
                    />
                    <ContentContainer>
                        <Profile />
                    </ContentContainer>
                </Route>

                <Route exact path='/newpassword'>
                    <NavNoCredentials />
                    <ContentContainer>
                        <Recadastro />
                    </ContentContainer>
                </Route>
            </Switch>
        </BrowserRouter>
    )
}
export default Router;