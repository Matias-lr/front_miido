import React, { useEffect, useState } from "react";
import { Box, Button, Grid, Paper, Typography } from "@mui/material";
import "./ProgramDeFertilzer.css";
import { useParams } from "react-router-dom";

const ProgamDeFertilizer = () => {

  const [cuartel,setCuartel] = useState([]);
  const [productos,setProductos] = useState([]);
  const { idCuartel, idProductoN, idProductoK, idProductoP} = useParams()

  useEffect(()=>{
    fetch(`https://backend-eqjlrpwjoa-tl.a.run.app/cuarteles/${idCuartel}`)
    .then(res => res.json())
    .then(res => setCuartel(res.data))

    fetch(`https://backend-eqjlrpwjoa-tl.a.run.app/productos`)
    .then(res => res.json())
    .then(res => setProductos(res.data.filter(p => p.id == idProductoN || p.id == idProductoP || p.id == idProductoK)))

  },[])

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
              Detalles para el cuartel {cuartel ? cuartel.nombre : ""}
            </Typography>
          </Grid>
          {HorizonaLine}
          <Box my={3} />
        </Grid>
           <table style={{ marginTop: "60px" }}>
            <tr>
              <th style={{ fontWeight: "bold", fontSize: "19px" }}>
                Producto
              </th>
              <th
                style={{
                  fontWeight: "bold",
                  textAlign: "center",
                  fontSize: "19px",
                }}
              >
                Cantidad
              </th>
              <th
                style={{
                  fontWeight: "bold",
                  textAlign: "center",
                  fontSize: "19px",
                }}
              >
                Precio
              </th>
              <th
                style={{
                  fontWeight: "bold",
                  textAlign: "center",
                  fontSize: "19px",
                }}
              >
                proveedor
              </th>
              <th
                style={{
                  fontWeight: "bold",
                  textAlign: "center",
                  fontSize: "19px",
                }}
              >
                elemento primordial
              </th>
            </tr>
            {productos ? productos.map(producto => 
            <tr>
              <td style={{ fontWeight: "bold", fontSize: "19px" }}>
              
              {producto.nombre}
            </td>
              <td
                style={{
                  textAlign: "center",
                  color: "#9FA2B4",
                  fontSize: "19px",
                }}
              >
              {producto.capacidad_envase * 3.2} {producto.nombre_tipo_aplicacion == "Líquido" ? "ml" : "kg" }
              </td>
              <td
                style={{
                  textAlign: "center",
                  color: "#9FA2B4",
                  fontSize: "19px",
                }}
              >
                ${producto.precio}
              </td>
              <td
                style={{
                  textAlign: "center",
                  color: "#9FA2B4",
                  fontSize: "19px",
                }}
              >
                {producto.proveedor_name}
              </td>
              <td
                style={{
                  textAlign: "center",
                  color: "#9FA2B4",
                  fontSize: "19px",
                }}
              >
                {producto.nombre_tipo_producto}
              </td>
            </tr>
          ):"calculando"}
         </table>
       

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
