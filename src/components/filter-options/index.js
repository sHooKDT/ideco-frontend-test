import React from 'react';
import { reduxForm } from 'redux-form';

class FilterOptions extends React.Component {
    render() {
        const { fields: {from_place, to_place}, handleSubmit } = this.props;
        return (
            <form onSubmit={ handleSubmit }>
                <input type="text" placeholder="город отправления" {...from_place} />
                <input type="text" placeholder="город назначения" {...to_place} />
                <button type="submit">Отфильтровать</button>
            </form>
        );
    };
}

FilterOptions = reduxForm({
    form: 'flight_filters',
    fields: ['from_place', 'to_place']
})(FilterOptions);

export default FilterOptions;