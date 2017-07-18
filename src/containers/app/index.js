import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './index.css';

import Dashboard from '../dashboard';
import TabSwitcher from '../../components/tab-switcher';
import AdminBoard from '../admin-board';

import { getData } from '../../backend_mock';
import * as appActions from '../../actions/AppActions'

class App extends Component {
    constructor() {
        super();
        this.handle = this.handle.bind(this);
    }
    componentWillMount() {
        getData().then(data => {
            this.props.appActions.updateData(data.data)
        });
    }
    handle(e) {
        console.log(e);
        console.log(this.props);
    }
  render() {
      const { departures, arrivals, filters } = this.props;
    return (
        <Router>
        <div>
            <TabSwitcher/>
            <Route exact path="/" component={ AdminBoard } />
            <Route path={ TAB_IDS.TAB_ARRIVALS } component={ () => <Dashboard flights={ arrivals } filters={ filters } handle={this.handle} />} />
            <Route path={ TAB_IDS.TAB_DEPARTURES } component={ () => <Dashboard flights={ departures } filters={ filters } handle={this.handle} /> } />
            <Route path={ TAB_IDS.TAB_ADMINISTRATION } component={ AdminBoard } />
        </div>
        </Router>
    );
  }
}

function mapStateToProps (state) {
    return {
        departures: state.app.departures,
        arrivals: state.app.arrivals,
        filters: state.form.filters
    }
}

function mapDispatchToProps(dispatch) {
    return {
        appActions: bindActionCreators(appActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

const TAB_IDS =
    {
        'TAB_DEPARTURES': '/departures',
        'TAB_ARRIVALS': '/arrivals',
        'TAB_ADMINISTRATION': '/admin'
    };

export { TAB_IDS };