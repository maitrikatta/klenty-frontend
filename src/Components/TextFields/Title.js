// import authAxios from "../../Libs/authAxios";
// import { useEffect } from "react";
import {
  FormControl,
  FormHelperText,
  InputAdornment,
  TextField,
} from "@mui/material";
import { useTemplateContext } from "../../Context/templateContext";
import TitleIcon from "@mui/icons-material/Title";
function Title() {
  const { state, setState } = useTemplateContext();
  // useEffect(() => {
  //   console.log(state);
  // }, [state]);
  return (
    <FormControl fullWidth>
      <TextField
        InputProps={{
          startAdornment: (
            <>
              <InputAdornment position="start">
                <TitleIcon color="primary" />
              </InputAdornment>
            </>
          ),
        }}
        required
        error={state.titleError}
        autoComplete="off"
        value={state.title}
        label="Title"
        variant="outlined"
        placeholder="10 to 15 words"
        onChange={(ev) =>
          setState({ ...state, title: ev.target.value, titleError: false })
        }
      />

      <FormHelperText>{state.titleError && state.errorMsg}</FormHelperText>
    </FormControl>
  );
}

export default Title;
