import { Box } from "@mui/joy";
import { Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { onItemRemove } from "../slice";

function KeywordItem({ text }) {
  const dispatch = useDispatch();

  return (
    <Box
      display={"flex"}
      my={1}
      borderRadius={25}
      py={1}
      px={2}
      bgcolor={"#1976d2"}
      mx={1}
    >
      <Typography color="white">{text}</Typography>
      <Typography
        color="white"
        ml={2}
        onClick={() => dispatch(onItemRemove(text))}
      >
        X
      </Typography>
    </Box>
  );
}

export default KeywordItem;
