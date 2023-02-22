/*
    This file contains context data for 
    calendar, create event and show events
*/
import { createContext, useState, useContext } from "react";
import moment from "moment";
const EventContext = createContext();
export default function EventProvider({ children }) {
  const [slidedDate, setSlidedDate] = useState(moment());
  return (
    <EventContext.Provider value={{ slidedDate, setSlidedDate }}>
      {children}
    </EventContext.Provider>
  );
}

function useEventContext() {
  return useContext(EventContext);
}

export { useEventContext };
