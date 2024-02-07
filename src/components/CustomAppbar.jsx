import { Box, Typography } from "@mui/joy";
import { AppBar, Toolbar } from "@mui/material";
import React from "react";

function CustomAppbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            color="white"
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
          >
            Sterling Cooper & Partners
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default CustomAppbar;
