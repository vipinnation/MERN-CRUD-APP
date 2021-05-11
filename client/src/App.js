import React from 'react'
import Navbar from './Component/Navbar'
import Data from './Component/Data'
import Form from './Component/Form'
import EditUser from './Component/EditUser.js'
import { Route, Switch } from 'react-router'
import DelUser from './Component/DelUser'




function App() {
    return (
        <>
        <Navbar />
            <Switch>
                <Route exact path='/' component={Data} />
                <Route exact path='/editUser/:id' component={EditUser} /> 
                <Route exact path='/delUser/:id' component={DelUser} />
            </Switch>
        </>
      
    )
}

export default App