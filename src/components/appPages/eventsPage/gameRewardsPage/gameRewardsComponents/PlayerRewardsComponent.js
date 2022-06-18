import { useState, useEffect } from "react";
import StarRating from "./StarRating";
export default function PlayerRewardsComponent({
  playerName,
  updateTeamRewards = (f) => f
}) {
  const [playerRating, setPlayerRating] = useState(0);
  return (
    <div className="playerRatingComponent">
      {playerName} ⭐x{playerRating}
      <StarRating returnSelectedStars={setPlayerRating} />
    </div>
  );
}
