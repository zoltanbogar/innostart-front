import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';

import Layout from './containers/Layout/Layout';
import Main from './containers/Main/Main';
import Second from './containers/Second/Second';

class App extends Component {
    render() {
        return (
            <Layout>
                <Switch>
                    <Route path="/second/*">
                        <Second/>
                    </Route>
                    <Route path="/" exact>
                        <Main/>
                    </Route>
                </Switch>
            </Layout>
        );
    }
}

export default App;