export const UpvoteComponent = ({
  points,
  description,
  playerName,
  playerRating,
  setGameRewards,
  showDescription
}) => (
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      margin: "2px"
    }}
  >
    {showDescription && (
      <p style={{ fontSize: "0.5rem", fontWeight: "600" }}>{description}</p>
    )}
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "28px",
        height: "20px",
        padding: "4px",
        backgroundColor: playerRating === points ? "lightgreen" : "#eee",
        border: playerRating === points ? "2px solid black" : "1px solid #aaa",
        cursor: "pointer"
      }}
      onClick={() => {
        setGameRewards((pre) => {
          const includesPlayerAlready = pre.find(
            (r) => r.playerName === playerName
          );
          if (includesPlayerAlready) {
            return pre.map((r) =>
              r.playerName === playerName
                ? { playerName, playerRating: points }
                : r
            );
          } else {
            return [...pre, { playerName, playerRating: points }];
          }
        });
      }}
    >
      <p
        style={{
          fontSize: "1.1rem",
          color: playerRating === points ? "black" : "#aaa",
          fontWeight: playerRating === points ? "600" : "500"
        }}
      >
        {points > 0 ? `+${points}` : "X"}
      </p>
    </div>
  </div>
);
