import CelebrationIcon from "@mui/icons-material/Celebration";
import EditIcon from "@mui/icons-material/Edit";
import ExpandMore from "@mui/icons-material/SettingsOverscanSharp";
import DeleteIcon from "@mui/icons-material/Delete";
import authAxios from "../../Libs/authAxios";
import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  IconButton,
  Tooltip,
} from "@mui/material";
function TemplateItems({ list, setList }) {
  return (
    <>
      {list.map((template) => {
        return (
          <MyCard
            setList={setList}
            list={list}
            key={template._id}
            template={template}
          />
        );
      })}
    </>
  );
}
function MyCard({ template, setList, list }) {
  async function handleDelete() {
    const { data: doc } = await authAxios.delete(
      `/wish/template/${template._id}`
    );
    if (doc.deletedCount === 1) {
      // update template list, in real time
      setList(list.filter((item) => item._id !== doc._id));
    } else {
      alert("For some reason, cant delete");
    }
  }
  return (
    <Card
      sx={{ minWidth: 345, maxWidth: 350, boxShadow: "none" }}
      elevation={4}
    >
      <CardHeader
        avatar={<CelebrationIcon />}
        title={template.wishType.toLowerCase()}
        subheader={template.title}
      />
      <CardContent>{template.detail.substr(0, 150)}..</CardContent>
      <CardActions disableSpacing>
        <Tooltip title="feature not added">
          <IconButton>
            <EditIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="delete">
          <IconButton onClick={handleDelete}>
            <DeleteIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="feature not added">
          <IconButton sx={{ marginLeft: "auto" }}>
            <ExpandMore />
          </IconButton>
        </Tooltip>
      </CardActions>
    </Card>
  );
}

export default TemplateItems;
