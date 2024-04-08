function FlightList({ flights, title }) {
    return (
      <div className="flightListContainer">
        <h2 className="flightListTitle">{title}</h2>
        <ul className="flightList">
          {flights.map((flight) => (
            <li key={flight.id} className="flightListItem">
              <span>{flight.code}</span> - {flight.destination} - {flight.status}
            </li>
          ))}
        </ul>
      </div>
    );
  }
  
  export default FlightList;
  