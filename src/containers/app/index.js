import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './index.css';

import Dashboard from '../dashboard';
import TabSwitcher from '../../components/tab-switcher';

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
    handleEditModeStatus(e) {
        this.props.appActions.setEditStatus(e.target.checked);
    }
    handle
  render() {
      const { departures, arrivals, filters, editEnabled } = this.props;
    return (
        <Router>
        <div>
            <TabSwitcher edit_cb_handler={ this.handleEditModeStatus } />
            <Route path={ TAB_IDS.TAB_ARRIVALS } component={ () =>
                <Dashboard flights={ arrivals } filters={ filters } edit={ editEnabled } />} />
            <Route path={ TAB_IDS.TAB_DEPARTURES } component={ () =>
                <Dashboard flights={ departures } filters={ filters } edit={ editEnabled } /> } />
        </div>
        </Router>
    );
  }
}

function mapStateToProps (state) {
    return {
        departures: state.app.departures,
        arrivals: state.app.arrivals,
        filters: state.form.filters,
        editEnabled: state.app.editEnabled
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