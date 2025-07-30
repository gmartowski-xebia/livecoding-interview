import React, { useEffect, useState, useCallback } from "react";
import { ItemCard } from "./ItemCard";
import { ShowMoreButton } from "./ShowMoreButton";
import { styled } from "@stitches/react";
import "./App.css";

/*
note: TS is in non-strict mode (feel free to turn it on)
*/

const StyledContainer = styled("section", {
    width: 600,
    maxWidth: "calc(100% - 20px)",
    margin: "0 auto",
    alignItems: "center",
    length: 0
});

const StyledItems = styled("section", {
    display: "grid",
    gridAutoFlow: "row",
    gap: 10,
    length: 0
});

export default function App() {
  const [items, setItems] = useState();

  const fetchItems = useCallback(async () => {
    // from https://dummyapi.io/explorer
    // example: https://dummyapi.io/data/v1/user?limit=X&page=Y

    const res = await fetch("https://dummyapi.io/data/v1/user", {
      headers: {
        "app-id": "61f80d074c512f3332831cbb"
      }
    }).then((r) => r.json());

    console.log(res);

    setItems(res.data.slice(0,10));
  }, []);

  useEffect(() => {
    fetchItems();
  }, [fetchItems]);

  return (
    <StyledContainer className="app">
      <h1>My Awesome Items</h1>
      <StyledItems>
        {items?.map((item, index) => (
          <ItemCard key={item.id} item={item} index={index} />
        ))}
      </StyledItems>
      <ShowMoreButton>Show more</ShowMoreButton>
    </StyledContainer>
  );
}
