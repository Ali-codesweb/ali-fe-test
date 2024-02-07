import React, { useState } from "react";

function CustomToast(error) {
  const [open, setOpen] = useState(error ? true : false);
  const handleClose = () => {
    setOpen(false);
  };
  const action = (
    <Button color="secondary" size="small" onClick={handleClose}>
      Close
    </Button>
  );
  return (
    <Snackbar
      open={open}
      autoHideDuration={6000}
      onClose={handleClose}
      message="Note archived"
      action={action}
    />
  );
}

export default CustomToast;
