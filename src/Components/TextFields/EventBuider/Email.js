import { TextField, FormControl } from "@mui/material";
import { useEventContext } from "../../../Context/EventsContext";

function Email() {
  const { eventBuilderState: state, setEventBuilderState: setState } =
    useEventContext();
  return (
    <FormControl fullWidth>
      <TextField
        required
        placeholder="Receiver's email"
        label="Email"
        type="email"
        value={state.email}
        onChange={(ev) => setState({ ...state, email: ev.target.value })}
      ></TextField>
    </FormControl>
  );
}

export default Email;
