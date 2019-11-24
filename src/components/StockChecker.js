import React, { useState, useEffect} from "react";
import Styled from 'styled-components';

const StyledTable = Styled.table`
  width: 100%;
  td {
    text-align: center;
    padding-bottom: 25px;
    padding-top: 25px;
  }

  thead {
    tr {
      background-color: #00BFFF;
      th {
        padding-bottom: 25px;
      }
    }
  }

  tbody {
    tr:nth-child(even) {
      background-color: #f5f5f5;
    }
  }
`;

const StockChecker = function () {
  const [ticketSite, setTicketSite] = useState("/tmstockchecker");
  const [accessCode, setAccessCode] = useState("wrongCode");
  const [eventId, setEventId] = useState("");
  const [search, setSearch] = useState("");
  const [data, setData] = useState("");
  const api_url = "https://yrmfkazv8g.execute-api.ca-central-1.amazonaws.com/dev_ca_central_1";

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (search !== ""){
          const query_url = api_url + ticketSite + "?access_code=" + accessCode + "&event_id=" + eventId;
          const response = await fetch(query_url);
          const result = await response.json();
          setData(result);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [search]);

  const handleSearch = (e) => {
    e.preventDefault();
    setSearch(eventId);
  };

  function getEventURL() {
    if (isResults && eventId) {
      if (ticketSite === "/tmstockchecker") {
        return "https://www1.ticketmaster.com/event/" + eventId;
      }
      else if (ticketSite === "/tmstockchecker/intl") {
        return "https://www1.ticketmaster.co.uk/event/" + eventId;
      }
      else if (ticketSite === "/axsstockchecker") {
        return "https://tix.axs.com/" + eventId;
      }
      return "";
   }
  }

  const isResults = (data["sections"]) ? true : false;

  return (
    <React.Fragment>
      <form>
        <label>Website:</label>
        <select 
          name="ticketsite"
          value={ticketSite}
          onChange={event => setTicketSite(event.target.value)}
          >
          <option value="/tmstockchecker" defaultValue>Ticketmaster</option>
          <option value="/tmstockchecker/intl">Ticketmaster International</option>
          <option value="/axsstockchecker">AXS</option>
        </select>
        <label>Access Code:</label>
        <input 
          type="text" 
          value={accessCode}
          placeholder="Access code for testers"
          onChange={event => setAccessCode(event.target.value)}
          />
        <label>Event ID:</label>
        <input 
          type="text" 
          value={eventId}
          placeholder="The Event ID to search for"
          onChange={event => setEventId(event.target.value)}
          />
        <button onClick={handleSearch}>Search</button>
      </form>
        {isResults ?
          <React.Fragment>
            <h2>
              Stock count for Event ID <a href={getEventURL()} target="_blank" rel="noopener noreferrer">{eventId}</a>
            </h2>
            <StyledTable>
              <thead>
                <tr>
                  <th>Section</th>
                  <th>Count</th>
                  <th>Min price</th>
                  <th>Max price</th>
                </tr>
              </thead>
              <tbody>
              {data["sections"].map((section_info) => (
                <tr key={section_info.section}>
                  <td>
                    {section_info.section}
                  </td>
                  <td>
                    {section_info.count}
                  </td>
                  <td>
                    {section_info.min_price}
                  </td>
                  <td>
                    {section_info.max_price}
                  </td>
                </tr>
              ))}
              </tbody>
            </StyledTable>
          </React.Fragment>
          : {eventId} + " is out of stock!"
        }
    </React.Fragment>
  );
};

export default StockChecker;