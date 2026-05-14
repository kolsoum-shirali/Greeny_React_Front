import Rating from "@mui/material/Rating";

export default function BasicRating({ rateVal, isReadable, onRatingChange }) {
  const handleRatingChange = (event, newValue) => {
    if (onRatingChange) {
      onRatingChange(newValue);
    }
  };

  return (
    <div>
      <Rating
        value={rateVal}
        readOnly={isReadable}
        onChange={handleRatingChange}
      />
    </div>
  );
}
