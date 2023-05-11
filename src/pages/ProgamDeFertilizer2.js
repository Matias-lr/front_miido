import React from "react";
import {
  Box,
  Button,
  Grid,
  IconButton,
  Paper,
  Typography,
} from "@mui/material";
import FilterListIcon from "@mui/icons-material/FilterList";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import "./ProgramDeFertilzer.css";
import { useNavigate } from "react-router-dom";

const ProgamDeFertilizer2 = () => {
  const navigate = useNavigate();
  const HorizonaLine = (
    <hr
      style={{
        border: "none",
        borderTop: "1px dotted lightgray",
        color: "gray",
        backgroundColor: "lightgray",
        height: "2px",
        width: "100%",
        position: "absolute",
        transform: "translate(-40px,110px)",
        overflow:"hidden"
      }}
    />
  );
  return (
    <div>
      <Paper elevation={5} sx={{ width: "80%", p: 8, position: "relative" }}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <Typography sx={{ fontWeight: "bold", fontSize: "14px", mb: 1 }}>
              Detalles del análisis de suelo
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={6}
            lg={6}
            componen={Box}
            textAlign="right"
          >
            <IconButton aria-label="Example">
              <Typography variant="button">Sort</Typography> <FilterListIcon />
            </IconButton>
            &nbsp; &nbsp;
            <IconButton aria-label="Example">
              <Typography variant="button">Filter</Typography>{" "}
              <FilterAltOutlinedIcon />
            </IconButton>
          </Grid>

          <Grid item xs={12} sm={12} md={12} lg={12}>
            <Typography>
              Programa de fertilización según tu análisis de suelo
            </Typography>
          </Grid>
          {HorizonaLine}
        </Grid>
        <br />
        <br />
        <br />
        <table>
          <tr>
            <th style={{ fontWeight: "bold", fontSize: "19px" }}>
              Requisitos de nutrientes
            </th>
            <th
              style={{
                fontWeight: "bold",
                textAlign: "center",
                fontSize: "19px",
                color: "#9FA2B4",
              }}
            >
              N
            </th>
            <th
              style={{
                fontWeight: "bold",
                textAlign: "center",
                fontSize: "19px",
                color: "#9FA2B4",
              }}
            >
              P
            </th>
            <th
              style={{
                fontWeight: "bold",
                textAlign: "center",
                fontSize: "19px",
                color: "#9FA2B4",
              }}
            >
              K
            </th>
          </tr>
          <tr>
            <td style={{ fontWeight: "bold", fontSize: "19px" }}>Urea 46%</td>
            <td
              style={{
                textAlign: "center",
                fontSize: "19px",
                color: "#9FA2B4",
              }}
            >
              365 Kg
            </td>
            <td
              style={{
                textAlign: "center",
                fontSize: "19px",
                color: "#9FA2B4",
              }}
            >
              86,956 Kg
            </td>
            <td
              style={{
                textAlign: "center",
                fontSize: "19px",
                color: "#9FA2B4",
              }}
            >
              48,7 Kg
            </td>
          </tr>
          <tr>
            <td style={{ fontWeight: "bold", fontSize: "19px" }}>
              Soil UAN 32%
            </td>
            <td
              style={{
                textAlign: "center",
                fontSize: "19px",
                color: "#9FA2B4",
              }}
            >
              525 Kg
            </td>
            <td
              style={{
                textAlign: "center",
                fontSize: "19px",
                color: "#9FA2B4",
              }}
            >
              86,956 Kg
            </td>
            <td
              style={{
                textAlign: "center",
                fontSize: "19px",
                color: "#9FA2B4",
              }}
            >
              154,7 Kg
            </td>
          </tr>
          <tr>
            <td style={{ fontWeight: "bold", fontSize: "19px" }}>
              Amonio de nitrato 34%
            </td>
            <td
              style={{
                textAlign: "center",
                fontSize: "19px",
                color: "#9FA2B4",
              }}
            >
              493 Kg
            </td>
            <td
              style={{
                textAlign: "center",
                fontSize: "19px",
                color: "#9FA2B4",
              }}
            >
              86,956 Kg
            </td>
            <td
              style={{
                textAlign: "center",
                fontSize: "19px",
                color: "#9FA2B4",
              }}
            >
              112,5 Kg
            </td>
          </tr>
          <tr>
            <td style={{ fontWeight: "bold", fontSize: "19px" }}>TOTAL</td>
            <td
              style={{
                textAlign: "center",
                fontSize: "19px",
                color: "#9FA2B4",
              }}
            >
              1.383 Kg
            </td>
            <td
              style={{
                textAlign: "center",
                fontSize: "19px",
                color: "#9FA2B4",
              }}
            >
              86,956 Kg
            </td>
            <td
              style={{
                textAlign: "center",
                fontSize: "19px",
                color: "#9FA2B4",
              }}
            >
              316,66 Kg
            </td>
          </tr>
        </table>

        <Box textAlign={"right"} marginTop={5}>
          {/* <Button
            variant="contained"
            sx={{
              width: "25%",
              marginBottom: 2,
              background: "rgba(0,72,217,0.45)",
              p:2,
              "&:hover": { background: "rgba(0,72,217,0.45)", color: "white",p:2 },
            }}
          >
            Configuración Manual
          </Button>
          <br /> */}
          <Button
            variant="contained"
            sx={{
              width: "25%",
              background: "rgba(0,72,217,0.45)",
              p:2,
              "&:hover": { background: "rgba(0,72,217,0.45)", color: "white",p:2 },
            }}
            onClick={() => { navigate("/dashboard/ProgamDeFertilizer3") }}
          >
            Configuración Manual
          </Button>
          <Box sx={{ transform: "translate(-50px, 50px)", textAlign: "left" }}>
            <Typography variant="caption">
              ¿Necesitas ayuda? por favor contáctanos al +56966163647
            </Typography>
          </Box>
        </Box>
      </Paper>
    </div>
  );
};

export default ProgamDeFertilizer2;
