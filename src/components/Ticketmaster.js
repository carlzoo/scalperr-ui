import React, { useState, useEffect } from "react";
import Styled from 'styled-components';

import { useSelector, useDispatch } from 'react-redux';
import { Fetching } from '../actions/searchAction'

// const api_key = "7elxdku9GGG5k8j0Xm8KWdANDgecHMV0";
// const full_url =
//     "https://app.ticketmaster.com/discovery/v2/events?apikey=" +
//     api_key +
//     "&locale=*";

const SearchGroup = Styled.div`

    display:grid;
    @media (min-width: 768px) {
        grid-template-columns: 75% 25%;
        grid-gap: 1.5rem;
    }
    
`;

const SearchBar = Styled.input`
  padding: .5rem 1rem;
  font-size: 1.25rem;
  line-height: 1.5;
  border-radius: .3rem;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  transition: border-color .15s ease-in-out, box-shadow .15s ease-in-out;
  overflow: visible;
  margin: 0;
  font-family: inherit;
  width: 100%;
`;

const SearchButton = Styled.button`
  min-height: 1px;
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
  width: 100%;

  :hover {
      background-color: #7386D5;
  }

  cursor: pointer;
`;

const ResultTable = Styled.table`
    tr {
        border-bottom-style: solid;
    }

    td {
        border-style: none;
        padding: 5px;
    }

    tr:nth-child(even) {
        background: #ccc;
    }

    @media (max-width: 768px) {
        display:none;
      }
`;

const ResultListMobile = Styled.ul`
    li {
        list-style-type: none;
        padding: 10px;
    }

    li:nth-child(even) {
        background: #ccc;
    }

    a:hover {
        background-color: #3CFF33;
    }

    @media (min-width: 768px) {
        display:none;
      }
`;

const Ticketmaster = function () {
    const dispatch = useDispatch()
    const searchResult = useSelector(state => state.searchResult)
    // const dummy = JSON.parse('{ "_embedded" : { "events": [] }}');
    const [query, setQuery] = useState("");
    // const [data, setData] = useState(searchResult ? searchResult :dummy);
    const [search, setSearch] = useState("");

    useEffect(() => {
        // const fetchData = async () => {
        //   const query_url = full_url + "&keyword=" + query;
        //   const result = await fetch(query_url)
        //     .then(function(response) {
        //       return response.json();
        //     })
        //     .catch(function(error) {
        //       console.log(error);
        //       return dummy;
        //     });

        //   setData(result);
        //   console.log(data); //debugging only
        // };
        // fetchData();
        dispatch(Fetching(query));
    }, [search]);

   
    function createDateLocation(dateString, locationString) {
        if (dateString && locationString) {
            return dateString + " @ " + locationString;
        }
        return "Unknown date";
    }

    function createCityState(tmEventString) {
        var cityString = "";
        var stateString = "";

        try {
            cityString = tmEventString._embedded.venues[0].city.name;
        } catch (err) {
            cityString = "";
        }

        try {
            stateString = tmEventString._embedded.venues[0].state.name;
        } catch (err) {
            stateString = "";
        }

        if (cityString && stateString) {
            return cityString + "," + stateString
        }
        else if (cityString) {
            return cityString
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
                    {searchResult["_embedded"]["events"].map(tmevent => (
                        <tr key={tmevent.id}>
                            <td>{tmevent.name}</td>
                            <td>{createDateLocation(tmevent.dates.start.localDate, tmevent._embedded.venues[0].name)}</td>
                            <td>{createCityState(tmevent)}</td>
                            <td><a href={tmevent.url} rel="noopener noreferrer" target="_blank">Buy Tickets</a></td>
                        </tr>
                    ))}
                </tbody>
            </ResultTable>
            <ResultListMobile>
                {searchResult["_embedded"]["events"].map(tmevent => (
                    <li key={tmevent.id}>
                        <a href={tmevent.url} rel="noopener noreferrer" target="_blank">{tmevent.name}</a>
                    </li>
                ))}
            </ResultListMobile>
        </React.Fragment>
    );
};


export default Ticketmaster;
