import React from 'react';
import { Link } from 'react-router-dom';
import { TAB_IDS as tabs} from "../../containers/app/index"

const Tab = (props) => {
    return (
        <li><Link to={ props.tabid }>{ props.tabname }</Link></li>
    )
};

class TabSwitcher extends React.Component {
    render() {
        return (
            <ul>
                <Tab tabid={tabs.TAB_ARRIVALS} tabname="Arrivals"/>
                <Tab tabid={tabs.TAB_DEPARTURES} tabname="Departures"/>
                <Tab tabid={tabs.TAB_ADMINISTRATION} tabname="Administration"/>
            </ul>
        )
    }
}

export default TabSwitcher;