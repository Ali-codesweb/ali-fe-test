import { Textarea } from "@mui/joy";
import { useMediaQuery } from "@mui/material";
import React from "react";

function CustomTextarea({ value, placeholder, onChange }) {
  return (
    <Textarea
      minRows={2}
      value={value}
      onChange={onChange}
      size="lg"
      variant="soft"
      style={{ width: "64vw" }}
      placeholder={placeholder}
    />
  );
}

export default CustomTextarea;
