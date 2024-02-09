import { Box, CircularProgress, Typography } from "@mui/joy";
import React from "react";

function LoadingIndicator() {
  return (
    <Box
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      height={"90vh"}
    >
      <Typography>Just some time .....</Typography>
      <CircularProgress />
    </Box>
  );
}

export default LoadingIndicator;
