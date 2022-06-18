import PlayerRewardsComponent from "./PlayerRewardsComponent";
import { UpvotesRatings } from "./UpVotesRatings";
export default function TeamRewardsComponent({
  teamPlayers,
  teamName,
  teamCaptain,
  gameRewards,
  setGameRewards
}) {
  return (
    <>
      <h4
        style={{
          padding: "10px 0px"
        }}
      >
        {teamName}
        <span style={{ fontSize: "smaller" }}>{teamCaptain}(C)</span>:
      </h4>

      {teamPlayers.map((player, i) => {
        const playerRatingsObject = gameRewards?.find(
          (r) => r.playerName === player
        );
        const rating = playerRatingsObject?.playerRating;
        return (
          <UpvotesRatings
            key={player}
            playerName={player}
            index={i}
            playerRating={rating}
            setGameRewards={setGameRewards}
          />
        );
      })}
    </>
  );
}
