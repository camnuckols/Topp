import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Router, browserHistory } from 'react-router';
import App from './components/App/App';
import './index.css';

ReactDOM.render( 
    <Router history={ browserHistory }>
        <Route path="/" component={ App } />
        <Route path="/auth/twitter" component={ App } />
    </Router>,
    document.getElementById( 'root' )
);