import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './index.css';

import Dashboard from '../dashboard';
import TabSwitcher from '../../components/tab-switcher';
import FlightEditPopup from '../flight-edit-popup/';

import { getData } from '../../backend_mock';
import * as appActions from '../../actions/AppActions'

class App extends Component {
    constructor() {
        super();
        this.handleEditModeStatus = this.handleEditModeStatus.bind(this);
    }
    componentWillMount() {
        getData().then(data => {
            this.props.appActions.updateData(data.data)
        });
    }
    handleEditModeStatus(event) {
        this.props.appActions.setEditStatus(event.target.checked);
    }
  render() {
    return (
        <Router>
        <div>
            <TabSwitcher edit_cb_handler={ this.handleEditModeStatus } />
            {/* Shows if edit mode enables */}
            <FlightEditPopup />
            <Route path={ TAB_IDS.TAB_ARRIVALS } component={ () =>
                <Dashboard direction="arrivals" />} />
            <Route path={ TAB_IDS.TAB_DEPARTURES } component={ () =>
                <Dashboard direction="departures" /> } />
        </div>
        </Router>
    );
  }
}

function mapStateToProps (state) {
    return {
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
        'TAB_ARRIVALS': '/arrivals'
    };

export { TAB_IDS };