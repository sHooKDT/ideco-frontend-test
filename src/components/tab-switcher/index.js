import React from 'react';
import { NavLink } from 'react-router-dom';
import { TAB_IDS as tabs} from '../../containers/app/index'

import './index.css';

const Tab = (props) => {
    return (
        <li className="tab-li"><NavLink activeClassName="active" className="tab-link" to={ props.tabid }>{ props.tabname }</NavLink></li>
    )
};

class TabSwitcher extends React.Component {
    render() {
        return (
            <ul className="tabs-ul">
                <Tab tabid={tabs.TAB_ARRIVALS} tabname='Прилёт'/>
                <Tab tabid={tabs.TAB_DEPARTURES} tabname='Вылет'/>
                <li className="tab-li">
                    <label className="enable-edit">Включить редактирование <input type="checkbox" onChange={ this.props.edit_cb_handler } /></label>
                </li>
            </ul>
        )
    }
}

export default TabSwitcher;