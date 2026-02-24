import * as React from "react";
import Rating from "@mui/material/Rating";
export default function BasicRating() {
  const [value, setValue] = React.useState(5);
  return (
    <div>
      <Rating value={value} readOnly />
    </div>
  );
}
