import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

import './style.css'
import Settings from './views/settings'
import Home from './views/home'
import More from './views/more'
import Games from './views/games'
import Chat from './views/chat'
import Proxies from './views/proxies'
import Tools from './views/tools'
import NotFound from './views/not-found'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route component={Settings} exact path="/settings" />
        <Route component={Home} exact path="/" />
        <Route component={More} exact path="/more" />
        <Route component={Games} exact path="/games" />
        <Route component={Chat} exact path="/chat" />
        <Route component={Proxies} exact path="/proxies" />
        <Route component={Tools} exact path="/tools" />
        <Route component={NotFound} path="**" />
        <Redirect to="**" />
      </Switch>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
