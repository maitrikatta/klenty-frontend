import { Box } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import LoadingButton from "@mui/lab/LoadingButton";
import { useEventContext } from "../../Context/EventsContext";
import authAxios from "../../Libs/authAxios";
import moment from "moment";
function validateData(state) {
  const isOk = moment(state.eventTime).isValid();
  if ((state.templateId === null) | (state.templateId.trim() === ""))
    return "please select template";
  else if ((state.email === null) | (state.email.trim() === ""))
    return "invalid email";
  else if (!isOk) return "Invalid Date";
  else if (state.eventTime === null || state.eventTime === undefined)
    return "select event time";
  else return 1;
}
const defaultEventBuilder = {
  templateId: "",
  eventTime: null,
  email: "",
  isLoading: false,
};
function SubmitBtn() {
  const { eventBuilderState: state, setEventBuilderState: setState } =
    useEventContext();
  const handleSubmit = async (ev) => {
    const res = validateData(state);
    if (res !== 1) {
      alert(res);
      return;
    }

    setState({ ...state, isLoading: true });
    try {
      var { data } = await authAxios.post("/events/upcoming", state);
      if (data.data) alert("Event Created");
    } catch (err) {
      setState(defaultEventBuilder);
      alert(err.response.data.msg);
    }
    setState(defaultEventBuilder);
  };

  return (
    <Box sx={{ alignSelf: "end" }}>
      <LoadingButton
        onClick={(ev) => handleSubmit(ev)}
        type="submit"
        fullWidth
        color="success"
        variant="contained"
        loadingPosition="end"
        endIcon={<SendIcon />}
        loading={state.isLoading}
      >
        <span> create event</span>
      </LoadingButton>
    </Box>
  );
}

export default SubmitBtn;
