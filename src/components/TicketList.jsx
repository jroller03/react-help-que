import React from 'react';
import Ticket from './Ticket';
import PropTypes from 'prop-types';




function TicketList(props){
  var myStyledComponentStyles = {
    backgroundColor: '#ecf0f1',
    fontFamily: 'sans-serif',
    paddingTop: '50px',
    textAlign: 'center'
  };

  return (
    <div style={myStyledComponentStyles}>
      <hr/>
      {props.ticketList.map((ticket) =>
        <Ticket names={ticket.names}
          location={ticket.location}
          issue={ticket.issue}
          formattedWaitTime={ticket.formattedWaitTime}
          currentRouterPath={props.currentRouterPath}
          key={ticket.id}/>
      )}
    </div>
  );
}

TicketList.propTypes = {
  ticketList: PropTypes.array,
  currentRouterPath: PropTypes.string
};

export default TicketList;
