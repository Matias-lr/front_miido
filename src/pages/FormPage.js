import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Button,
  Grid,
  Paper,
  Typography,
  IconButton,
  Box,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TablePagination,
} from "@mui/material";
import FilterListIcon from "@mui/icons-material/FilterList";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import { TitleTracker } from "src/App";

const FormPage = () => {
  const navigate = useNavigate()

  const [age, setAge] = React.useState("");
  const [cuarteles,setCuarteles] = useState([]);
  const [page, setPage] = React.useState(2);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const { setTitleOnNav } = React.useContext(TitleTracker);

  useEffect(()=>{
    fetch(`https://backend-eqjlrpwjoa-tl.a.run.app/cuarteles`)
    .then(res => res.json())
    .then(res => setCuarteles(res.data))
  },[])

  React.useLayoutEffect(() => {
    setTitleOnNav("Análisis de nutrientes");
  }, []);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const HorizonaLine = (
    <hr
      style={{
        border: "none",
        borderTop: "1px dotted lightgray",
        color: "gray",
        backgroundColor: "lightgray",
        height: "2px",
        width: "98%",
        marginTop: "20px",
        marginRight: 1,
      }}
    />
  );
  return (
    <div style={{ overFlow: "hidden" }}>
      <Paper
        style={{
          width: "94%",
          border: "1px solid #DFE0EB",
          borderRadius: "8px",
        }}
      >
        
        <Grid container spacing={3} component={Box}>
          <Grid item xs={12} sm={12} md={6} lg={6} component={Box}>
            <Typography
              sx={{
                fontWeight: "bold",
                fontSize: "larger",
                mb: 5,
                color: "#A0A3B4",
                textAlign: "left",
                marginLeft: "5%",
                mt: 4,
              }}
            >
              Detalles del análisis de suelo
            </Typography>
          </Grid>

          <Grid
            item
            xs={12}
            sm={12}
            md={6}
            lg={6}
            component={Box}
            mt={4}
            textAlign="right"
            ml={-4}
          >
            <IconButton aria-label="Example">
              <Typography variant="button">Sort</Typography> <FilterListIcon />
            </IconButton>
            &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <IconButton aria-label="Example">
              <Typography variant="button">Filter</Typography>{" "}
              <FilterAltOutlinedIcon />
            </IconButton>
          </Grid>

          <Grid item xs={12} sm={12} md={6} lg={6}>
            <Box style={{ margin: "0 0 0 4%" }}>
              <p>Nombre del cultivo</p>
              <TextField
                id="filled-basic"
                label="Concha y Toro"
                variant="filled"
                defaultValue={"Concha y toro"}
                sx={{ width: "80%" }}
              />
            </Box>
          </Grid>

          <Grid item xs={12} sm={12} md={6} lg={6}>
            <Box style={{ marginRight: "-10%", width: "105%" }}>
              <p>Tipo de suelo</p>
              <TextField
                id="filled-basic"
                label="Arenoso"
                variant="filled"
                sx={{ width: "80%" }}
              />
            </Box>
          </Grid>

          <Grid item xs={12} sm={12} md={12} lg={12}>
            <Box
              display="flex"
              justifyContent={"space-between"}
              flexWrap="wrap"
              sx={{ width: "92%", border: "red" }}
            >
              <Typography sx={{ color: "#A0A3B4", marginLeft: "2.8%" }}>
                #
              </Typography>
              <Typography sx={{ color: "#A0A3B4" }}>Nombre del cuartel</Typography>
              <Typography sx={{ color: "#A0A3B4" }}>cantidad de sectores</Typography>
              <Typography sx={{ color: "#A0A3B4" }}>tamanio total</Typography>
              <Typography sx={{ color: "#A0A3B4" }}>Calcular</Typography>
            </Box>
          </Grid>
          <Box style={{ paddingLeft: "20p", width: "100%" }}>
            {HorizonaLine}
          </Box>

          {cuarteles ? 
            cuarteles.map( cuartel => 
              <Grid item xs={12} sm={12} md={12} lg={12}>
                <Box
                  display="flex"
                  justifyContent={"space-between"}
                  flexWrap="wrap"
                  sx={{ width: "92%", border: "red" }}
                >
                  <Typography sx={{ color: "black", marginLeft: "2.8%" }}>
                    {cuartel.id}
                  </Typography>
                  <Typography sx={{ color: "black" }}>{cuartel.nombre}</Typography>
                  <Typography sx={{ color: "black" }}>{cuartel.cantidad_sectores}</Typography>
                  <Typography sx={{ color: "black" }}>{cuartel.tamanio_total}</Typography>
                  <Typography sx={{ color: "black" }}>
                    <Button
                        variant="contained"
                        sx={{
                          width: "20%",
                          background: "rgba(0,72,217,0.45)",
                          p:2,
                          "&:hover": { background: "rgba(0,72,217,0.45)", color: "white",p:2},
                        }}
                        onClick={() => { navigate(`/dashboard/cuartel/${cuartel.id}`) }}
                      >
                        Calcular
                    </Button>
                  </Typography>
                </Box>
              </Grid>
            ) : "loading"
          }
          

          
          <TablePagination
            sx={{ textAlign: "right", width: "100%" }}
            component="div"
            count={100}
            page={page}
            onPageChange={handleChangePage}
            rowsPerPage={rowsPerPage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Grid>
      </Paper>
    </div>
  );
};

export default FormPage;
