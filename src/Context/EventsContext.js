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
const defaultEventBuilder = {
  templateId: "",
  eventTime: null,
  email: "",
  isLoading: false,
};
const EventContext = createContext();
export default function EventProvider({ children }) {
  const [calendarState, setCalendarState] = useState(defaultEventState);
  const [updateList, setUpdateList] = useState(0);
  const [eventList, setEventList] = useState([]);
  const [eventBuilderState, setEventBuilderState] =
    useState(defaultEventBuilder);
  return (
    <EventContext.Provider
      value={{
        calendarState,
        setEventList,
        updateList,
        setUpdateList,
        setCalendarState,
        eventList,
        eventBuilderState,
        setEventBuilderState,
      }}
    >
      {children}
    </EventContext.Provider>
  );
}

function useEventContext() {
  return useContext(EventContext);
}

export { useEventContext };
