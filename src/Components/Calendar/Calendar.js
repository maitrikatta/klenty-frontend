import React from "react";
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

import { styled } from "@mui/material/styles";

const MyCalendarPicker = styled(CalendarPicker)(({ theme }) => ({
  "&.MuiCalendarPicker-root": {
    background: theme.palette.background.paper,
  },
  "& .MuiPickersArrowSwitcher-button": {
    color: theme.palette.secondary.main,
  },
}));
function Calendar() {
  const { calendarState, setCalendarState } = useEventContext();
  const [expand, setExpand] = React.useState(true);
  function handleDateChange(date) {
    setCalendarState({ ...calendarState, slidedDate: date });
  }

  return (
    <Accordion
      expanded={expand}
      elevation={8}
      sx={{ height: "100%" }}
      onChange={() => setExpand(!expand)}
    >
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography color="primary">Events of Month</Typography>
      </AccordionSummary>
      <LocalizationProvider dateAdapter={AdapterMoment}>
        <MyCalendarPicker
          sx={{
            mb: 2,
            boxShadow: 2,
            borderRadius: 2,
            minWidth: 345,
          }}
          disablePast
          value={calendarState.selectedDate}
          onChange={(newValue) => {
            setCalendarState({ ...calendarState, selectedDate: newValue });
          }}
          onMonthChange={(dateObj) => {
            handleDateChange(dateObj);
          }}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>
    </Accordion>
  );
}

export default Calendar;
