import { Helmet } from "react-helmet-async";
// @mui
import { Typography, Paper, Box } from "@mui/material";
import { LoginForm } from "../sections/auth/login";

export default function LoginPage() {
  return (
    <div style={{ background: "#2f3d44", width: "100%", height: "130vh" }}>
      <Helmet>
        <title> Log In </title>
      </Helmet>

      <Box pt={4}>
        <Paper sx={{ width: "420px", m: "auto", p: 4, height: "582px" }}>
          <Box mb={2}>
            {/* see the public folder for assests of your svgs icons */}
            <img
              style={{ margin: "auto", width: "48px"}}
              src="/assets/icons/logoOnLogin.svg"
              alt="SVG as an image"
            />
          </Box>
          <Typography
            variant="h5"
            color="lightgray"
            sx={{ textAlign: "center" }}
          >
            Dashboard Miido
          </Typography>
          <br />
          <Typography
            variant="h4"
            gutterBottom
            textAlign={"center"}
            sx={{ fontSize: "24px" }}
          >
            Bienvenido a tu Dashboard
          </Typography>

          <Typography
            variant="body2"
            color="lightgray"
            gutterBottom
            textAlign={"center"}
          >
            Ingresa tu mail y tu contraseña:
          </Typography>

          <br />
          <LoginForm />

          <Typography
            variant="body2"
            sx={{
              my: 5,
              color: "#9FA2B4",
              textAlign: "center",
              fontSize: "14px",
            }}
          >
            No tienes una cuenta? {""}
            <Typography
              variant="subtitle2"
              color={"blue"}
              sx={{ display: "inline", fontSize: "14px" }}
            >
              Crear una
            </Typography>
          </Typography>
        </Paper>
      </Box>
    </div>
  );
}
