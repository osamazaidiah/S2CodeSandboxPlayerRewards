import { UpvoteComponent } from "./UpVoteComponent";

export const UpvotesRatings = ({
  playerName,
  index,
  playerRating,
  setGameRewards
}) => {
  return (
    <div
      style={{
        borderBlockEnd: "1px solid #aaa",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
      }}
    >
      <p style={{ fontSize: "0.9rem", fontWeight: "600" }}>
        {playerName} {playerRating > 0 && `(⭐ x ${playerRating})`}
      </p>
      <div style={{ display: "flex", flexDirection: "row", gap: "8px" }}>
        {playerRating > 0 && (
          <UpvoteComponent
            points={0}
            description="CANCEL"
            playerName={playerName}
            setGameRewards={setGameRewards}
            playerRating={playerRating}
            showDescription={index === 0}
          />
        )}
        <UpvoteComponent
          points={1}
          description="GOOD"
          playerName={playerName}
          setGameRewards={setGameRewards}
          playerRating={playerRating}
          showDescription={index === 0}
        />
        <UpvoteComponent
          points={2}
          description="GREAT"
          playerName={playerName}
          setGameRewards={setGameRewards}
          playerRating={playerRating}
          showDescription={index === 0}
        />
        <UpvoteComponent
          points={4}
          description="TOP"
          playerName={playerName}
          setGameRewards={setGameRewards}
          playerRating={playerRating}
          showDescription={index === 0}
        />
      </div>
    </div>
  );
};
