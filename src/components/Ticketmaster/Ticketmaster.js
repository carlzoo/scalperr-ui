import React, { useState, useEffect } from 'react';

import full_url from '../../services';

const Ticketmaster = function() {
    const dummy = JSON.parse('{ "_embedded" : ' + '{ "events": [] }}');

    const [query, setQuery] = useState('');
    const [data, setData] = useState(dummy);

    useEffect(() => {
        const fetchData = async () => {
            const query_url = full_url + '&keyword=' + query;
            const result = await fetch(query_url)
                .then(function(response) {
                    return response.json();
                })
                .catch(function(error) {
                    console.log(error);
                    return dummy;
                });

            setData(result);
            console.log(data); //debugging only
        };

        fetchData();
    }, [query]);

    return (
        <div>
            <input
                type="text"
                className="form-control"
                id="querytext"
                placeholder="Search for an artist, event, or venue"
            />
            <button
                type="button"
                onClick={() =>
                    setQuery(document.getElementById('querytext').value)
                }>
                Search
            </button>
            <table>
                {data['_embedded']['events'].map(tmevent => (
                    <tbody />
                ))}
            </table>
        </div>
    );
};

export default Ticketmaster;
