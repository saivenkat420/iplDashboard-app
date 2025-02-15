import './index.css'

const MatchCard = props => {
  const {values} = props
  const {competingTeam, competingTeamLogo, matchStatus, result} = values

  return (
    <li className="matchcard">
      <img
        src={competingTeamLogo}
        alt={`competing team ${competingTeam}`}
        className="matchcard-competingteamlogo"
      />
      <p className="matchcard-competingteam ">{competingTeam}</p>
      <p className="matchcard-result">{result}</p>
      <p
        className={`matchcard-matchStatus ${
          matchStatus === 'Won' ? 'won' : 'lost'
        }`}
      >
        {matchStatus}
      </p>
    </li>
  )
}

export default MatchCard
