/*
    This file contains context data for 
    calendar, create event and show events
*/
import { createContext, useState, useContext } from "react";
import moment from "moment";
const defaultEventState = {
  slidedDate: moment(),
  selectedDate: moment(),
};
const EventContext = createContext();
export default function EventProvider({ children }) {
  const [calendarState, setCalendarState] = useState(defaultEventState);
  return (
    <EventContext.Provider value={{ calendarState, setCalendarState }}>
      {children}
    </EventContext.Provider>
  );
}

function useEventContext() {
  return useContext(EventContext);
}

export { useEventContext };
