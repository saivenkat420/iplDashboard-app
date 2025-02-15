import {Component} from 'react'
import Loader from 'react-loader-spinner'
import TeamCard from '../TeamCard'
import './index.css'

class Home extends Component {
  state = {isLoading: true, teamsData: {}}

  componentDidMount = () => {
    this.getTeamsData()
  }

  getTeamsData = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    let data = await response.json()
    data = data.teams
    data = data.map(eachItem => ({
      teamImageUrl: eachItem.team_image_url,
      id: eachItem.id,
      name: eachItem.name,
    }))
    console.log(data)
    this.setState({isLoading: false, teamsData: data})
  }

  render() {
    const {teamsData, isLoading} = this.state
    return (
      <div className="home-container">
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          <>
            <div className="home-head-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
                alt="ipl logo"
                className="ipl-logo"
              />
              <h1 className="home-head">IPL Dashboard</h1>
            </div>
            <ul className="ipl-teams-container">
              {teamsData.map(eachItem => (
                <TeamCard key={eachItem.id} values={eachItem} />
              ))}
            </ul>
          </>
        )}
      </div>
    )
  }
}
// const Home = () => (
//
//
//   </div>
// )

export default Home
