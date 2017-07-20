import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import FilterOptions from '../../components/filter-options/';
import * as appActions from '../../actions/AppActions';
import './index.css';

import { rmFlight, getData, addFlight } from '../../backend_mock';

import edit_icon from './icons/edit.svg';
import remove_icon from './icons/remove.svg';

class Flight extends React.Component {
    render() {
        return (
            <tr>
                <td>{this.props.data.flight_id}</td>
                <td>{this.props.data.from_place}</td>
                <td>{this.props.data.to_place}</td>
                <td>{this.props.data.plane_model}</td>
                <td>{this.props.data.planned_time}</td>
                <td>{this.props.data.real_time}</td>
                <td>{this.props.data.status}</td>
                {
                    this.props.editable &&
                        <td>
                            <img className="icon" onClick={ this.props.handlers.editHandler } src={ edit_icon } alt=""/>
                            <img className="icon" onClick={ this.props.handlers.removeHandler } src={ remove_icon } alt=""/>
                        </td>
                }
            </tr>
        )
    }
}

class Dashboard extends React.Component {
    constructor() {
        super();
        this.makeEditHandlers = this.makeEditHandlers.bind(this);
        this.addFlight = this.addFlight.bind(this);
    }
    makeEditHandlers(index) {
        return {
            editHandler: () => {
                this.props.appActions.startEdit(this.props.direction, index);
            },
            removeHandler: () => {
                rmFlight(this.props.direction, index);
                getData().then(data => {
                    this.props.appActions.updateData(data.data)
                });
            }
        }
    }
    addFlight() {
        let ind = addFlight(this.props.direction);
        this.props.appActions.startEdit(this.props.direction, ind);
    }
    applyFilters(flights, filters) {
        if (filters) {
            return flights.filter(flight => {
                return flight.from_place.startsWith((filters.from_place || "")) &&
                    flight.to_place.startsWith((filters.to_place || ""))
            })
        }
        return flights;
    }
    render() {
        const { arrivals, departures, filters, editEnabled} = this.props;
        const { makeEditHandlers } = this;

        let flights = this.props.direction === 'arrivals' ? arrivals : departures;

        let filtered_flights = this.applyFilters(flights, filters);

        let flights_template = filtered_flights.map(function (item, index) {
            return (
                <Flight key={index} data={item} editable={editEnabled} handlers={makeEditHandlers(index)} />
            )
        });

        return (
            <div>
                {
                    editEnabled &&
                    <input className="add-flight-btn" type="button" onClick={ this.addFlight } />
                }
                <table className="dashboard-table">
                    <thead className="dashboard-head">
                    <tr>
                        <th>Номер рейса</th>
                        <th>Город отправления</th>
                        <th>Город назначения</th>
                        <th>Самолёт</th>
                        <th>План. время</th>
                        <th>Факт. время</th>
                        <th>Статус</th>
                        {
                            editEnabled &&
                                <th>Действия</th>
                        }
                    </tr>
                    </thead>
                    <tbody>
                        { flights_template }
                    </tbody>
                </table>
                <p>Всего рейсов: { flights.length }</p>
                <p>Подходящих рейсов: { filtered_flights.length }</p>
                <FilterOptions onSubmit={ this.props.appActions.setFilters } initialValues={ filters } />
            </div>
        );
    };
}


Flight.propTypes = {
    data: PropTypes.shape({
        "flight_id": PropTypes.string.isRequired,
        "from_place": PropTypes.string.isRequired,
        "to_place": PropTypes.string.isRequired,
        "plane_model": PropTypes.string.isRequired,
        "planned_time": PropTypes.string.isRequired,
        "real_time": PropTypes.string.isRequired,
        "status": PropTypes.string.isRequired
    }),
    editable: PropTypes.bool.isRequired,
    handlers: PropTypes.shape({
        editHandler: PropTypes.func.isRequired,
        removeHandler: PropTypes.func.isRequired
    })
};

Dashboard.propTypes = {
    direction: PropTypes.string.isRequired
};

function mapStateToProps (state) {
    return {
        departures: state.app.departures,
        arrivals: state.app.arrivals,
        filters: state.app.filters,
        editEnabled: state.app.editEnabled,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        appActions: bindActionCreators(appActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);