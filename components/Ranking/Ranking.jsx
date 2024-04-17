import react from "react";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import dataMusician from "../../objects/musicianObject.json";

export default function Ranking() {
  const { users } = dataMusician;
  return (
    <div className="flex items-center">
      <Rating
        style={{ maxWidth: 100 }}
        value={users.ranking}
        max={5}
        readOnly
        size={24}
        colorEmpty="#000"
        colorFilled="#FFD700"
      />
      <div className="ml-2 text-black">{users.ranking}</div>
    </div>
  );
}

//<Rating style={{ maxWidth: 100 }} value={users.ranking} readOnly />;
