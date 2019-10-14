import React, { useEffect } from "react";
import Ticketmaster from '../components/Ticketmaster'
import { connect } from 'react-redux';
import { Fetching } from '../actions/searchAction'

const TicketmasterContainer = (props) => {

  useEffect(() => {
    props.Fetching('');
  },[])

  return (
    <div>
      {props.isGetting ? <div>Waiting</div> : <Ticketmaster data={props.searchResult} />}
    </div>
  )

}

const mapStateToProps = (store) => {
  return {
    searchResult: store.searchResult,
    isGetting: store.isGetting,
  };
};
const mapDispatchToProps = (dispatch) => ({
  Fetching: (query) => dispatch(Fetching(query)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TicketmasterContainer);