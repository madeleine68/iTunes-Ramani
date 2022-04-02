import React from "react";
import ItemModal from "./ItemModal";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

const ItemList = ({ items }) => {
  const hoverStyle = {
    "&:hover": {
      transition: "transform 0.2s linear",
      transform: "scale(1.03)",
    },
    margin: "12px",
  };

  return (
    <Box sx={{ overflowY: "scroll" }} container spacing={2}>
      <Grid item>
        {items.map((item, id) => (
          <ImageListItem key={id} sx={hoverStyle}>
            <ItemModal item={item} />
            <ImageListItemBar
              title={item.artistName}
              subtitle={item.collectionName}
            />
          </ImageListItem>
        ))}
      </Grid>
    </Box>
  );
};

export default ItemList;
