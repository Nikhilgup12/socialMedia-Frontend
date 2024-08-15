import {Switch,Route} from"react-router-dom"
import Register from "./components/Register"
import Login from "./components/Login"
import UserDetails from "./components/UserDetails"
import ProfileDetails from "./components/ProfileDetails"
import "./App.css"

const App = () => {
  return (
    
     <Switch>
      <Route exact path="/register" component={Register} /> 
      <Route exact path="/login" component={Login} /> 
      <Route exact path="/user-detail" component={UserDetails} /> 
      <Route exact path="/profile/:id" component={ProfileDetails} /> 
     </Switch>
    
  )
}

export default App
