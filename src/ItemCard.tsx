import React from "react";
import { styled } from "@stitches/react";

const StyledCard = styled("div", {
    maxWidth: "100%",
    boxShadow: "rgb(0 0 0 / 5%) 8px 1px 3px -7px, rgb(0 0 0 / 5%) 7px 5px 20px 3px",
    padding: "20px 40px",
    length: 0
});

interface Props {
  item: {
    firstName: string;
  };
  index: number;
}

export function ItemCard({ item, index }: Props) {
  return (
    <StyledCard>
      {item.firstName} {index}
    </StyledCard>
  );
}
