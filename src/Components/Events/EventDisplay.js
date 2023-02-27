import useFetchEvents from "../../customHooks/fetchEvents";
import RenderEventList from "./RenderEventList";
import { ExpandMore, InfoOutlined } from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
  Box,
  List,
  ListSubheader,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { useEventContext } from "../../Context/EventsContext";
import { useState } from "react";

const OverflowBox = styled(Box)({
  "&.MuiBox-root ": {
    "&::-webkit-scrollbar": {
      height: "7px",
    },
    "&::-webkit-scrollbar-thumb": {
      background: "linear-gradient(30deg, orange, silver)",
      borderRadius: "3px 3px",
    },
    "&::-webkit-scrollbar-track": {
      boxShadow: "inset 0 0 6px rgba(0, 0, 0, 0.5)",
    },
  },
});

function EventDisplay() {
  const {
    eventList,
    calendarState: { slidedDate },
  } = useEventContext();
  const [expand, setExpand] = useState(true);

  useFetchEvents();

  return (
    <Accordion
      expanded={expand}
      onChange={() => setExpand(!expand)}
      square={true}
      elevation={8}
    >
      <AccordionSummary expandIcon={<ExpandMore />}>
        <Typography color="primary">Upcoming Events</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <HelpText />
        <OverflowBox>
          <List
            sx={{
              minWidth: 345,
              maxHeight: 500,
              overflow: "auto",
              scrollbarWidth: "thin",
              mt: 3,
              borderRadius: 2,
              bgcolor: "background.paper",
            }}
            subheader={
              <ListSubheader>{slidedDate.format("MMMM")}</ListSubheader>
            }
          >
            {eventList?.length > 0 ? (
              <RenderEventList eventList={eventList} />
            ) : (
              <EmptyList />
            )}
          </List>
        </OverflowBox>
      </AccordionDetails>
    </Accordion>
  );
}
function EmptyList() {
  return (
    <Typography
      sx={{
        color: (theme) => theme.palette.text.secondary,
      }}
      variant="subtitle1"
      textAlign="center"
    >
      No events found
    </Typography>
  );
}
function HelpText() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: 1,
      }}
    >
      <InfoOutlined />
      <Typography variant="body2">
        Slide through calendar month to see events.
      </Typography>
    </Box>
  );
}
export default EventDisplay;
