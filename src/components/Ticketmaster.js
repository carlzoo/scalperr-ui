import React, { useState, useEffect } from "react";
import Styled from 'styled-components';

const api_key = "7elxdku9GGG5k8j0Xm8KWdANDgecHMV0";
const full_url =
  "https://app.ticketmaster.com/discovery/v2/events?apikey=" +
  api_key +
  "&locale=*";

const SearchGroup = Styled.div`
  display: flex;
`;

const SearchBar = Styled.input`
  padding: .5rem 1rem;
  font-size: 1.25rem;
  line-height: 1.5;
  border-radius: .3rem;
  display:block;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  transition: border-color .15s ease-in-out, box-shadow .15s ease-in-out;
  overflow: visible;
  margin: 0;
  font-family: inherit;
`;

const SearchButton = Styled.button`
  @media (min-width: 992px)
  {
    margin-right: auto!immportant;
    flex: 0 0 16.66%;
  }
  position: relative;
  min-height: 1px;
  padding-right: 15px;
  padding-left: 15px;
  padding: .5rem 1rem;
  font-size: 1.25rem;
  line-height: 1.5;
  border-radius: .3rem;
  color: #fff;
  background-color: #007bff;
  border-color: #007bff;
  display:inline-block;
  font-weight: 400;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  user-select: none;
  border: 1px solid transparent;
`;

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

  function createCityState(tmEventString)
  {
      var cityString = "";
      var stateString = "";

      try {
          cityString = tmEventString._embedded.venues[0].city.name;
      } catch (err)
      {
          cityString = "";
      }

      try {
        stateString = tmEventString._embedded.venues[0].city.name;
      } catch (err)
      {
        stateString = "";
      }
    
      if (cityString && stateString)
      {
          return cityString + "," + stateString
      }
      return "Unknown location";
  }

  return (
    <React.Fragment>
    <SearchGroup>
        <SearchBar
        type="text"
        value={query}
        placeholder="Search for an artist, event, or venue"
        onChange={event => setQuery(event.target.value)} />

        <SearchButton 
        type="button" 
        onClick={() => setSearch(query)}>
            Search
        </SearchButton>
    </SearchGroup>
    <ResultTable>
        <tbody>
            {data["_embedded"]["events"].map(tmevent => (
            <tr key={tmevent.id}>
                <td>{tmevent.name}</td>
                <td>{createDateLocation(tmevent.dates.start.localDate, tmevent._embedded.venues[0].name)}</td>
                <td>{createCityState(tmevent)}</td>
                <td><a href={tmevent.url} rel="noopener noreferrer" target="_blank">Buy Tickets</a></td>
            </tr>
            ))}
        </tbody>
    </ResultTable>
    </React.Fragment>
  );
};

export default Ticketmaster;
