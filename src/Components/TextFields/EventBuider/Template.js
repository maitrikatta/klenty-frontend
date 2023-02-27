import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useEventContext } from "../../../Context/EventsContext";
import useFetchTemplates from "../../../customHooks/fetchTemplates";
function Template() {
  const { eventBuilderState: state, setEventBuilderState: setState } =
    useEventContext();

  // returns array may be empty
  var data = useFetchTemplates();
  return (
    <FormControl fullWidth>
      <InputLabel>Select Template</InputLabel>
      <Select
        sx={{ textAlign: "left" }}
        value={state.templateId}
        onChange={(ev) => {
          setState({ ...state, templateId: ev.target.value });
        }}
        label="Select Template"
        required
      >
        {data?.length > 0 ? (
          data.map((item) => {
            return (
              <MenuItem key={item._id} value={item._id}>
                {item.wishType.toLowerCase()}
              </MenuItem>
            );
          })
        ) : (
          <MenuItem disabled>No templates</MenuItem>
        )}
      </Select>
    </FormControl>
  );
}

export default Template;
