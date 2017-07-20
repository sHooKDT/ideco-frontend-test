import React from 'react';
import { reduxForm } from 'redux-form';
import './index.css';

class FilterOptions extends React.Component {
    render() {
        const { fields: {from_place, to_place}, handleSubmit, resetForm } = this.props;
        return (
            <form className="filters-form" onSubmit={ handleSubmit }>
                <label>Фильтр: </label>
                <input type="text" placeholder="город отправления" {...from_place} />
                <input type="text" placeholder="город назначения" {...to_place} />
                <button type="submit">Отфильтровать</button>
                <button type="button" onClick={ resetForm }>Сбросить</button>
            </form>
        );
    };
}

FilterOptions = reduxForm({
    form: 'flight_filters',
    fields: ['from_place', 'to_place']
})(FilterOptions);

export default FilterOptions;