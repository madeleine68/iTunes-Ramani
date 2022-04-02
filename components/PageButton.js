import React from "react";
import Typography from "@mui/material/Typography";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import Fab from "@mui/material/Fab";

import Box from "@mui/material/Box";

const PageButton = ({ page, nextPage, prevPage }) => {
  const style = {
    display: "flex",
    justifyContent: "center",
    alignItem: "center",
  };

  return (
    <Box sx={style}>
      <Box sx={{ "& > :not(style)": { m: 1 } }}>
        <Fab size="small">
          <NavigateBeforeIcon onClick={() => prevPage()} />
        </Fab>
        <Fab color="primary">
          <Typography>{page}</Typography>
        </Fab>
        <Fab size="small">
          <NavigateNextIcon onClick={() => nextPage()} />
        </Fab>
      </Box>
    </Box>
  );
};

export default PageButton;
