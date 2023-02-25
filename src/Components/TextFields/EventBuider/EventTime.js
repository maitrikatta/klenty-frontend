import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { TextField } from "@mui/material";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { useEventContext } from "../../../Context/EventsContext";
function EventTime() {
  const { eventBuilderState: state, setEventBuilderState: setState } =
    useEventContext();
  return (
    <LocalizationProvider dateAdapter={AdapterMoment}>
      <DateTimePicker
        label="Event Time"
        value={state.eventTime}
        required
        onChange={(val) => {
          setState({ ...state, eventTime: val });
        }}
        disablePast
        renderInput={(params) => <TextField {...params} />}
      ></DateTimePicker>
    </LocalizationProvider>
  );
}

export default EventTime;
