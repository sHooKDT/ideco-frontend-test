import React from 'react';
import { reduxForm } from 'redux-form';

class FlightEditForm extends React.Component {
    render() {
        const {fields : {flight_id, from_place, to_place, plane_model, planned_time, real_time, status}, handleSubmit} = this.props;
        return (
            <form className="edit-form" onSubmit={ handleSubmit }>
                <div>
                    <label>Номер рейса</label>
                    <input type="text" {...flight_id}/>
                </div>
                <div>
                    <label>Город отправления</label>
                    <input type="text" {...from_place}/>
                </div>
                <div>
                    <label>Город прибытия</label>
                    <input type="text" {...to_place}/>
                </div>
                <div>
                    <label>Самолёт</label>
                    <input type="text" {...plane_model}/>
                </div>
                <div>
                    <label>Планируемое время</label>
                    <input type="text" {...planned_time}/>
                </div>
                <div>
                    <label>Фактическое время</label>
                    <input type="text" {...real_time}/>
                </div>
                <div>
                    <label>Статус</label>
                    <input type="text" {...status}/>
                </div>
                <button type="submit">Submit</button>
            </form>
        )
    }
}

FlightEditForm = reduxForm({
    form: 'flight_edit',
    fields: ['flight_id', 'from_place', 'to_place', 'plane_model', 'planned_time', 'real_time', 'status']
})(FlightEditForm);

export default FlightEditForm;