import React from 'react'
import eren from './img/eren.png'
import jerry from './img/jerry.png'
import philip from './img/philip.png'

const Matches = ({ matchesData }) => (
  <div className="matches-container">
    {matchesData && matchesData.map(person => (
      <div className="matches-content">
        <div className="matches-profile">
          {person.name === 'Eren' && <img src={eren} className="eren-profile-pic" alt="eren-profile-pic" />}
          {person.name === 'Jerry' && <img src={jerry} className="jerry-match-profile-pic" alt="jerry-profile-pic" />}
          {person.name === 'Philip' && <img src={philip} className="philip-match-profile-pic" alt="philip-profile-pic" />}
          <p className="matches-name">{person.name}, {person.age}</p>
        </div>
          <p className="matches-des">{person.description}</p>
      </div>
    ))}
  </div>
)

export default Matches;
