import React, { useState, useEffect} from "react";

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
          <option value="/" disabled>AXS [WIP]</option>
          <option value="/" disabled>Ticketweb [Not supported]</option>
          <option value="/" disabled>Eventbrite [Not supported]</option>
          <option value="/" disabled>Tickets.com [Not supported]</option>
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
      <table>
        {isResults ? 
          <th>Stock count for Event ID {eventId}</th>
          : {eventId} + " is out of stock!"
        }

        {isResults ?
          data["sections"].map(section_info => (
            <tr key={section_info.section}>
              <td>
                {section_info.section}
              </td>
              <td>
                {section_info.count}
              </td>
            </tr>
          )) :
          ''
        }
      </table>
    </React.Fragment>
  );
};

export default StockChecker;