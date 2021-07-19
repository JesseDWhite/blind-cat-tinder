import React from 'react';
import PropTypes from 'prop-types';

function Profile(props) {
  return (
    <>
      <div>
        <img src={props.profilePicture} width='350px' alt='profile picture'></img>
        <h2>{props.animalName}</h2>
        <h4>{props.gender} - {props.age}</h4>
        <button onClick={() => props.viewProfile(props.id)}>View Profile</button>
      </div>
    </>
  )
}

Profile.propTypes = {
  profilePicture: PropTypes.string,
  animalName: PropTypes.string,
  gender: PropTypes.string,
  age: PropTypes.number,
  description: PropTypes.string
}

export default Profile;