import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { AboutPage } from "./pages/AboutPage";
import { AuthPage } from "./pages/AuthPage";
import { ContactsPage } from "./pages/ContactsPage";
import { MainPage } from "./pages/MainPage.jsx";
import { RegisterPage } from "./pages/RegisterPage";
import { StorePage } from "./pages/StorePage";
import  ProfilePage  from "./pages/ProfilePage";
import CartPage  from "./pages/CartPage";



export const useRoutes = (isAuthenticated) => {
  if (isAuthenticated) {
    return( 
        <Switch>
            <Route path="/" exact>
                <MainPage/>
            </Route>
            
            <Route path="/me" exact>
                <ProfilePage/>
            </Route>

            <Route path="/cart" exact>
                <CartPage/>
            </Route>

            <Route path="/about" exact>
                <AboutPage/>
            </Route>

            <Route path="/contacts" exact>
                <ContactsPage/>
            </Route>
            <Redirect to='/'/>
            
        </Switch>
    )
  }else{
      return(
        <Switch>
            <Route path="/" exact>
                <MainPage/>
            </Route>

            <Route path="/register" exact>
                <RegisterPage/>
            </Route>

            <Route path="/store" exact>
                <StorePage/>
            </Route>

            <Route path="/cart" exact>
                <CartPage/>
            </Route>
            
            <Route path="/me" exact>
                <ProfilePage/>
            </Route>

            <Route path="/auth" exact>
                <AuthPage/>
            </Route>

            <Route path="/about" exact>
                <AboutPage/>
            </Route>

            <Route path="/contacts" exact>
                <ContactsPage/>
            </Route>
            <Redirect to='/'/>
        </Switch>
      )
  }
};
