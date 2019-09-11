import React from 'react';
//import Avatar from '@material-ui/core/Avatar';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Registro from './Registroo'
import Login from './login'
import PagePlatos from './PageRestaurant'
import Home from './home'
class App extends React.Component {

    render() {
        return (
            <Router>
                <div className="App">
                    <div>
                        <Switch>
                            <Route exact path="/" component={Registro} />
                            <Route path="/login" component={Login}/>
                            <Route path="/home" component={Home}/>
                            <Route path="/platos" component={PagePlatos}/>
                        </Switch>
                    </div>
                    
                </div>
            </Router>
        )

    }
}
export default App;