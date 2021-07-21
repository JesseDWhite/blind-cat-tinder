import React from 'react';
import PropTypes from 'prop-types';

function ProfileDetails(props) {
  const { profile } = props;

  return (
    <React.Fragment>
      <div>
        <img src={profile.profilePicture} width='350px' alt='profile'></img>
        <h2>{profile.animalName}</h2>
        <h4>{profile.gender} - {profile.age}</h4>
        <p>{profile.description}</p>
      </div>
      <button className='btn btn-danger' onClick={() => props.backToMainPage()}>Back To Main Page</button>
    </React.Fragment>
  )
}

ProfileDetails.propTypes = {
  profile: PropTypes.object
}

export default ProfileDetails;