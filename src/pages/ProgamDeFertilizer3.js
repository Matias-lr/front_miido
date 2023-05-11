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

const ProgamDeFertilizer3 = () => {
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
        transform: "translate(-40px,135px)",
        overflow:"hidden"
      }}
    />
  );
  return (
    <div>
      <Paper elevation={5} sx={{ width: "80%", p: 8, position:"relative" }}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <Typography sx={{ fontWeight: "bold", fontSize: "larger", mb: 5 }}>
              Detalles del análisis de suelo
            </Typography>
          </Grid>

          <Grid item xs={12} sm={12} md={6} lg={6} textAlign="right">
            <IconButton aria-label="Example">
              <Typography variant="button">Sort</Typography> <FilterListIcon />
            </IconButton>

            <IconButton aria-label="Example">
              <Typography variant="button">Filter</Typography>{" "}
              <FilterAltOutlinedIcon />
            </IconButton>
          </Grid>
          {/* line will be here */}
          <Grid
            item
            xs={12}
            sm={12}
            md={12}
            lg={12}
            component={Box}
            display="flex"
            justifyContent={"space-around"}
            flexWrap="wrap"
          >
            <Typography>Detalles del análisis de suelo</Typography>
            <Typography>Customer name</Typography>
            <Typography>Date</Typography>
            <Typography>Priority</Typography>
          </Grid>
          {HorizonaLine}
          <br />
          <br />
          <br />
          <br />
        </Grid>
        <table >
          <tr>
            <th style={{ fontWeight: "bold" }}>Nutriente</th>
            <th style={{ fontWeight: "bold", textAlign: "center" }}>
              Requrimiento real
            </th>
            <th style={{ fontWeight: "bold", textAlign: "center" }}>
              Aplicación actual
            </th>
            <th style={{ fontWeight: "bold", textAlign: "center" }}>
              Requerimiento completo
            </th>
          </tr>
          <tr>
            <td style={{ fontWeight: "bold" ,fontSize:'19px'}}>N</td>
            <td style={{ textAlign: "center" ,fontSize:'19px',color:'#9FA2B4'}}>2.847,39 Kg</td>
            <td style={{ textAlign: "center" ,fontSize:'19px',color:'#9FA2B4'}}>86,956 Kg</td>
            <td style={{ textAlign: "center" ,fontSize:'19px',}}>100%</td>
          </tr>
          <tr>
            <td style={{ fontWeight: "bold" ,fontSize:'19px'}}>P</td>
            <td style={{ textAlign: "center" ,fontSize:'19px',color:'#9FA2B4'}}>525 Kg</td>
            <td style={{ textAlign: "center" ,fontSize:'19px',color:'#9FA2B4'}}>86,956 Kg</td>
            <td style={{ textAlign: "center" ,fontSize:'19px',}}>100%</td>
          </tr>
          <tr>
            <td style={{ fontWeight: "bold" ,fontSize:'19px',}}>K</td>
            <td style={{ textAlign: "center" ,fontSize:'19px',color:'#9FA2B4'}}>493 Kg</td>
            <td style={{ textAlign: "center" ,fontSize:'19px',color:'#9FA2B4'}}>86,956 Kg</td>
            <td style={{ textAlign: "center" ,fontSize:'19px',}}>100%</td>
          </tr>
          <tr>
            <td style={{ fontWeight: "bold" ,fontSize:'19px'}}>Ca</td>
            <td style={{ textAlign: "center" ,fontSize:'19px',color:'#9FA2B4'}}>1.383 Kg</td>
            <td style={{ textAlign: "center" ,fontSize:'19px',color:'#9FA2B4'}}>86,956 Kg</td>
            <td style={{ textAlign: "center" ,fontSize:'19px',}}>100%</td>
          </tr>

          <tr>
            <td style={{ fontWeight: "bold" ,fontSize:'19px',}}>S</td>
            <td style={{ fontWeight: "bold" ,fontSize:'19px',color:'#9FA2B4'}}> </td>
            <td style={{ fontWeight: "bold" ,fontSize:'19px',color:'#9FA2B4'}}> </td>
            <td style={{ fontWeight: "bold" ,fontSize:'19px'}}> </td>
          </tr>

          <tr>
            <td style={{ fontWeight: "bold" ,fontSize:'19px',}}>Fe</td>
            <td style={{ textAlign: "center" ,fontSize:'19px',color:'#9FA2B4'}}>1.383 Kg</td>
            <td style={{ textAlign: "center" ,fontSize:'19px',color:'#9FA2B4'}}>86,956 Kg</td>
            <td style={{ textAlign: "center" ,fontSize:'19px'}}>0</td>
          </tr>

          <tr>
            <td style={{ fontWeight: "bold" ,fontSize:'19px',}}>Mn</td>
            <td style={{ textAlign: "center" ,fontSize:'19px',color:'#9FA2B4'}}>1.383 Kg</td>
            <td style={{ textAlign: "center" ,fontSize:'19px',color:'#9FA2B4'}}>86,956 Kg</td>
            <td style={{ textAlign: "center" ,fontSize:'19px'}}>0</td>
          </tr>

          <tr>
            <td style={{ fontWeight: "bold" ,fontSize:'19px',}}>Zn</td>
            <td style={{ textAlign: "center" ,fontSize:'19px',color:'#9FA2B4'}}>1.383 Kg</td>
            <td style={{ textAlign: "center" ,fontSize:'19px',color:'#9FA2B4'}}>86,956 Kg</td>
            <td style={{ textAlign: "center" ,fontSize:'19px'}}>0</td>
          </tr>
        </table>

        <Box textAlign={"right"} marginTop={9}>
          <Button
            variant="contained"
            sx={{
              width: "25%",
              marginBottom: "10px",
              background: "rgba(0,72,217,0.45)",
              p:2,
              "&:hover": { background: "rgba(0,72,217,0.45)", color: "white",p:2 },
            }}
            onClick={() => { navigate("/dashboard/ProgamDeFertilizer") }}
          >
            Completar calendario de fertilización
          </Button>
        </Box>
        <Box sx={{ transform: "translate(-30px, 40px)",textAlign:"left" }}>
          <Typography variant="caption">
            ¿Necesitas ayuda? por favor contáctanos al +56966163647
          </Typography>
        </Box>
      </Paper>
    </div>
  );
};

export default ProgamDeFertilizer3;
