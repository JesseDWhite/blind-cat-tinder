import React from 'react';
import PropTypes from 'prop-types';

function Profile(props) {
  return (
    <>
      <div className='profileCard'>
        <div className='card'>
          <img src={props.profilePicture} alt='profile' className='profilePicture'></img>
          <h2>{props.animalName}</h2>
          <h4>{props.gender} - Age {props.age}</h4>
          <h5>{props.animalType}</h5>
          <button className='btn btn-danger' onClick={() => props.viewProfile(props.currentProfile)}>View Profile</button>
        </div>
      </div>
    </>
  )
}

Profile.propTypes = {
  profilePicture: PropTypes.string,
  animalName: PropTypes.string,
  gender: PropTypes.string,
  age: PropTypes.number,
  animalId: PropTypes.number,
  viewProfile: PropTypes.func,
  currentProfile: PropTypes.object
}

export default Profile;