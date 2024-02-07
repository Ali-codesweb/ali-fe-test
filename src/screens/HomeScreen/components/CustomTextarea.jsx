import { Textarea } from "@mui/joy";
import { useMediaQuery } from "@mui/material";
import React from "react";

function CustomTextarea({ value, props, onChange }) {
  const isMobile = useMediaQuery("(max-width:600px)");
  return (
    <Textarea
      minRows={2}
      value={value}
      onChange={onChange}
      size="lg"
      variant="soft"
      style={{ width: isMobile ? "400px" : "650px" }}
      {...props}
    />
  );
}

export default CustomTextarea;
