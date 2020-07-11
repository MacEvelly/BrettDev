import React from 'react';
import { Switch, Route, NavLink, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import './App.css';

/*
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Alex has an <code>AMAZING</code> bootie.
        </p>
      </header>
    </div>
*/


const MyNav = () => (
  <ul>
    <li><NavLink exact key={1} to={`/`}       >Home    </NavLink></li>
    <li><NavLink exact key={1} to={`/about`}  >About   </NavLink></li>
    <li><NavLink exact key={1} to={`/setting`}>Setting </NavLink></li>
  </ul>
)

const pageTransition = {
  in :{ opacity:1, y:0 },
  out:{ opacity:0, y:"-100%"}
}
const myMotion = {
  initial:"out", 
  animate:"in", 
  exit:"out",
  variants:pageTransition
}

const Home    = () => (<motion.div {...myMotion} >Home: This is a home section</motion.div>)
const Setting = () => (<motion.div {...myMotion} >Setting: This is a setting section</motion.div>)
const About   = () => (<motion.div {...myMotion} >About: This is a about section</motion.div>)

const App = () => {
  var location = useLocation()
  return(
  <>
    <MyNav />
    <h1>Hello World</h1>
    <AnimatePresence exitBeforeEnter>
      <Switch location={location} key={location.key}>
        <Route path="/setting" component={Setting} />
        <Route path="/about"   component={About}   />
        <Route path="/"        component={Home}    />
      </Switch>
    </AnimatePresence>
  </>
)}
export default App;
