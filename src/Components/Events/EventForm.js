import Template from "../TextFields/EventBuider/Template";
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import Email from "../TextFields/EventBuider/Email";
import EventTime from "../TextFields/EventBuider/EventTime";
import SubmitBtn from "./SubmitBtn";
const FormWrapper = styled(Box)(({ theme }) => ({
  display: "grid",
  [theme.breakpoints.up("xs")]: {
    gridTemplateColumns: "1fr",
  },
  [theme.breakpoints.up("sm")]: {
    gridTemplateColumns: "1fr 1fr",
  },

  gap: theme.spacing(2),
  padding: theme.spacing(1),
}));
function EventForm() {
  return (
    <FormWrapper onSubmit={(ev) => ev.preventDefault()} component="form">
      <Template />
      <Email />
      <EventTime />
      <SubmitBtn />
    </FormWrapper>
  );
}

export default EventForm;
