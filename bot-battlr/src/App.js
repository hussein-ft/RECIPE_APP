import React, { useState, useEffect } from "react";
import BotCollection from "./components/BotCollection";
import YourBotArmy from "./components/YourBotArmy";
import "./App.css";

function App() {
  const [bots, setBots] = useState([]);
  const [yourBotArmy, setYourBotArmy] = useState([]);

  useEffect(() => {
    // Fetch bots when component mounts
    fetch("http://localhost:8001/bots")
      .then((response) => response.json())
      .then((data) => setBots(data))
      .catch((error) => console.error("Error fetching bots:", error));
  }, []);

  // Add bot to army
  const enlistBot = (bot) => {
    // Check if bot is already in army
    if (!yourBotArmy.find((enlistedBot) => enlistedBot.id === bot.id)) {
      setYourBotArmy([...yourBotArmy, bot]);
    }
  };

  // Remove bot from army
  const releaseBot = (bot) => {
    setYourBotArmy(yourBotArmy.filter((enlistedBot) => enlistedBot.id !== bot.id));
  };

  // Discharge bot (delete from backend and frontend)
  const dischargeBot = (bot) => {
    // Delete from backend
    fetch(`http://localhost:8001/bots/${bot.id}`, {
      method: "DELETE",
    })
      .then(() => {
        // Remove from army if present
        setYourBotArmy(yourBotArmy.filter((enlistedBot) => enlistedBot.id !== bot.id));
        // Remove from all bots
        setBots(bots.filter((b) => b.id !== bot.id));
      })
      .catch((error) => console.error("Error discharging bot:", error));
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Bot Battlr</h1>
        <h2>Build Your Bot Army!</h2>
      </header>
      <div className="main-content">
        <YourBotArmy
          bots={yourBotArmy}
          releaseBot={releaseBot}
          dischargeBot={dischargeBot}
        />
        <BotCollection
          bots={bots}
          enlistBot={enlistBot}
          dischargeBot={dischargeBot}
        />
      </div>
    </div>
  );
}

export default App;
