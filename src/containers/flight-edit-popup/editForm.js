import React from 'react';
import { reduxForm } from 'redux-form';

class FlightEditForm extends React.Component {
    render() {
        const {
            fields : {flight_id, from_place, to_place, plane_model, planned_time, real_time, status},
            handleSubmit,
            resetForm
        } = this.props;
        return (
            <form className="edit-form" onSubmit={ handleSubmit }>
                <input type="text" placeholder="Номер рейса" {...flight_id}/>
                <input type="text" placeholder="Город отправления" {...from_place}/>
                <input type="text" placeholder="Город прибытия" {...to_place}/>
                <input type="text" placeholder="Самолёт" {...plane_model}/>
                <input type="text" placeholder="Планируемое время" {...planned_time}/>
                <input type="text" placeholder="Фактическое время" {...real_time}/>
                <input type="text" placeholder="Статус" {...status}/>
                <div className="edit-form-buttons">
                    <button type="submit">Готово</button>
                    <button type="button" onClick={ resetForm }>Сброс</button>
                </div>
            </form>
        )
    }
}

FlightEditForm = reduxForm({
    form: 'flight_edit',
    fields: ['flight_id', 'from_place', 'to_place', 'plane_model', 'planned_time', 'real_time', 'status']
})(FlightEditForm);

export default FlightEditForm;