import './index.css'

const LatestMatch = props => {
  const {latestMatchDetails} = props
  const {
    competingTeam,
    competingTeamLogo,
    firstInnings,
    manOfTheMatch,
    secondInnings,
    date,
    result,
    umpires,
    venue,
  } = latestMatchDetails

  return (
    <div className="latestmatchdetails-container">
      <div className="latestMatchDetails-small-devices-container">
        <div className="latestmatchdetails-teamdetails-container">
          <p className="latestmatchdetails-competingteam">{competingTeam}</p>
          <p className="latestmatchdetails">{date}</p>
          <p className="latestmatchdetails">{venue}</p>
          <p className="latestmatchdetails">{result}</p>
        </div>
        <div className="latestmatchdetails-competingteam-logo">
          <img
            src={competingTeamLogo}
            className="competing-team-logo-img"
            alt={`latest match ${competingTeam}`}
          />
        </div>
      </div>
      <div className="latestmatchdetails-playersdetails-container">
        <h1 className="latestmatchdetails-playersdetails-head">
          First Innings
        </h1>
        <p className="latestmatchdetails-playersdetails-para">{firstInnings}</p>
        <h1 className="latestmatchdetails-playersdetails-head">
          Second Innings
        </h1>
        <p className="latestmatchdetails-playersdetails-para">
          {secondInnings}
        </p>
        <h1 className="latestmatchdetails-playersdetails-head">
          Man Of The Match
        </h1>
        <p className="latestmatchdetails-playersdetails-para">
          {manOfTheMatch}
        </p>
        <h1 className="latestmatchdetails-playersdetails-head">Umpires</h1>
        <p className="latestmatchdetails-playersdetails-para">{umpires}</p>
      </div>
    </div>
  )
}

export default LatestMatch
