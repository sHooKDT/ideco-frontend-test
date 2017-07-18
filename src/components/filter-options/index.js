import React from 'react';
import { reduxForm } from 'redux-form';

class FilterOptions extends React.Component {
    render() {
        const { city, handleSubmit } = this.props;
        return (
            <form onSubmit={ handleSubmit }>
                <input type="text" placeholder="город отправления" {...city} />
                <button type="submit">Отфильтровать</button>
            </form>
        );
    };
}

FilterOptions = reduxForm({
    form: 'filters',
    fields: ['city']
})(FilterOptions);

export default FilterOptions;