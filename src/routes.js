import {BrowserRouter,Route,Switch} from 'react-router-dom'

import Logon from './pages/logon';
import Dashboard from './pages/dashboard';


export default function Routes(){
    return(
       <BrowserRouter>
            <Switch>
                <Route path={"/"} exact component={Logon} />
                <Route path={"/dashboard"} component={Dashboard} />
            </Switch>
       
       </BrowserRouter>

    )
}