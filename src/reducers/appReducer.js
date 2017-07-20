const initialState = {
    "editEnabled": false,
    "departures": [],
    "arrivals": [],
    "filters": {},
    "editNow": false,
    "editFlight": {},
    "editData": {}
};

export default function (state = initialState, action) {
    switch (action.type) {
        case 'UPDATE_DATA':
            return {...state, departures: action.payload.departures, arrivals: action.payload.arrivals};
        case 'SET_FILTERS':
            return {...state, filters: action.payload};
        case 'ENABLE_EDIT':
            return {...state, editEnabled: action.payload, editNow: action.payload && state.editNow};
        case 'START_EDIT':
            return {
                ...state,
                editNow: true,
                editFlight: {direction: action.payload.direction,
                            index: action.payload.index},
                editData: state[action.payload.direction][action.payload.index]
            };
        case 'END_EDIT':
            return {...state, editNow: false, editData: {}};
        default:
            return state;
    }
}