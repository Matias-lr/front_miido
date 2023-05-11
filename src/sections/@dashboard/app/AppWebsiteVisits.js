import PropTypes from "prop-types";
import ReactApexChart from "react-apexcharts";
// @mui
import { Box, Typography, Paper, Grid } from "@mui/material";
// components
import { useChart } from "../../../components/chart";
import "./tables.css";
// ----------------------------------------------------------------------

AppWebsiteVisits.propTypes = {
  title: PropTypes.string,
  subheader: PropTypes.string,
  chartData: PropTypes.array.isRequired,
  chartLabels: PropTypes.arrayOf(PropTypes.string).isRequired,
};

function AppWebsiteVisits({
  title,
  subheader,
  chartLabels,
  chartData,
  ...other
}) {
  const chartOptions = useChart({
    plotOptions: { bar: { columnWidth: "15%" } },
    fill: { type: chartData.map((i) => i.fill) },
    labels: chartLabels,
    xaxis: { type: "datetime" },
    tooltip: {
      shared: true,
      intersect: false,
      y: {
        formatter: (y) => {
          if (typeof y !== "undefined") {
            return `${y.toFixed(0)} visits`;
          }
          return y;
        },
      },
    },
  });

  return (
    <Paper>
      <Grid container>
        <Grid item xs={12} sm={12} md={9} lg={9}>
          <Box ml={2}>
            <h2>NPK variations</h2>
            <span>Traffic Score</span>
          </Box>
          <Box>
            <ReactApexChart
              type="line"
              series={chartData}
              options={chartOptions}
              height={364}
            />
          </Box>
        </Grid>

        <Grid xs={12} sm={12} md={3} lg={3}>
          <table style={{ width: "100%", textAlign: "center", height: 460 }}>
            <tr>
              <th style={{ textAlign: "center" }}>
                <Typography
                  variant="h4"
                  sx={{ color: "#9FA2B4", fontSize: "16px",fontWeight:'100' }}
                >
                  Nitrogen
                </Typography>
                <Typography variant="h4" sx={{ fontSize: "15px" }}>
                  234
                </Typography>
              </th>
            </tr>
            <tr>
              <td style={{ textAlign: "center" }}>
                <Typography
                  variant="h4"
                  sx={{ color: "#9FA2B4", fontSize: "16px",fontWeight:'100' }}
                >
                  Phosphorus
                </Typography>
                <Typography variant="h4" sx={{ fontSize: "15px" }}>
                  456
                </Typography>
              </td>
            </tr>
            <tr>
              <td style={{ textAlign: "center" }}>
                <Typography
                  variant="h4"
                  sx={{ color: "#9FA2B4", fontSize: "16px",fontWeight:'100' }}
                >
                  Urea/Ha
                </Typography>
                <Typography variant="h4" sx={{ fontSize: "15px" }}>
                  983
                </Typography>
              </td>
            </tr>
            <tr>
              <td style={{ textAlign: "center" }}>
                <Typography
                  variant="h4"
                  sx={{ color: "#9FA2B4", fontSize: "16px",fontWeight:'100' }}
                >
                  Total Urea
                </Typography>
                <Typography variant="h4" sx={{ fontSize: "15px" }}>
                  2,340
                </Typography>
              </td>
            </tr>
          </table>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default AppWebsiteVisits;
