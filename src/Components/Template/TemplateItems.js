import CelebrationIcon from "@mui/icons-material/Celebration";
import EditIcon from "@mui/icons-material/Edit";
import ExpandMore from "@mui/icons-material/SettingsOverscanSharp";
import DeleteIcon from "@mui/icons-material/Delete";
import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  IconButton,
} from "@mui/material";
function TemplateItems({ list, setList }) {
  return (
    <>
      {list.map((template) => {
        return <MyCard key={template._id} template={template} />;
      })}
    </>
  );
}
function MyCard({ template }) {
  return (
    <Card sx={{ minWidth: 345, boxShadow: "none" }} elevation={4}>
      <CardHeader
        avatar={<CelebrationIcon />}
        title={template.wishType.toLowerCase()}
        subheader={template.title}
      />
      <CardContent>{template.detail.substr(0, 150)}..</CardContent>
      <CardActions disableSpacing>
        <IconButton>
          <EditIcon />
        </IconButton>
        <IconButton>
          <DeleteIcon />
        </IconButton>
        <IconButton sx={{ marginLeft: "auto" }}>
          <ExpandMore />
        </IconButton>
      </CardActions>
    </Card>
  );
}

export default TemplateItems;
