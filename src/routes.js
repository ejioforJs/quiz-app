import React from 'react'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import FirstProject from './Projects/FirstProject'
import SecondProject from './Projects/SecondProject'
import ThirdProject from './Projects/ThirdProject'
import FifthProject from './Projects/FifthProject'

const Navigator = () =>{
    return(
        <Router>
            <Switch>
                <Route exact path="/" component={FirstProject} />
                <Route path="/second" component={SecondProject} />
                <Route path="/third" component={ThirdProject} />
                <Route path="/fifth" component={FifthProject} />
            </Switch>
        </Router>
    )
}

export default Navigator