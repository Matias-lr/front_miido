import { Helmet } from "react-helmet-async";
// @mui
import {
  Grid,
  Container,
  Typography,
  Paper,
  Box,
  IconButton,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
// components
import Iconify from "../components/iconify";
// sections
import NPKVariationsGraph from "../sections/@dashboard/app/AppWebsiteVisits";
import React from "react";
import { TitleTracker } from "src/App";
import {
  CheckCircle,
  LineWeight,
  RadioButtonUnchecked,
} from "@mui/icons-material";
import "./AppWebsiteVisits.css";
// ----------------------------------------------------------------------

export default function DashboardAppPage() {
  const { setTitleOnNav } = React.useContext(TitleTracker);
  React.useLayoutEffect(() => {
    setTitleOnNav("Tu panel");
  }, []);

  return (
    <>
      <Helmet>
        <title> MIIDO | DASHBOARD </title>
      </Helmet>

      <Container maxWidth="xl">
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={3}>
            <Paper
              variant="outlined"
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                p: 4,
                "&:hover": {
                  border: "1px solid blue",
                  cursor: "pointer",
                  color: "blue",
                },
              }}
            >
              <Typography
                variant="h5"
                sx={{ color: "#A0A3B4", fontWeight: "lighter" }}
              >
                Día del cultivo
              </Typography>
              <Typography variant="h2">120</Typography>
            </Paper>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Paper
              variant="outlined"
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                p: 4,
                "&:hover": {
                  border: "1px solid blue",
                  cursor: "pointer",
                  color: "blue",
                },
              }}
            >
              <Typography
                variant="h5"
                sx={{ color: "#A0A3B4", fontWeight: "lighter" }}
              >
                F. a aplicar
              </Typography>
              <Typography variant="h2">
                74 <span style={{ fontSize: 14 }}>ppm/ha</span>
              </Typography>
            </Paper>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Paper
              variant="outlined"
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",

                p: 4,
                "&:hover": {
                  border: "1px solid blue",
                  cursor: "pointer",
                  color: "blue",
                },
              }}
            >
              <Typography
                variant="h5"
                sx={{ color: "#A0A3B4", fontWeight: "lighter" }}
              >
                F. aplicado
              </Typography>
              <Typography variant="h2">
                12 <span style={{ fontSize: 14 }}>ppm/ha</span>
              </Typography>
            </Paper>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            {/* <AppWidgetSummary title="Bug Reports" total={234} color="error" icon={'ant-design:bug-filled'} /> */}
            <Paper
              variant="outlined"
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                p: 4,
                "&:hover": {
                  border: "1px solid blue",
                  cursor: "pointer",
                  color: "blue",
                },
              }}
            >
              <Typography
                variant="h5"
                sx={{ color: "#A0A3B4", fontWeight: "lighter" }}
              >
                Average moisture
              </Typography>
              <Typography variant="h2">64 %</Typography>
            </Paper>
          </Grid>

          <Grid item xs={12} md={12} lg={12}>
            <NPKVariationsGraph
              title="Variaciones NPK"
              subheader="Ultimos 120 días"
              chartLabels={[
                "01/01/2003",
                "02/01/2003",
                "03/01/2003",
                "04/01/2003",
                "05/01/2003",
                "06/01/2003",
                "07/01/2003",
                "08/01/2003",
                "09/01/2003",
                "10/01/2003",
                "11/01/2003",
              ]}
              chartData={[
                {
                  name: "Nitrógeno",
                  type: "area",
                  fill: "gradient",
                  data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30],
                },
                {
                  name: "Fósforo",
                  type: "area",
                  fill: "gradient",
                  data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43],
                },
                {
                  name: "Potasio",
                  type: "line",
                  fill: "solid",
                  data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39],
                },
              ]}
            />
          </Grid>

          {/* <Grid item xs={12} md={6} lg={4}>
            <AppCurrentVisits
              title="Current Visits"
              chartData={[
                { label: 'America', value: 4344 },
                { label: 'Asia', value: 5435 },
                { label: 'Europe', value: 1443 },
                { label: 'Africa', value: 4443 },
              ]}
              chartColors={[
                theme.palette.primary.main,
                theme.palette.info.main,
                theme.palette.warning.main,
                theme.palette.error.main,
              ]}
            />
          </Grid> */}

          <Grid item xs={12} md={6} lg={6}>
            <Paper
              elevation={5}
              component={Box}
              pl={"32px"}
              pr={"32px"}
              pt={"22px"}
              pb={"18px"}
              sx={{
                borderRadius: "8px",
                border: "1px solid #DFE0EB",
                height: "auto",
              }}
            >
              <Box>
                <Box
                  display={"flex"}
                  justifyContent={"space-between"}
                  style={{ height: "60px" }}
                >
                  {" "}
                  <div style={{ marginTop: "-7px" }}>
                    <p style={{ fontSize: "22px", fontWeight: "bold" }}>
                      Plan de fertilización
                    </p>
                  </div>
                  <p
                    color="primary"
                    style={{ fontSize: "18px", color: "blue" }}
                  >
                    Ver Detalles
                  </p>
                </Box>
                <Box my={4} />
                <Box
                  display={"flex"}
                  justifyContent={"space-between"}
                  style={{ padding: "5px 0" }}
                >
                  <Typography variant="body1">Sol Uan 32%</Typography>
                  <Typography variant="body1" color={"#A0A3B4"}>
                    525
                  </Typography>
                </Box>
                <hr
                  style={{
                    border: 0,
                    borderTop: "1px solid #DFE0EB",
                    marginLeft: "-32px",
                    marginRight: "-32px",
                    marginBottom: "20px",
                  }}
                />
                {/* <Box sx={{ my: 3 }} /> */}
                <Box
                  display={"flex"}
                  justifyContent={"space-between"}
                  style={{ padding: "5px 0" }}
                >
                  <Typography variant="body1">Sol Uan 32%</Typography>
                  <Typography variant="body1" color={"#A0A3B4"}>
                    332
                  </Typography>
                </Box>
                <hr
                  style={{
                    border: 0,
                    borderTop: "1px solid #DFE0EB",
                    marginLeft: "-32px",
                    marginRight: "-32px",
                    marginBottom: "20px",
                  }}
                />
                {/* <Box sx={{ my: 2 }} /> */}
                <Box
                  display={"flex"}
                  justifyContent={"space-between"}
                  style={{ padding: "5px 0" }}
                >
                  <Typography variant="body1">Sol Uan 32%</Typography>
                  <Typography variant="body1" color={"#A0A3B4"}>
                    494
                  </Typography>
                </Box>
                <hr
                  style={{
                    border: 0,
                    borderTop: "1px solid #DFE0EB",
                    marginLeft: "-32px",
                    marginRight: "-32px",
                    marginBottom: "20px",
                  }}
                />

                <Box
                  display={"flex"}
                  justifyContent={"space-between"}
                  style={{ padding: "5px 0" }}
                >
                  <Typography variant="body1">Sol Uan 32%</Typography>
                  <Typography variant="body1" color={"#A0A3B4"}>
                    3
                  </Typography>
                </Box>
              </Box>
            </Paper>
          </Grid>

          <Grid item xs={12} md={6} lg={6}>
            <Paper
              elevation={5}
              component={Box}
              pl={"32px"}
              pr={"32px"}
              pt={"22px"}
              pb={"18px"}
              sx={{ borderRadius: "8px", border: "1px solid #DFE0EB",pb:"21px" }}
            >
              <Box style={{ minHeight: "auto" }}>
                <Box
                  display={"flex"}
                  justifyContent={"space-between"}
                  pb={"10px"}
                  // pt={"4px"}
                  style={{ height: "70px" }}
                >
                  {" "}
                  <div style={{ marginTop: "-7px" }}>
                    <p
                      style={{
                        fontSize: "22px",
                        fontWeight: "bold",
                      }}
                    >
                      Fertilizer Market
                    </p>
                  </div>
                  <p
                    color="primary"
                    style={{ fontSize: "18px", color: "blue" }}
                  >
                    View All
                  </p>
                </Box>
                <div>
                  <p
                    style={{
                      marginTop: -25,
                      color: "#9FA2B4",
                      fontWeight: "lighter",
                      fontSize:'15px'
                    }}
                  >
                    Compare prices of fertilizers in our Market place
                  </p>
                  <br />
                </div>
                <Box display={"flex"} justifyContent={"space-between"} style={{marginTop:'-19px'}}>
                  <Typography
                    variant="subtitle1"
                    style={{ color: "lightgray" }}
                  >
                    Create new supplier
                  </Typography>
                  <IconButton
                    style={{ borderRadius: 10, background: "#F0F1F7" }}
                  >
                    <Iconify icon="mdi-light:plus" />
                  </IconButton>
                </Box>
                <hr
                  style={{
                    border: 0,
                    borderTop: "1px solid #DFE0EB",
                    marginLeft: "-32px",
                    marginRight: "-32px",
                  }}
                />
                <Box
                  display={"flex"}
                  justifyContent={"space-between"}
                  style={{padding:"2.8px 0"}}
                >
                  <Box>
                    <FormControlLabel
                      control={
                        <Checkbox
                          icon={<RadioButtonUnchecked />}
                          checkedIcon={<CheckCircle />}
                        />
                      }
                      label="UreaBrand"
                    />
                  </Box>

                  <Box
                    sx={{
                      width: "58px",
                      height: "26px",
                      background: "#CC6429",
                      borderRadius: "8px",
                      my: "auto",
                    }}
                  >
                    <Typography
                      variant="body1"
                      color={"white"}
                      sx={{
                        fontSize: "11px",
                        m: "auto",
                        width: "50%",
                        lineHeight: "26px",
                      }}
                    >
                      $120
                    </Typography>
                  </Box>
                </Box>
                <hr
                  style={{
                    border: 0,
                    borderTop: "1px solid #DFE0EB",
                    marginLeft: "-32px",
                    marginRight: "-32px",
                  }}
                />
                <Box
                  display={"flex"}
                  justifyContent={"space-between"}
                  sx={{ marginBottom: "14px" }}
                >
                  <Box>
                    <FormControlLabel
                      control={
                        <Checkbox
                          icon={<RadioButtonUnchecked />}
                          checkedIcon={<CheckCircle />}
                        />
                      }
                      label="UreaBrand"
                    />
                  </Box>

                  <Box
                    sx={{
                      width: "58px",
                      height: "26px",
                      background: "#C9CC29",
                      borderRadius: "8px",
                      my: "auto",
                    }}
                  >
                    <Typography
                      variant="body1"
                      color={"white"}
                      sx={{
                        fontSize: "11px",
                        m: "auto",
                        width: "50%",
                        lineHeight: "26px",
                      }}
                    >
                      $140
                    </Typography>
                  </Box>
                </Box>{" "}
                <hr
                  style={{
                    border: 0,
                    borderTop: "1px solid #DFE0EB",
                    marginLeft: "-32px",
                    marginRight: "-32px",
                  }}
                />
                <Box display={"flex"} justifyContent={"space-between"}>
                  <Box>
                    <FormControlLabel
                      control={
                        <Checkbox
                          icon={<RadioButtonUnchecked />}
                          checkedIcon={<CheckCircle />}
                          defaultChecked
                        />
                      }
                      label="UreaBrand"
                    />
                  </Box>

                  <Box
                    sx={{
                      width: "54px",
                      height: "24px",
                      background: "#29CC97",
                      borderRadius: "8px",
                      my: "auto",
                    }}
                  >
                    <Typography
                      variant="body1"
                      color={"white"}
                      sx={{
                        fontSize: "11px",
                        m: "auto",
                        width: "50%",
                        lineHeight: "24px",
                      }}
                    >
                      $180
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
