import { Box, Modal, ModalClose, ModalDialog, Typography } from "@mui/joy";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../slice";

function ResponseModal() {
  const { responseModelOpen, responseData } = useSelector(
    (state) => state.homeScreenSlice
  );
  const dispatch = useDispatch();
  console.log(responseData);
  return (
    <Modal
      open={responseModelOpen}
      aria-labelledby="modal-title"
      aria-describedby="modal-desc"
      onClose={() => dispatch(closeModal())}
    >
      <ModalDialog>
        <ModalClose />
        {responseData && (
          <Box height={"80%"} sx={{ overflow: "scroll" }}>
            <Typography>Product Names :</Typography>
            {responseData["product_names"]?.map((e, i) => (
              <Typography>
                {i + 1}. {e}
              </Typography>
            ))}
            <Typography fontWeight={600} mt={1}>
              Transcript for a TV ad for the first product name aimed at
              youngsters
            </Typography>
            <Typography>{responseData["tv_ad_young_adults"]}</Typography>
            <Typography fontWeight={600} mt={1}>
              Transcript for a Facebook ad for the second product name aimed at
              parents
            </Typography>
            <Typography>{responseData["facebook_ad_parents"]}</Typography>
            <Typography fontWeight={600} mt={1}>
              Transcript for a Radio ad for the third product name aimed at
              parents
            </Typography>
            <Typography>{responseData["radio_ad_parents"]}</Typography>
            <Typography fontWeight={600} mt={1}>
              Safety warning for a product name
            </Typography>
            <Typography>{responseData["safety_warning"]}</Typography>
          </Box>
        )}
      </ModalDialog>
    </Modal>
  );
}

export default ResponseModal;
