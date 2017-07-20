import React from 'react';
import PropTypes from 'prop-types';
import FilterOptions from '../../components/filter-options/index'

import './index.css';

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
    makeEditHandlers(index) {
        return {
            editHandler: () => console.log(index),
            removeHandler: () => console.log(index)
        }
    }
    render() {
        const { flights, filters, edit } = this.props;
        const { makeEditHandlers } = this;

        let filtered_flights;
        if (filters && filters.city) filtered_flights = flights.filter(flight => flight.from_place === filters.city);
        else filtered_flights = flights;

        let flights_template = filtered_flights.map(function (item, index) {
            return (
                <Flight key={index} data={item} editable={edit} handlers={makeEditHandlers(index)} />
            )
        });

        return (
            <div>
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
                            edit &&
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
                <br />
                <FilterOptions onSubmit={ this.props.handle } />
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
    })
};

Dashboard.propTypes = {
    flights: PropTypes.arrayOf(Flight.propTypes.data).isRequired,
    edit: PropTypes.bool,
    filters: PropTypes.object,
};

export default Dashboard;