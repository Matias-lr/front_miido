import React, { useEffect, useState } from "react";
import { useNavigate,useParams } from "react-router-dom";
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

const CuartelPage = () => {
  const navigate = useNavigate()

  const [age, setAge] = React.useState("");
  const [cuartel,setCuartel] = useState([]);
  const [proveedores,setProveedores] = useState([]);
  const [proveedor,setProveedor] = useState({});
  const [productos,setProductos] = useState([]);
  const [productoN,setProductoN] = useState({});
  const [productoP,setProductoP] = useState({});
  const [productoK,setProductoK] = useState({});
  const [calc,setCalc] = useState({});
  const { setTitleOnNav } = React.useContext(TitleTracker);

  let { idCuartel } = useParams();

  useEffect(()=>{
    fetch(`https://backend-eqjlrpwjoa-tl.a.run.app/cuarteles/${idCuartel}`)
    .then(res => res.json())
    .then(res => setCuartel(res.data))
    
    fetch(`https://backend-eqjlrpwjoa-tl.a.run.app/proveedores`)
    .then(res => res.json())
    .then(res => setProveedores(res.data))

    fetch(`https://backend-eqjlrpwjoa-tl.a.run.app/productos`)
    .then(res => res.json())
    .then(res => setProductos(res.data))

  },[])

  useEffect(() => {
    handleCalculation()
  },[productoK,productoN,productoP])
  
  useEffect(() => {
    setCalc({})
  },[proveedor])

  React.useLayoutEffect(() => {
    setTitleOnNav("Análisis de nutrientes");
  }, []);

  const handleProvider = (event) =>{
    if(event.target.value != 0){
      setProveedor(event.target.value)
      fetch(`http://localhost:3000/productos/${event.target.value}`)
      .then(res => res.json())
      .then(res => setProductos(res.data))
      return
    }
    setProveedor({})
    fetch(`http://localhost:3000/productos`)
    .then(res => res.json())
    .then(res => setProductos(res.data))
  }

  const handleProductN = (event) => {
    setProductoN(event.target.value)
    handleCalculation()
  };

  const handleProductP = (event) => {
    setProductoP(event.target.value)
    handleCalculation()
  };

  const handleProductK = (event) => {
    setProductoK(event.target.value)
    handleCalculation()
  };

  const handleCalculation = () => {
    const pk = productos.find(p => p.id == productoK)
    const pn = productos.find(p => p.id == productoN)
    const pp = productos.find(p => p.id == productoP)
    console.log(pk,pn,pp)
    if(pk && pn && pp){
      setCalc({
        ...calc,
        costo:(pk.precio * 3) + (pn.precio * 2) + (pp.precio * 4),
        cantidad:(pk.capacidad_envase * 2) + (pn.capacidad_envase * 4.6) + (pp.capacidad_envase * 2.3)
      });
      return
    }
    setCalc({})
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
        {cuartel ? 
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
            Cuartel {cuartel.nombre}
          </Typography>
        </Grid>

        <Grid item xs={12} sm={12} md={3} lg={3}>
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
            Cantidad de sectores: {cuartel.cantidad_sectores}
          </Typography>
        </Grid>

        <Grid item xs={12} sm={12} md={3} lg={3}>
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
            Tamanio del cuartel: {cuartel.tamanio_total}ha
          </Typography>
        </Grid>
        <Box style={{ paddingLeft: "20p", width: "100%" }}>
          {HorizonaLine}
        </Box>

        <Grid container component={Box} width={"96%"} ml={6}>
            <Grid item xs={12} sm={12} md={4} lg={4}>
              <p style={{ paddingLeft: "8px" }}>Selecciona el proveedor</p>
              <FormControl sx={{ m: 1, minWidth: "80%" }} size="medium">
                <InputLabel id="demo-select-small">proveedor</InputLabel>
                <Select
                  labelId="demo-select-small"
                  id="demo-select-small"
                  value={proveedor}
                  label="Nutriente"
                  defaultValue='0'
                  onChange={handleProvider}
                >
                  <MenuItem value='0'>Todos</MenuItem>
                  {proveedores ? proveedores.map(p =>
                    <MenuItem value={p.id}>{p.nombre}</MenuItem>
                  ) : ""}
                </Select>
              </FormControl>
            </Grid>
            <Box style={{ paddingLeft: "20p", width: "100%" }}>
              {HorizonaLine}
            </Box>

            {productos ? 
              <>
                <Grid item xs={12} sm={12} md={4} lg={4}>
                  <p style={{ paddingLeft: "8px" }}>Selecciona el producto n</p>
                  <FormControl sx={{ m: 1, minWidth: "80%", maxWidth: "80%" }} size="medium">
                    <InputLabel id="demo-select-small">N</InputLabel>
                    <Select
                      labelId="demo-select-small"
                      id="demo-select-small"
                      value={productoN}
                      defaultValue="n"
                      label="Nutriente"
                      onChange={handleProductN}
                    >
                      {productos.filter( p => p.tipo_producto_id === 1)
                      .map(p =>
                        <MenuItem value={p.id}>{`${p.nombre} - $${p.precio} - ${p.proveedor_name}`}</MenuItem>
                      )}
                    </Select>
                  </FormControl>
                </Grid>

                <Grid item xs={12} sm={12} md={4} lg={4}>
                  <p style={{ paddingLeft: "8px" }}>Selecciona el producto p</p>
                  <FormControl sx={{ m: 1, minWidth: "80%", maxWidth: "80%" }} size="medium">
                    <InputLabel id="demo-select-small">P</InputLabel>
                    <Select
                      labelId="demo-select-small"
                      id="demo-select-small"
                      value={productoP}
                      label="Nutriente"
                      onChange={handleProductP}
                    >
                      {productos.filter( p => p.tipo_producto_id === 2)
                      .map(p =>
                        <MenuItem value={p.id}>{`${p.nombre} - $${p.precio} - ${p.proveedor_name}`}</MenuItem>
                      )}
                    </Select>
                  </FormControl>
                </Grid>

                <Grid item xs={12} sm={12} md={4} lg={4}>
                  <p style={{ paddingLeft: "8px" }}>Selecciona el producto k</p>
                  <FormControl sx={{ m: 1, minWidth: "80%", maxWidth: "80%" }} size="medium">
                    <InputLabel id="demo-select-small">K</InputLabel>
                    <Select
                      labelId="demo-select-small"
                      id="demo-select-small"
                      value={productoK}
                      label="Nutriente"
                      onChange={handleProductK}
                    >
                     {productos.filter( p => p.tipo_producto_id === 3)
                      .map(p =>
                        <MenuItem value={p.id}>{`${p.nombre} - $${p.precio} - ${p.proveedor_name}`}</MenuItem>
                      )}
                    </Select>
                  </FormControl>
                </Grid> 
              </> 
              : ""
            }
            
          </Grid>
          <Box style={{ paddingLeft: "20p", width: "100%" }}>
            {HorizonaLine}
          </Box>
          {calc.costo ? 
            <Grid item xs={12} sm={12} md={12} lg={12}>
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
                Precio: ${calc.costo} cantidad: {calc.cantidad}

                <Button
                        variant="contained"
                        sx={{
                          width: "20%",
                          background: "rgba(0,72,217,0.45)",
                          p:2,
                          "&:hover": { background: "rgba(0,72,217,0.45)", color: "white",p:2},
                        }}
                        onClick={() => { navigate(`/dashboard/ProgamDeFertilizer/${cuartel.id}/${productoN}/${productoK}/${productoP}`) }}
                        //ProgamDeFertilizer/:idCuartel/:idProductoN/:idProductoK/:idProductoP
                      >
                        Calcular
                    </Button>
              </Typography>
            </Grid> : ""
          }
          

      </Grid>
      : "loading"
        }
        
        
      </Paper>
    </div>
  );
};

export default CuartelPage;
