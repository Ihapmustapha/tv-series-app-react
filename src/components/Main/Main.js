import React from 'react'; 
import { Switch, Route } from 'react-router-dom'; 
import Series from '../../containers/Series/Series';
import SingleSeries from '../../containers/SingleSeries/SingleSeries'; 


const Main = props => {
    return (
    <Switch>
         <Route exact path= "/" component= {Series}></Route>
         <Route exact path= "/series/:id" component= {SingleSeries}></Route>
    </Switch>
    ); 
    
}

export default Main; 