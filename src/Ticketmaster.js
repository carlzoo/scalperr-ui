import React, { useState, useEffect } from "react";
import Styled from 'styled-components';

const api_key = "7elxdku9GGG5k8j0Xm8KWdANDgecHMV0";
const full_url =
  "https://app.ticketmaster.com/discovery/v2/events?apikey=" +
  api_key +
  "&locale=*";

const ResultTable = Styled.table`
    tr {
        border-bottom-style: solid;
    }

    td {
        border-style: solid;
        padding: 5px;
    }
`;

const Ticketmaster = function() {
  const dummy = JSON.parse('{ "_embedded" : { "events": [] }}');

  const [query, setQuery] = useState("");
  const [data, setData] = useState(dummy);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const query_url = full_url + "&keyword=" + query;
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
  }, [search]);

  function createDateLocation(dateString, locationString)
  {
    if (dateString && locationString)
    {
        return dateString + " @ " + locationString;
    }
    return "Unknown date";
  }

  function createCityState(cityString, stateString)
  {
      if (cityString && stateString)
      {
          return cityString + "," + stateString
      }
      return "Unknown location";
  }

  return (
    <div>
      <input
        type="text"
        value={query}
        placeholder="Search for an artist, event, or venue"
        onChange={event => setQuery(event.target.value)}
      />
      <button type="button" onClick={() => setSearch(query)}>
        Search
      </button>
      <hr />
      <ResultTable>
        <tbody>
          {data["_embedded"]["events"].map(tmevent => (
            <tr key={tmevent.id}>
              <td>{tmevent.name}</td>
              <td>{createDateLocation(tmevent.dates.start.localDate, tmevent._embedded.venues[0].name)}</td>
              <td>{createCityState(tmevent._embedded.venues[0].city.name, tmevent._embedded.venues[0].state.stateCode)}</td>
              <td><a href={tmevent.url} rel="noopener noreferrer" target="_blank">Buy Tickets</a></td>
            </tr>
          ))}
        </tbody>
      </ResultTable>
    </div>
  );
};

export default Ticketmaster;
