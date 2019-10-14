import { Fetch_FAILURE, Set_Data, Fetch_GETTING } from './actionTypes';
const api_key = "7elxdku9GGG5k8j0Xm8KWdANDgecHMV0";
const full_url =
    "https://app.ticketmaster.com/discovery/v2/events?apikey=" +
    api_key +
    "&locale=*";

export function Fetching(query) {
    return async dispatch => {
        dispatch(fetchStart());
        try {
            const query_url = full_url + "&keyword=" + query;
            const result = await fetch(query_url)
                .then(function (response) {
                    return response.json();
                })
            dispatch(fetchingSuccess(result));
        } catch (err) {
            dispatch(fetchingFailure());
            console.error(err);
        }

    };
};

function fetchStart() {
    return {
        type: Fetch_GETTING
    };
}

function fetchingSuccess(result) {
    return {
        type: Set_Data,
        result: result
    };
}

function fetchingFailure(error) {
    return {
        type: Fetch_FAILURE,
        error
    };
}

