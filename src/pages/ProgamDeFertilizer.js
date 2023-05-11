import React from "react";
import { Box, Button, Grid, Paper, Typography } from "@mui/material";
import "./ProgramDeFertilzer.css";
import { useNavigate } from "react-router-dom";

const ProgamDeFertilizer = () => {
  const navigate = useNavigate()
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
        transform: "translate(-48px,70px)",
        overflow:"hidden"
      }}
    />
  );
  return (
    <div>
      <Paper elevation={5} sx={{ width: "90%", p: 9, m: "auto", position: "relative"}}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <Typography sx={{ fontWeight: "bold", fontSize: "larger", mt: -4 }}>
              Detalles del análisis de suelo
            </Typography>
          </Grid>

          <Grid item xs={12} sm={12} md={12} lg={12} component={Box} mb={4}>
            <Typography>
              Programa de fertilización según tu análisis de suelo
            </Typography>
          </Grid>
          {HorizonaLine}
          <Box my={3} />
        </Grid>
        <table style={{ marginTop: "60px" }}>
          <tr>
            <th style={{ fontWeight: "bold", fontSize: "19px" }}>
              Requisitos de nutrientes
            </th>
            <th
              style={{
                fontWeight: "bold",
                textAlign: "center",
                fontSize: "19px",
              }}
            >
              N
            </th>
            <th
              style={{
                fontWeight: "bold",
                textAlign: "center",
                fontSize: "19px",
              }}
            >
              P
            </th>
            <th
              style={{
                fontWeight: "bold",
                textAlign: "center",
                fontSize: "19px",
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
                color: "#9FA2B4",
                fontSize: "19px",
              }}
            >
              365 Kg
            </td>
            <td
              style={{
                textAlign: "center",
                color: "#9FA2B4",
                fontSize: "19px",
              }}
            >
              86,956 Kg
            </td>
            <td
              style={{
                textAlign: "center",
                color: "#9FA2B4",
                fontSize: "19px",
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
                color: "#9FA2B4",
                fontSize: "19px",
              }}
            >
              525 Kg
            </td>
            <td
              style={{
                textAlign: "center",
                color: "#9FA2B4",
                fontSize: "19px",
              }}
            >
              86,956 Kg
            </td>
            <td
              style={{
                textAlign: "center",
                color: "#9FA2B4",
                fontSize: "19px",
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
                color: "#9FA2B4",
                fontSize: "19px",
              }}
            >
              493 Kg
            </td>
            <td
              style={{
                textAlign: "center",
                color: "#9FA2B4",
                fontSize: "19px",
              }}
            >
              86,956 Kg
            </td>
            <td
              style={{
                textAlign: "center",
                color: "#9FA2B4",
                fontSize: "19px",
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
                color: "#9FA2B4",
                fontSize: "19px",
              }}
            >
              1.383 Kg
            </td>
            <td
              style={{
                textAlign: "center",
                color: "#9FA2B4",
                fontSize: "19px",
              }}
            >
              86,956 Kg
            </td>
            <td
              style={{
                textAlign: "center",
                color: "#9FA2B4",
                fontSize: "19px",
              }}
            >
              316,66 Kg
            </td>
          </tr>
        </table>

        <Box textAlign={"center"} marginTop={10}>
          <Button
            variant="contained"
            sx={{
              width: "20%",
              background: "rgba(0,72,217,0.45)",
              p:2,
              "&:hover": { background: "rgba(0,72,217,0.45)", color: "white",p:2},
            }}
            onClick={() => { navigate("/dashboard/Modal1") }}
          >
            Completar calendario fertilización
          </Button>
        </Box>
        <Box sx={{ transform: "translate(-30px, 30px)", textAlign: "left" }}>
          <Typography variant="caption">
            ¿Necesitas ayuda? por favor contáctanos al +56966163647
          </Typography>
        </Box>
      </Paper>
    </div>
  );
};

export default ProgamDeFertilizer;
