import React from 'react'
import { BrowserRouter , Switch , Route} from 'react-router-dom'
import Create from './component/Create'
import Home from './component/Home'
import Update from './component/Update'
import Menu from './header/Menu'

export default function App () {
  return(
    <BrowserRouter>
        <Menu/>
        <Switch>
            <Route exact path = "/" component={Home} />
            <Route exact path = "/home" component={Home} />
            <Route exact path = "/create" component={Create} />
            <Route exact path = "/update" component={Update} />
        </Switch>

    </BrowserRouter>
  )
}