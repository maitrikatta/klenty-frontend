import React from "react";
import moment from "moment";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { CalendarPicker } from "@mui/x-date-pickers/CalendarPicker";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Accordion,
  AccordionSummary,
  TextField,
  Typography,
} from "@mui/material";
import { useEventContext } from "../../Context/EventsContext";
function Calendar() {
  const { slidedDate, setSlidedDate } = useEventContext();
  const [expand, setExpand] = React.useState(true);
  function handleDateChange(date) {}
  return (
    <Accordion
      expanded={expand}
      elevation={8}
      onChange={() => setExpand(!expand)}
    >
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography color="primary">Events of Month</Typography>
      </AccordionSummary>
      <LocalizationProvider dateAdapter={AdapterMoment}>
        <CalendarPicker
          orientation="landscape"
          disablePast
          openTo="day"
          value={slidedDate}
          onChange={(newValue) => {
            setSlidedDate(newValue);
          }}
          onMonthChange={(value) => {
            handleDateChange(value._d);
          }}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>
    </Accordion>
  );
}

export default Calendar;
