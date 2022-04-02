import React, { useState, useEffect } from "react";
import ItemList from "../components/ItemList";
import NoResult from "../components/NoResult";
import PageButton from "../components/PageButton";
import CircularProgress from "@mui/material/CircularProgress";
import Header from "../components/Header";

export default function Home() {

  const [searchText, setSearchText] = useState("");
  const [page, setPage] = useState(1);
  const [items, setItems] = useState([]);
  const [loadStatus, setLoadStatus] = useState("beforeLoad");
  const [countryCode, setCountryCode] = useState("CA");

  const handleChange = (searchText) => {
    setSearchText(searchText);
    setPage(1);
  };

  const nextPage = () => {
    setPage(page + 1);
  };

  const prevPage = () => {
    if (page !== 1) {
      setPage(page - 1);
    }
  };


  useEffect(() => {
    async function fetchCountryCode() {
      const response = await fetch(`https://ipapi.co/country`);
      const data = await response.text();
      setCountryCode(data);
    }
    fetchCountryCode().catch((error) => {
      console.log("Error: ", error);
    });
  }, []);

  useEffect(() => {
    if (searchText) {
      async function fetchItems() {
        const response = await fetch(
          `https://itunes.apple.com/search?term=${searchText}&entity=album&country=${countryCode}&limit=120&offset=${
            120 * (page - 1)
          }`
        );
        const data = await response.json();
        setItems(data.results);
        setLoadStatus("loaded");
      }
      setLoadStatus("loading");
    
      fetchItems().catch((error) => {
        console.log("Error: ", error);
      });
    }
  }, [searchText, page, countryCode]);
  return (
    <>
    <Header handleChange={handleChange} loadStatus={loadStatus}>
      {loadStatus === "loading" && <CircularProgress />}
    </Header>
    {loadStatus === "loaded" && !items.length && (
      <NoResult searchText={searchText} />
    )}
    {loadStatus !== "beforeLoad" && (
      <PageButton
        page={page}
        setPage={setPage}
        nextPage={nextPage}
        prevPage={prevPage}
      />
    )}
    {loadStatus === "loaded" && <ItemList items={items} />}
  </>
  )
}

