import React from "react";

function BotCard({ bot, clickEvent, dischargeBot, inArmy }) {
  const { id, name, health, damage, armor, bot_class, catchphrase, avatar_url } = bot;

  function handleClick() {
    clickEvent(bot);
  }

  function handleDischarge(e) {
    e.stopPropagation(); // Prevent the click from also enlisting/releasing the bot
    dischargeBot(bot);
  }

  // Different bot class colors
  const botClassColors = {
    Support: "#67c1f5",
    Medic: "#3cb371",
    Assault: "#ff6347",
    Defender: "#4169e1",
    Captain: "#daa520",
    Witch: "#9932cc",
  };

  return (
    <div className="bot-card" onClick={handleClick}>
      <div className="bot-card-header" style={{ backgroundColor: botClassColors[bot_class] || "#ccc" }}>
        <h3>{name}</h3>
        <span className="bot-class">{bot_class}</span>
      </div>
      <div className="bot-card-image">
        <img src={avatar_url} alt={name} />
      </div>
      <div className="bot-card-details">
        <div className="bot-stats">
          <div className="stat">
            <span className="stat-label">Health:</span>
            <span className="stat-value">{health}</span>
          </div>
          <div className="stat">
            <span className="stat-label">Damage:</span>
            <span className="stat-value">{damage}</span>
          </div>
          <div className="stat">
            <span className="stat-label">Armor:</span>
            <span className="stat-value">{armor}</span>
          </div>
        </div>
        <div className="catchphrase">
          <p>"{catchphrase}"</p>
        </div>
      </div>
      <button className="discharge-btn" onClick={handleDischarge}>x</button>
    </div>
  );
}

export default BotCard;
