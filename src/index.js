import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {  Router,  IndexRoute,  Route, browserHistory} from "react-router"

import Layout from "./components/layout";
import Root from "./components/root";


class App extends Component{
    
    
    
           
    render(){
        
        return(
            <div className="image-cover">
                <Root />
                <Layout />
            </div>
        )

    }

}

ReactDOM.render(<App />, document.querySelector(".container"))
