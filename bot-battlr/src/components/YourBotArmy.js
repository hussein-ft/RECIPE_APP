import React from "react";
import BotCard from "./BotCard";

function YourBotArmy({ bots, releaseBot, dischargeBot }) {
  return (
    <div className="your-bot-army">
      <h2>Your Bot Army</h2>
      <div className="bot-army-container">
        {bots.length === 0 ? (
          <p>No bots in your army yet</p>
        ) : (
          bots.map((bot) => (
            <BotCard
              key={bot.id}
              bot={bot}
              clickEvent={releaseBot}
              dischargeBot={dischargeBot}
              inArmy={true}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default YourBotArmy;
