import React from 'react'
import { Route,Routes } from "react-router-dom"
import App from './App';
import Login from './Login';
const Router = () => {
  return (
   <>
    <Routes>
      <Route path="/" component={Login} />
      <Route path="/app" component={App} />
    </Routes>
   </>
  )
}

export default Router