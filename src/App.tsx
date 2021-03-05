import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'

import './App.css'
import { Container } from '@material-ui/core'
import { PizzaList } from './pages/PizzaList'
import { Route, Switch } from 'react-router-dom'
import { Header } from './components/Header'
import { Orders } from './pages/Orders'
import { Statistics } from './pages/Statistics'

function App() {
  return (
    <div className='App'>
      <CssBaseline />
      <Header />
      <Container maxWidth='md'>
        <Switch>
          <Route exact path='/' component={PizzaList} />
          <Route exact path='/orders' component={Orders} />
          <Route exact path='/statistics' component={Statistics} />
        </Switch>
      </Container>
    </div>
  )
}

export default App
