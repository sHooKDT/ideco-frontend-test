const initialState = {
    "departures": [],
    "arrivals": []
};

export default function (state = initialState, action) {
    switch (action.type) {
        case 'UPDATE_DATA':
            return {...state, departures: action.payload.departures, arrivals: action.payload.arrivals};
        case 'SET_CITY_FILTER':
            return {...state, city_filter: action.payload};
        default:
            return state;
    }
}