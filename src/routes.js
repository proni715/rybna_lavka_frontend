import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { AboutPage } from "./pages/AboutPage";
import { AuthPage } from "./pages/AuthPage";
import { ContactsPage } from "./pages/ContactsPage";
import { MainPage } from "./pages/MainPage";


export const useRoutes = (isAuthenticated) => {
  if (isAuthenticated) {
    return( 
        <Switch>
            <Route path="/" exact>
                <MainPage/>
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
