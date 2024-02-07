import { Box, CircularProgress } from "@mui/joy";
import React from "react";

function LoadingIndicator() {
  return (
    <Box
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      height={"110vh"}
    >
      <CircularProgress />
    </Box>
  );
}

export default LoadingIndicator;