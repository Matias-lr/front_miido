import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Link,
  Stack,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
  Box,
} from "@mui/material";
import { LoadingButton } from "@mui/lab";
// components
import Iconify from "../../../components/iconify";

// ----------------------------------------------------------------------

export default function LoginForm() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const handleClick = () => {
    navigate("/dashboard", { replace: true });
  };

  return (
    <>
      <Stack spacing={1}>
        <Typography sx={{ fontSize: "12px" }} color="#9FA2B4">
          EMAIL
        </Typography>
        <TextField
          size="small"
          name="email"
          label="Email address"
          sx={{
            input: { color: "#CFD29D" },
            label: { color: "#CFD29D" },
            fontWeight: 400,
            fontSize: "12px",
            "& .MuiInputBase-root": {
              height: "42px",
              marginBottom:'10px'
            },
          }}
        />
        <Box display="flex" justifyContent={"space-between"}>
          <Typography color="#9FA2B4" sx={{ fontSize: "12px" }}>PASSWORD</Typography>
          <Link
            variant="subtitle2"
            color="#9FA2B4"
            sx={{ fontSize: "10px", fontWeight: "400px" }}
            underline="hover"
          >
            Forgot password?
          </Link>
        </Box>
        <TextField
          size="small"
          name="password"
          label="Password"
          type={showPassword ? "text" : "password"}
          sx={{
            input: { color: "#CFD29D" },
            label: { color: "#CFD29D" },
            fontWeight: 400,
            fontSize: "12px",
            "& .MuiInputBase-root": {
              height: "42px",
            },
          }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  onClick={() => setShowPassword(!showPassword)}
                  edge="end"
                >
                  <Iconify
                    icon={showPassword ? "eva:eye-fill" : "eva:eye-off-fill"}
                  />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Stack>

      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        sx={{ my: 2 }}
      ></Stack>

      <LoadingButton
        type="submit"
        fullWidth
        variant="contained"
        onClick={handleClick}
        sx={{ height: "48px" }}
      >
        Log In
      </LoadingButton>
    </>
  );
}
