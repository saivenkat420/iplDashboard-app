import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {values} = props
  const {id, name, teamImageUrl} = values
  const url = `/team-matches/${id}`
  return (
    <Link to={url} className="teamcard-contanier">
      <li className="teamcard-sub-contanier">
        <img src={teamImageUrl} alt={name} className="team-img" />
        <p className="team-name">{name}</p>
      </li>
    </Link>
  )
}

export default TeamCard
