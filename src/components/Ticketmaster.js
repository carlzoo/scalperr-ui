import React, { useState, useEffect, useRef, useCallback } from 'react';
import ClipLoader from 'react-spinners/ClipLoader';
import Styled from 'styled-components';

const api_key = '7elxdku9GGG5k8j0Xm8KWdANDgecHMV0';
const full_url =
  'https://app.ticketmaster.com/discovery/v2/events?apikey=' +
  api_key +
  '&locale=*';

const SearchGroup = Styled.div`

    display:grid;
    grid-row-gap: 1em;
    @media (min-width: 768px) {
      width:100%;
        grid-template-columns: 80% 20%;
       }

`;

const SearchBar = Styled.input`
  padding: .5rem 1rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: .3rem;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  transition: border-color .15s ease-in-out, box-shadow .15s ease-in-out;
  margin: 0;
  font-family: inherit;
  box-sizing: border-box;
  width:100%;
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

  :hover {
      background-color: #7386D5;
  }

  cursor: pointer;

  @media (max-width: 768px) {
    width: 100%;
  }
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
    padding: 0;
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

const Pagination = Styled.nav`
  text-align: center;
  padding-top: 15px;

  button {
    padding: .25rem .5rem;
    font-size: 1rem;
  }
`;

const TopBtn = Styled.button`
  display: none;
  position: fixed;
  bottom: 20px;
  right: 30px;
  z-index: 99;
  border: none;
  outline: none;
  background-color: blue;
  color: white;
  cursor: pointer;
  padding: 15px;
  border-radius: 10px;
  font-size: 18px;

  &:hover {
    opacity: 0.8;
  }
`;

const LoaderContainer = Styled.div`
text-align: center;
margin-top: 30px;
`;

const initialData = { _embedded: { events: [] }, page: {} };

const Ticketmaster = function() {
  const [query, setQuery] = useState('');
  const [data, setData] = useState(initialData);
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);
  const topBtnEl = useRef();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const query_url = full_url + '&keyword=' + search + '&page=' + page;
        const response = await fetch(query_url);
        const result = await response.json();
        setData(
          !page
            ? result
            : {
                ...result,
                _embedded: {
                  events: [...data._embedded.events, ...result._embedded.events]
                }
              }
        );
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.log(error);
      }
    };
    fetchData();
  }, [search, page]);

  const handleScrollEvent = useCallback(() => {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      topBtnEl.current.style.display = 'block';
    } else {
      topBtnEl.current.style.display = 'none';
    }
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScrollEvent);
    return () => {
      window.removeEventListener('scroll', handleScrollEvent);
    };
  }, [handleScrollEvent]);

  console.log(data); // debugging only

  function createDateLocation(dateString, locationString) {
    if (dateString && locationString) {
      return dateString + ' @ ' + locationString;
    }
    return 'Unknown date';
  }

  function createCityState(tmEventString) {
    var cityString = '';
    var stateString = '';

    try {
      cityString = tmEventString._embedded.venues[0].city.name;
    } catch (err) {
      cityString = '';
    }

    try {
      stateString = tmEventString._embedded.venues[0].state.name;
    } catch (err) {
      stateString = '';
    }

    if (cityString && stateString) {
      return cityString + ',' + stateString;
    } else if (cityString) {
      return cityString;
    }
    return 'Unknown location';
  }

  const handleSearch = () => {
    setSearch(query);
    setPage(0);
  };

  const gotoTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  const { totalPages = Infinity } = data.page;
  const nextPage = () => setPage(page + 1);

  return (
    <>
      <SearchGroup>
        <SearchBar
          type="text"
          value={query}
          placeholder="Search for an artist, event, or venue"
          onChange={event => setQuery(event.target.value)}
        />

        <SearchButton type="button" onClick={handleSearch}>
          Search
        </SearchButton>
      </SearchGroup>
      <LoaderContainer>
        <ClipLoader
          sizeUnit="px"
          size={150}
          color="#123abc"
          loading={loading}
        />
      </LoaderContainer>
      {loading ? null : (
        <div>
          <ResultTable>
            <tbody>
              {data._embedded.events.map(tmevent => (
                <tr key={tmevent.id}>
                  <td>{tmevent.name}</td>
                  <td>
                    {createDateLocation(
                      tmevent.dates.start.localDate,
                      tmevent._embedded.venues[0].name
                    )}
                  </td>
                  <td>{createCityState(tmevent)}</td>
                  <td>
                    <a
                      href={tmevent.url}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      Buy Tickets
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </ResultTable>
          <ResultListMobile>
            {data._embedded.events.map(tmevent => (
              <li key={tmevent.id}>
                <a href={tmevent.url} rel="noopener noreferrer" target="_blank">
                  {tmevent.name}
                </a>
              </li>
            ))}
          </ResultListMobile>
          {page < totalPages - 1 && (
            <Pagination role="navigation" aria-label="Pagination">
              <button onClick={nextPage} disabled={page === totalPages - 1}>
                Load More
              </button>
            </Pagination>
          )}
        </div>
      )}
      <TopBtn ref={topBtnEl} onClick={gotoTop}>
        Top
      </TopBtn>
    </>
  );
};

export default Ticketmaster;
