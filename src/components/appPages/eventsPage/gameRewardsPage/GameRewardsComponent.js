import { useState } from "react";
import TeamRewardsComponent from "./gameRewardsComponents/TeamRewardsComponentv2";
import setDocWithIdInFirestore from "../../../firebase/setDocumentWithIdInFirestore";

export default function GameRewardsComponent({ game, docId, gameNumber }) {
  const { eventName, eventNumber, eventGames } = game;

  const [gameRewards, setGameRewards] = useState([]);
  const updateGameRewards = () => {
    setDocWithIdInFirestore({
      collectionId: "SoccerMastersEventsCollection",
      docId: docId,
      document: {
        rewards: {
          [raterName]: {
            gameRewards,
            gameNumber,
            ratedAtTime: new Date().getTime()
          }
        }
      }
    }).then(() => setSaveStatus(true));
  };

  const [saveStatus, setSaveStatus] = useState(false);

  const [raterName, setRaterName] = useState("");

  if (saveStatus) return <p>Thank you, your response has been submitted.</p>;

  return (
    <>
      <h2>
        {eventName} #{eventNumber}
      </h2>
      {/* Area to enter rater's name for control purposes */}
      <label htmlFor="user">
        Please enter your name:
        <input
          type="text"
          value={raterName}
          onChange={(e) => setRaterName(e.target.value)}
        />
      </label>
      <br />
      <h3>Reward the players that have done well in today's game:</h3>

      {eventGames[0]?.gameTeams.map((game, index) => {
        const teamPlayers = game.teamPlayers.reduce(
          (acc, p) => [...acc, p.playerName],
          []
        );
        return (
          <TeamRewardsComponent
            key={game.teamName + index}
            teamPlayers={teamPlayers}
            teamName={game.teamName}
            teamCaptain={game.teamCaptain}
            setGameRewards={setGameRewards}
            gameRewards={gameRewards}
          />
        );
      })}

      <hr />

      {raterName && gameRewards && gameRewards.length !== 0 ? (
        <div
          onClick={updateGameRewards}
          className="usableButton"
          style={{ textAlign: "center", margin: "10px auto" }}
        >
          Submit
        </div>
      ) : (
        <p className="alert">
          You must enter your name and rate someone to submit
        </p>
      )}
    </>
  );
}
