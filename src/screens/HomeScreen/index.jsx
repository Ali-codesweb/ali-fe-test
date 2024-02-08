import { Button } from "@mui/joy";
import { Grid } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useDispatch, useSelector } from "react-redux";
import LoadingIndicator from "../../components/LoadingIndicator";
import CustomTextarea from "./components/CustomTextarea";
import KeywordItem from "./components/KeywordItem";
import { generatePrompt } from "./services/api";
import { setDescription, setkeywords } from "./slice";

function HomeScreen() {
  const dispatch = useDispatch();
  // redux slice
  const { loading, description, keywords, keywordsList } = useSelector(
    (state) => state.homeScreenSlice
  );
  // state effect functions

  if (loading) return <LoadingIndicator />;
  return (
    <>
      <Box
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
        mt={10}
      >
        <Box>
          <Typography>Enter Product Description :</Typography>{" "}
          <CustomTextarea
            placeholder={"Enter Product Description"}
            onChange={(e) => dispatch(setDescription(e.target.value))}
            value={description}
          />
        </Box>
        <Box mt={5}>
          <Typography>Selected Keywords :</Typography>{" "}
          <Grid container style={{ width: "64vw" }}>
            {keywordsList.map((e) => (
              <KeywordItem text={e} />
            ))}
          </Grid>
        </Box>
        <CustomTextarea
          value={keywords}
          placeholder={"Enter your keywords ( Enter space for next keyword ) "}
          onChange={(e) => dispatch(setkeywords(e.target.value))}
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
