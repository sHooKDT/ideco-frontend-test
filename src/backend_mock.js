import Axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

const mock = new MockAdapter(Axios);

let dataStore = {
    "departures": [
        {
            "flight_id": "d7d93",
            "from_place": "Wacissa",
            "to_place": "Freetown",
            "plane_model": "Boeing 100",
            "planned_time": "05:02",
            "real_time": "06:46",
            "status": "задержан до"
        },
        {
            "flight_id": "d3d01",
            "from_place": "Warsaw",
            "to_place": "Machias",
            "plane_model": "Boeing 100",
            "planned_time": "08:49",
            "real_time": "03:16",
            "status": "задержан до"
        },
        {
            "flight_id": "04b42",
            "from_place": "Savage",
            "to_place": "Lowgap",
            "plane_model": "Airbus 105",
            "planned_time": "09:23",
            "real_time": "12:00",
            "status": "идет посадка"
        },
        {
            "flight_id": "c7911",
            "from_place": "Russellville",
            "to_place": "Cresaptown",
            "plane_model": "Airbus 106",
            "planned_time": "06:45",
            "real_time": "04:36",
            "status": "задержан до"
        },
        {
            "flight_id": "55050",
            "from_place": "Faxon",
            "to_place": "Vienna",
            "plane_model": "Airbus 107",
            "planned_time": "01:42",
            "real_time": "10:20",
            "status": "приземлился"
        },
        {
            "flight_id": "2b91c",
            "from_place": "Wilmington",
            "to_place": "Chase",
            "plane_model": "Airbus 104",
            "planned_time": "12:24",
            "real_time": "10:51",
            "status": "идет посадка"
        },
        {
            "flight_id": "86959",
            "from_place": "Greenbush",
            "to_place": "Kaka",
            "plane_model": "Boeing 101",
            "planned_time": "08:54",
            "real_time": "02:56",
            "status": "задержан до"
        },
        {
            "flight_id": "7ff71",
            "from_place": "Cressey",
            "to_place": "Crucible",
            "plane_model": "Boeing 100",
            "planned_time": "01:32",
            "real_time": "05:37",
            "status": "вылетел"
        },
        {
            "flight_id": "72282",
            "from_place": "Datil",
            "to_place": "Worton",
            "plane_model": "Airbus 100",
            "planned_time": "10:05",
            "real_time": "10:29",
            "status": "задержан до"
        },
        {
            "flight_id": "bcc4f",
            "from_place": "Brookfield",
            "to_place": "Cataract",
            "plane_model": "Airbus 104",
            "planned_time": "11:36",
            "real_time": "04:30",
            "status": "приземлился"
        },
        {
            "flight_id": "51fe5",
            "from_place": "Castleton",
            "to_place": "Windsor",
            "plane_model": "Airbus 105",
            "planned_time": "11:05",
            "real_time": "11:02",
            "status": "идет посадка"
        },
        {
            "flight_id": "b05f3",
            "from_place": "Siglerville",
            "to_place": "Maury",
            "plane_model": "Airbus 107",
            "planned_time": "08:22",
            "real_time": "10:53",
            "status": "приземлился"
        },
        {
            "flight_id": "ca520",
            "from_place": "Wiscon",
            "to_place": "Crisman",
            "plane_model": "Airbus 106",
            "planned_time": "02:32",
            "real_time": "04:27",
            "status": "приземлился"
        }
    ],
    "arrivals": [
        {
            "flight_id": "463d7",
            "from_place": "Nicut",
            "to_place": "Orick",
            "plane_model": "Airbus 104",
            "planned_time": "08:22",
            "real_time": "02:57",
            "status": "задержан до"
        },
        {
            "flight_id": "f0bc9",
            "from_place": "Winfred",
            "to_place": "Ilchester",
            "plane_model": "Airbus 104",
            "planned_time": "12:57",
            "real_time": "07:28",
            "status": "приземлился"
        },
        {
            "flight_id": "de8fb",
            "from_place": "Cumminsville",
            "to_place": "Walton",
            "plane_model": "Boeing 106",
            "planned_time": "03:42",
            "real_time": "02:20",
            "status": "задержан до"
        },
        {
            "flight_id": "71ba4",
            "from_place": "Nadine",
            "to_place": "Longoria",
            "plane_model": "Airbus 108",
            "planned_time": "12:21",
            "real_time": "09:00",
            "status": "приземлился"
        },
        {
            "flight_id": "7a640",
            "from_place": "Roland",
            "to_place": "Emerald",
            "plane_model": "Boeing 110",
            "planned_time": "03:38",
            "real_time": "09:57",
            "status": "вылетел"
        }
    ]
};

mock.onGet('/all').reply(200, dataStore);

let afterDel = {
    ...dataStore
};
afterDel.departues.slice(0,5);
afterDel.arrivals.slice(0,7);

mock.onDelete(/\/all\/\S+/).reply(200, afterDel);

export function getData() {
    return Axios.get('/all');
}

export function delData(id) {
    return Axios.delete('/all' + id);
}
