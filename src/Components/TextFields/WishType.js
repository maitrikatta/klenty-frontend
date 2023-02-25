import {
  TextField,
  Autocomplete,
  FormControl,
  InputAdornment,
} from "@mui/material";
import { useTemplateContext } from "../../Context/templateContext";
import CelebrationIcon from "@mui/icons-material/Celebration";
import useFetchTemplates from "../../customHooks/fetchTemplates";
// import { useEffect } from "react";
const options = [
  "BIRTHDAY",
  "MARRIAGE ANNIVERSARY",
  "DEATH ANNIVERSARY",
  "MEETING",
  "SUCCESS GREETINGS",
  "EVENT",
  "OTHER",
];
function WishType() {
  const { state, setState } = useTemplateContext();
  const data = useFetchTemplates();
  if (data) {
    var selected = data.map((item) => item.wishType);
  }
  return (
    <FormControl fullWidth>
      <Autocomplete
        freeSolo
        required
        options={options}
        getOptionDisabled={(option) => selected.includes(option)}
        value={state.wishType}
        // onChange={(ev, value) => console.log(value)}
        onInputChange={(ev, value) =>
          setState({ ...state, wishType: value, wishTypeError: false })
        }
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
