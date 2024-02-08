import { Button } from "@mui/joy";
import { Grid, useMediaQuery } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import LoadingIndicator from "../../components/LoadingIndicator";
import CustomAppbar from "../../components/CustomAppbar";
import CustomTextarea from "./components/CustomTextarea";
import { generatePrompt } from "./services/api";
import { setDescription, setkeywords } from "./slice";

function HomeScreen() {
  const isMobile = useMediaQuery("(max-width:600px)");
  const dispatch = useDispatch();
  // redux slice
  const { loading, description, keywords } = useSelector(
    (state) => state.homeScreenSlice
  );
  // state effect functions

  if (loading) return <LoadingIndicator />;
  return (
    <>
      <CustomAppbar />
      <Box
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
        mt={10}
      >
        <Box>
          <Typography>Enter Product Description :</Typography>{" "}
          <CustomTextarea
            props={{ placeholder: "Enter Product Description" }}
            onChange={(e) => dispatch(setDescription(e.target.value))}
            value={description}
          />
        </Box>
        <Box mt={5}>
          <Typography>Selected Keywords :</Typography>{" "}
          <Grid container style={{ width: isMobile ? "400px" : "650px" }}>
            {keywords.map((e) => (
              <Grid item xs={3} bgcolor={"red"} mx={1}>
                {e}&nbsp;
              </Grid>
            ))}
          </Grid>
        </Box>
        <CustomTextarea
          props={{
            placeholder:
              "Enter your keywords ( Enter space for next keyword ) ",
          }}
          onChange={(e) => dispatch(setkeywords(e))}
        />
        <Button
          onClick={() => dispatch(generatePrompt())}
          style={{ width: "250px", marginTop: "30px" }}
        >
          Generate Prompt
        </Button>
      </Box>
    </>
  );
}

export default HomeScreen;
