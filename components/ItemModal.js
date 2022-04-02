import React, { useState } from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';

const ItemModal = ({ item }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
    display: "flex",
    justifyContent: "center",
    alignItem: "center",
  };
  const Modalstyle={
    display: "flex",
    flexDirection:"column",
    justifyContent: "space-evenly",
    alignItem: "center",
    p:4,
    width:'400px'
  }
  return (
    <>
    <Button onClick={handleOpen}>
    <img
        src={`${item.artworkUrl60.slice(0, -11).concat("200x200bb.jpg")}`}
        srcSet={`${item.artworkUrl60.slice(0, -11).concat("175x175bb.jpg")}`}
        alt={item.artistName}
        loading="lazy"
        id="images"
        />
    </Button>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
          <Box sx={style}>
            <img src={item.artworkUrl60.slice(0, -11).concat("400x400bb.jpg")} alt={item.artistName} />
            <Box sx={Modalstyle}>
              <Typography id="modal-modal-title" variant="h3">
                {item.collectionName}
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }} variant="subtitle1">
                {item.artistName}
              </Typography>
              <Typography variant="subtitle2">
                {item.primaryGenreName + ' · ' + item.releaseDate.slice(0, 4)}
              </Typography>
              <a href={`itms${item.collectionViewUrl.slice(5)}&app=itunes`}
              >
               <LibraryMusicIcon color="primary"  fontSize="large" />
              </a>
            </Box>
          </Box>
      </Modal>
    </>
  );
};

export default ItemModal;
