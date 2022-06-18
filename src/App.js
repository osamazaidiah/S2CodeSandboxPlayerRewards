import { useState, useEffect } from "react";
import "./styles.css";
import { readDocOnceFromRoot } from "./components/firebase/readDocOnceFromRoot";
import AppLogo from "./components/appSkeleton/siteHeader/AppLogo";
import GameRewardsComponent from "./components/appPages/eventsPage/gameRewardsPage/GameRewardsComponent";

export default function App() {
  const closed = false;
  const [loading, setLoading] = useState(true);
  const [eventInformation, setEventInformation] = useState({});
  const docId = "event254";

  useEffect(() => {
    if (!closed) {
      readDocOnceFromRoot({
        collectionId: "SoccerMastersEventsCollection",
        docId: docId,
        setLoadingFunction: setLoading,
        updateObjectFunction: setEventInformation
      });
    }
  }, [closed]);

  if (closed)
    return (
      <div className="App">
        <section className="SiteHeader">
          <AppLogo />
        </section>
        <section className="MainContent">
          <h1>Voting is closed now. Play a game to rate.</h1>
        </section>
      </div>
    );

  if (loading)
    return (
      <div className="App">
        <section className="SiteHeader">
          <AppLogo />
        </section>
        <section className="MainContent">
          <h1>Loading... Please wait...</h1>
        </section>
      </div>
    );

  return (
    <div className="App">
      <section className="SiteHeader">
        <AppLogo />
      </section>
      <section className="MainContent">
        <GameRewardsComponent
          game={eventInformation}
          docId={docId}
          gameNumber={1}
        />
      </section>
    </div>
  );
}
