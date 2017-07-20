import React from 'react';
import FlightEditForm from './editForm';
import './index.css';

import { editFlight, getData } from '../../backend_mock';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as appActions from '../../actions/AppActions';

class FlightEditPopup extends React.Component {
    constructor() {
        super();
        this.handleEditEnd = this.handleEditEnd.bind(this);
    }

    handleEditEnd(formdata) {
        editFlight(this.props.editFlight.direction, this.props.editFlight.index, formdata);
        this.props.appActions.endEdit();
        getData().then(data => {
            this.props.appActions.updateData(data.data)
        });
    }
    render() {
        const { editData, editNow } = this.props;
        return (
            <div className="edit-wrapper">
                { editNow &&
                    <FlightEditForm onSubmit={this.handleEditEnd} initialValues={editData}/>
                }
            </div>
        )
    }
}

function mapStateToProps (state) {
    return {
        editData: state.app.editData,
        editFlight: state.app.editFlight,
        editNow: state.app.editNow
    }
}

function mapDispatchToProps(dispatch) {
    return {
        appActions: bindActionCreators(appActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FlightEditPopup);