import { FormControl, FormHelperText, TextField } from "@mui/material";
import { useTemplateContext } from "../../Context/templateContext";
export default function Details() {
  const { state, setState } = useTemplateContext();
  return (
    <FormControl fullWidth>
      <TextField
        fullWidth
        error={state.detailsError}
        required
        value={state.details}
        onChange={(ev) =>
          setState({ ...state, details: ev.target.value, detailsError: false })
        }
        size="small"
        label="Detail"
        variant="outlined"
        rows={8}
        multiline
        placeholder="Appears as body in email"
      ></TextField>
      <FormHelperText>{state.detailsError && state.errorMsg}</FormHelperText>
    </FormControl>
  );
}
