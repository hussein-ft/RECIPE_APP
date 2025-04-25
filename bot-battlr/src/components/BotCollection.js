import React from "react";
import BotCard from "./BotCard";

function BotCollection({ bots, enlistBot, dischargeBot }) {
  return (
    <div className="bot-collection">
      <h2>Bot Collection</h2>
      <div className="bot-container">
        {bots.map((bot) => (
          <BotCard
            key={bot.id}
            bot={bot}
            clickEvent={enlistBot}
            dischargeBot={dischargeBot}
          />
        ))}
      </div>
    </div>
  );
}

export default BotCollection;
