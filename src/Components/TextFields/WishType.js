import {
  TextField,
  Autocomplete,
  FormControl,
  InputAdornment,
} from "@mui/material";
import { useTemplateContext } from "../../Context/templateContext";
import CelebrationIcon from "@mui/icons-material/Celebration";
// import { useEffect } from "react";
const defaultOptions = [
  "Birthday",
  "Marriage Anniversary",
  "Death Anniversary",
  "Meeting",
  "Success Greetings",
  "Event",
  "Other",
];
function WishType() {
  const { state, setState } = useTemplateContext();
  // useEffect(() => {
  //   console.log(state);
  // }, [state]);
  return (
    <FormControl fullWidth>
      <Autocomplete
        freeSolo
        required
        value={state.wishType}
        // onChange={(ev, value) => console.log(value)}
        onInputChange={(ev, value) =>
          setState({ ...state, wishType: value, wishTypeError: false })
        }
        options={defaultOptions}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Wish Type"
            required
            placeholder="This field must be unique"
            error={state.wishTypeError}
            helperText={state.wishTypeError && state.errorMsg}
            InputProps={{
              ...params.InputProps,
              startAdornment: (
                <>
                  <InputAdornment position="end" variant="filled">
                    <CelebrationIcon color="primary" />
                  </InputAdornment>
                  {params.InputProps.startAdornment}
                </>
              ),
            }}
          />
        )}
      />
    </FormControl>
  );
}

export default WishType;
