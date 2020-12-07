/*import React, {Component} from 'react';

import Auxiliary from '../../hoc/Auxiliary/Auxiliary';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import classes from './Layout.css';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
    state = {
        showSideDrawer: false
    };

    sideDrawerClosedHandler = () => {
        this.setState({showSideDrawer: false});
    };

    sideDrawerToggleHandler = () => {
        this.setState((prevState) => {
            return {showSideDrawer: !prevState.showSideDrawer}
        });
    };

    render() {
        return (
            <Auxiliary>
                <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler} />
        <SideDrawer closed={this.sideDrawerClosedHandler} open={this.state.showSideDrawer} />
        <main className={classes.Content}>
            {this.props.children}
            </main>
            </Auxiliary>
    )
    }
}

export default Layout;*/

import React, {useState} from 'react';

import Auxiliary from '../../hoc/Auxiliary/Auxiliary';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import classes from './Layout.css';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

const layout = (props: { children: React.ReactNode; }) => {
    const [drawerState, setDrawer] = useState({
        showSideDrawer: false
    });

    const sideDrawerClosedHandler = () => {
        setDrawer({
            showSideDrawer: false
        });
    };

    const sideDrawerToggleHandler = () => {
        setDrawer((prevState: { showSideDrawer: boolean; }) => {
            return {showSideDrawer: !prevState.showSideDrawer}
        });
    };

    return (
        <Auxiliary>
            <Toolbar drawerToggleClicked={sideDrawerToggleHandler}/>
            <SideDrawer closed={sideDrawerClosedHandler} open={drawerState}/>
            <main className={classes.Content}>
                {props.children}
            </main>
        </Auxiliary>
    );
}

export default layout;