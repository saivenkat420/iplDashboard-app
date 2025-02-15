import {Component} from 'react'
import Loader from 'react-loader-spinner'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'
import './index.css'

class TeamMatches extends Component {
  state = {
    isLoading: true,
    teamsData: {teamBannerUrl: '', recentMatches: '', latestMatchDetails: ''},
  }

  componentDidMount = () => {
    this.getTeamDetails()
  }

  getTeamDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    let data = await response.json()
    data = {
      teamBannerUrl: data.team_banner_url,
      latestMatchDetails: data.latest_match_details,
      recentMatches: data.recent_matches,
    }
    data.latestMatchDetails = {
      competingTeam: data.latestMatchDetails.competing_team,
      competingTeamLogo: data.latestMatchDetails.competing_team_logo,
      firstInnings: data.latestMatchDetails.first_innings,
      manOfTheMatch: data.latestMatchDetails.man_of_the_match,
      matchStatus: data.latestMatchDetails.match_status,
      secondInnings: data.latestMatchDetails.second_innings,
      date: data.latestMatchDetails.date,
      id: data.latestMatchDetails.id,
      result: data.latestMatchDetails.result,
      umpires: data.latestMatchDetails.umpires,
      venue: data.latestMatchDetails.venue,
    }
    data.recentMatches = data.recentMatches.map(eachItem => ({
      competingTeam: eachItem.competing_team,
      competingTeamLogo: eachItem.competing_team_logo,
      firstInnings: eachItem.first_innings,
      manOfTheMatch: eachItem.man_of_the_match,
      matchStatus: eachItem.match_status,
      secondInnings: eachItem.second_innings,
      date: eachItem.date,
      id: eachItem.id,
      result: eachItem.result,
      umpires: eachItem.umpires,
      venue: eachItem.venue,
    }))
    this.setState({isLoading: false, teamsData: data})
  }

  render() {
    const {teamsData, isLoading} = this.state
    const {teamBannerUrl, recentMatches, latestMatchDetails} = teamsData
    const {match} = this.props
    const {params} = match
    const {id} = params
    return (
      <div className="team-matches-container" id={id}>
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="Oval" color="#000000" height={50} width={50} />
          </div>
        ) : (
          <>
            <img src={teamBannerUrl} alt="team banner" className="banner-img" />
            <p className="latest-match-head">Latest Matches</p>
            <LatestMatch latestMatchDetails={latestMatchDetails} />
            <ul className="matchcards-container">
              {recentMatches.map(eachItem => (
                <MatchCard key={eachItem.id} values={eachItem} />
              ))}
            </ul>
          </>
        )}
      </div>
    )
  }
}

export default TeamMatches
