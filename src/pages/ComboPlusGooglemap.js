import React from 'react';
import { Box, Grid, Paper, Typography, Button, TablePagination } from '@mui/material';
import Googlemaps from './Googlemaps';

const ProductsPage = () => {
  const [page, setPage] = React.useState(2);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  return (
    <div>
      <Paper sx={{ width: '80%', m: 'auto' }}>
        <Grid container spacing={5}>
          <Grid xs={10} sm={10} md={4} lg={4}>
            <Paper sx={{ mr: 'auto' }}>
              <h1
                style={{
                  background: 'lightgray',
                  padding: '7px',
                  textAlign: 'center',
                  borderBottomRightRadius: 10,
                  borderBottomLeftRadius: 10,
                }}
              >
                Compo 1
              </h1>
              <Box>
                <Box display={'flex'} justifyContent={'space-between'} p={3} mb={-2}>
                  <Typography variant="body1">Fertilizer plan</Typography>
                  <Typography variant="body1" color="primary">
                    View Details
                  </Typography>
                </Box>
                <Box display={'flex'} justifyContent={'space-between'} p={3} mb={-3}>
                  <Typography variant="body1">Sol Uan 32%</Typography>
                  <Typography variant="body1">525</Typography>
                </Box>
                <hr />
                <Box display={'flex'} justifyContent={'space-between'} p={3} mb={-3}>
                  <Typography variant="body1">Fertilizer plan</Typography>
                  <Typography variant="body1" color="primary">
                    View Details
                  </Typography>
                </Box>
                <Box display={'flex'} justifyContent={'space-between'} p={3} mb={-3}>
                  <Typography variant="body1">Sol Uan 32%</Typography>
                  <Typography variant="body1">525</Typography>
                </Box>
                <hr />
                <Box display={'flex'} justifyContent={'space-between'} p={3} mb={-3}>
                  <Typography variant="body1">Fertilizer plan</Typography>
                  <Typography variant="body1" color="primary">
                    View Details
                  </Typography>
                </Box>
                <Box display={'flex'} justifyContent={'space-between'} p={3}>
                  <Typography variant="body1">Sol Uan 32%</Typography>
                  <Typography variant="body1">525</Typography>
                </Box>
              </Box>
              <Grid item xs={12} sm={12} md={12} lg={12}>
                <Button variant="contained" size="large" color="error" fullWidth>
                  Editar campo
                </Button>
              </Grid>
              <br />
              <Grid item xs={12} sm={12} md={12} lg={12}>
                <Button variant="contained" size="large" color="success" fullWidth>
                  Eliminar campo
                </Button>
              </Grid>
              <TablePagination
                component="div"
                count={100}
                page={page}
                onPageChange={handleChangePage}
                rowsPerPage={rowsPerPage}
                onRowsPerPageChange={handleChangeRowsPerPage}
              />
            </Paper>
          </Grid>
          {/* 2 section for google maps */}
          <Grid item xs={10} sm={10} md={8} lg={8}>
            <Googlemaps width={'100%'} height={550} />
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

export default ProductsPage;
