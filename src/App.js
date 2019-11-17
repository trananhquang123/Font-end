import React, { Component } from 'react';
import './App.css';
import Menu from './components/menu';
import routes from './routers';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Menu />
                    <div className="container">
                        <div className="row">
                            {this.showContentMenus(routes)}
                        </div>
                    </div>
                </div>
            </Router>
        );
    }

    showContentMenus = (routes) => {
        var result = null;
        if (routes.length > 0) {
            result = routes.map((route, index) => {
                return (
                    <Route
                        key={index}
                        path={route.path}
                        exact={route.exact}
                        component={route.component}
                       
                    />
                );
            });
        }
        return <Switch>{result}</Switch>;
    }

}

export default App;
