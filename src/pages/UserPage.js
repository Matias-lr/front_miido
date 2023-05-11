import React from 'react';
import { Button, FormControl, Grid, OutlinedInput, Paper } from '@mui/material';
import Googlemaps from './Googlemaps';

const UserPage = () => {
  return (
    <div>
      <Paper sx={{ textAlign: 'center' }}>
        <h1
          style={{
            background: 'lightgray',
            padding: '7px',
            textAlign: 'center',
            borderBottomRightRadius: 10,
            borderBottomLeftRadius: 10,
            marginBottom: 30,
          }}
        >
          Crear nuevo campo
        </h1>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <FormControl sx={{ width: '60ch' }}>
              <OutlinedInput placeholder="Ingresar nombre del campo" />
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6} mb={5}>
            <FormControl sx={{ width: '60ch' }}>
              <OutlinedInput placeholder="Área: 58,3 Ha" />
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <Googlemaps width={'100%'} height={'700px'} />
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <Button variant="contained" size="large" color="error" sx={{ width: '60ch' }}>
              Continuar
            </Button>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <Button variant="contained" size="large" color="success" sx={{ width: '60ch' }}>
              Eliminar campo{' '}
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

export default UserPage;
