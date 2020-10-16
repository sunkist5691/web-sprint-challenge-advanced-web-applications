import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => {
   //the rest of the props we're not using
 
   
   return (
     <Route
       {...rest}
       render={ props => {
         // props={history: '...', params: '...', etc,}
         // you can write the 'render' code into different way:
         // render={ ()=> token? <Component /> : <Redirect to='/login' /> }
         if (localStorage.getItem('token')) {
           //return the component
           return <Component {...props} />;
         } else {
           //redirect user to /login
           return <Redirect to="/login" />;
         }
       }}
     />
   );
 };
 
 export default PrivateRoute;