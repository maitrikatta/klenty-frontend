import { useEffect } from "react";
import authAxios from "../Libs/authAxios";
import { useEventContext } from "../Context/EventsContext";
function useFetchEvents() {
  const {
    calendarState: { slidedDate },
    updateList,
    setEventList,
  } = useEventContext();

  useEffect(() => {
    async function fetchEvents() {
      try {
        const {
          data: { data },
        } = await authAxios.get(`/events/upcoming/${slidedDate.toISOString()}`);
        setEventList((oldState) => data);
      } catch (error) {
        console.log(error.response.data.msg);
      }
    }
    fetchEvents();
  }, [slidedDate, updateList]);
}

export default useFetchEvents;
