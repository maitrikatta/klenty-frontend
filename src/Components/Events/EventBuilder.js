import { ExpandMore } from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import { useState } from "react";
import EventForm from "./EventForm";
function EventBuilder() {
  const [expand, setExpand] = useState(true);
  return (
    <Accordion
      expanded={expand}
      onChange={() => setExpand(!expand)}
      elevation={8}
    >
      <AccordionSummary expandIcon={<ExpandMore />}>
        <Typography color="primary">Create Event</Typography>
      </AccordionSummary>
      <AccordionDetails sx={{ textAlign: "center" }}>
        <EventForm />
      </AccordionDetails>
    </Accordion>
  );
}

export default EventBuilder;
