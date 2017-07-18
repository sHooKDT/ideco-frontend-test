import React from 'react';

import FilterOptions from '../../components/filter-options/';

class AdminBoard extends React.Component {
    render() {
        return (
            <FilterOptions onSubmit={console.log} />
        )
    }
}

export default AdminBoard;