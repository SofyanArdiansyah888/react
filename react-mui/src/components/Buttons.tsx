import { Button } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import {PhotoCamera,AccessTimeTwoTone} from '@mui/icons-material';
const Buttons = () => {
  return (
    <div style={{display: 'flex', flexDirection:'column', maxWidth: "200px"}}>
      <Button
        variant="contained"
        color="secondary" 
        disableElevation
        size="medium"
        onClick={() => alert("this is default button")}
      >
        Button Default
      </Button>
      <IconButton color="primary" size="small" aria-label="Upload Button" component="label">
        <input type="file" hidden />
        <PhotoCamera /> 
      </IconButton>
      <Button variant="outlined" color="success" endIcon={<AccessTimeTwoTone  />}>
            Hello world
      </Button>
    </div>
  );
};

export { Buttons };
