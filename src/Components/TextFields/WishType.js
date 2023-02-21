import {
  TextField,
  Autocomplete,
  FormControl,
  InputAdornment,
} from "@mui/material";
import { useTemplateContext } from "../../Context/templateContext";
import CakeIcon from "@mui/icons-material/Cake";
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
            helperText={
              state.wishTypeError
                ? state.errorMsg
                : "Choose or write your new unique one."
            }
            InputProps={{
              ...params.InputProps,
              startAdornment: (
                <>
                  <InputAdornment position="end" variant="filled">
                    <CakeIcon color="secondary" />
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
