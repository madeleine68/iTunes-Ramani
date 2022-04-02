import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import SearchBar from "material-ui-search-bar";
import Link from "@mui/material/Link";

const Header = ({ handleChange }) => {

  const style = {
    display: "flex",
    justifyContent: "space-between",
    alignItem: "center",
  }
  const [searchText, setSearchText] = useState("");

  const handleKeyup = (e) => {
    if (e.key === "Enter") {
      handleChange(searchText);
    }
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar sx={style}>
          <SearchBar
            placeholder="Search..."
            value={searchText}
            onChange={(e) => setSearchText(e)}
            onKeyUp={(e) => handleKeyup(e)}
          />
          <Link href='/about'>About</Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;