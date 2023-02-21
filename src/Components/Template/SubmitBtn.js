import authAxios from "../../Libs/authAxios";
import { Box } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { useTemplateContext } from "../../Context/templateContext";
import LoadingButton from "@mui/lab/LoadingButton";
function validateData(state) {
  const title = state.title.trim();
  const wishType = state.wishType.trim();
  const details = state.details.trim();
  if (title === "" || title === null) {
    return { titleError: true, errorMsg: "Found empty title" };
  }
  if (wishType === "" || wishType === null) {
    return { wishTypeError: true, errorMsg: "Found empty wish type" };
  }
  if (details === "" || details === null) {
    return { detailsError: true, errorMsg: "Found empty details" };
  }
  return 1;
}
function SubmitBtn() {
  const { state, setState } = useTemplateContext();
  const clearForm = () => {
    setState({
      title: "",
      details: "",
      wishType: "",
      titleError: false,
      wishTypeError: false,
      detailsError: false,
      errorMsg: "",
      isLoading: false,
    });
  };
  const sendData = async () => {
    // show spinner in button and disable untill res/err returns
    setState({ ...state, isLoading: true });
    try {
      const res = await authAxios.post("/wish/template", {
        title: state.title,
        wishType: state.wishType,
        detail: state.details,
      });
      if (res) {
        // cancle loadin
        console.log(res);
        setState({ ...state, isLoading: false });
        // set state to default
        clearForm();
      }
    } catch (error) {
      alert("Some error occured!");
      console.log(error.name);
    }
  };
  const handleSubmit = (ev) => {
    ev.preventDefault();
    const res = validateData(state);
    if (typeof res === "object") {
      // override error data
      setState({ ...state, ...res });
    } else {
      // OK, send data to back end
      sendData();
    }
  };
  return (
    <Box>
      <LoadingButton
        onClick={(ev) => handleSubmit(ev)}
        type="submit"
        fullWidth
        color="success"
        variant="contained"
        loadingPosition="end"
        endIcon={<SendIcon />}
        loading={state.isLoading ? true : false}
      >
        <span> create</span>
      </LoadingButton>
    </Box>
  );
}

export default SubmitBtn;
