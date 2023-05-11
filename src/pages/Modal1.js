import * as React from "react";
import {
  Box,
  Paper,
  Typography,
  Button,
  TextField,
  Grid,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import "./Modal1.css";
import { styled } from "@mui/system";
import { useNavigate } from "react-router-dom";
const style = {
  width: "80%",
  hieght: "800px",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 10,
  m: "auto",
  borderRadius: "10px",
  border: "1px solid lightgray",
};
function Modal1() {
  const navigate = useNavigate()
  const [open, setOpen] = React.useState(true);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const InputResponsive = styled("TextField")(({ theme }) => ({
    [theme.breakpoints.down("up")]: {
      backgroundColor: "red",
    },
    [theme.breakpoints.down("md")]: {
      width: "10px",
    },
  }));

  return (
    <div>
      {!open ? <Button onClick={handleOpen}>Open modal</Button> : null}
      {open ? (
        <Box sx={style}>
          <Paper sx={{ p: 6 }}>
            <Box sx={{ transform: "translate(-100px, -100px)" }}>
              <IconButton
                size="small"
                sx={{ background: "lightgray" }}
                onClick={handleClose}
              >
                <CloseIcon />
              </IconButton>
            </Box>
            <Grid container component={Box} textAlign="center">
              <Grid item xs={12} sm={12} md={12} lg={12}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                  1.Selecciona tu proveedor de fertilizantes
                </Typography>
                <Typography variant="caption">
                  Puedes seleccionar más de un proveedor
                </Typography>
                <br />
                <br />
                <InputResponsive>
                  <TextField
                    id="textField1"
                    variant="outlined"
                    sx={{
                      width: "56%",
                      "& .MuiInputBase-root": {
                        height: "44px",
                      },
                    }}
                    defaultValue="Bayer"
                    placeholder="Bayer"
                  />
                </InputResponsive>

                <br />
                <br />
              </Grid>
              <Grid item xs={12} sm={12} md={12} lg={12}>
                <Button
                  variant="contained"
                  sx={{
                    width: "56%",
                    height: "44px",
                    background: "rgba(0,72,217,0.45)",

                    "&:hover": {
                      background: "rgba(0,72,217,0.45)",
                      color: "white",
                    },
                  }}
                  size="large"
                  onClick={() => { navigate("/dashboard/Modal2") }}
                >
                  Continuar
                </Button>
                <br />
              </Grid>
            </Grid>
            <Box sx={{ transform: "translate(-80px, 110px)" }}>
              <Typography variant="caption">
                ¿Necesitas ayuda? por favor contáctanos al +56966163647
              </Typography>
            </Box>
          </Paper>
        </Box>
      ) : null}
    </div>
  );
}
export default Modal1;
