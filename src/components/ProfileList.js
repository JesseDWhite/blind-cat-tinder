import React from 'react';
import Profile from './Profile';
import PropTypes from 'prop-types';

function ProfileList(props) {
  const { profiles } = props
  return (
    <React.Fragment>
      {profiles.map((profile) =>
        <Profile
          // Every line below here is a prop (property) of the Profile component. You can define as many as you'd like, name them whatever you want, and pass whatever information you'd like down through it. 
          currentProfile={profile}
          likeProfile={props.likeProfile}
          viewProfile={props.viewProfile}
          animalName={profile.animalName}
          profilePicture={profile.profilePicture}
          animalType={profile.animalType}
          gender={profile.gender}
          age={profile.age}
          description={profile.description}
          animalId={profile.animalId}
          key={profile.animalId}
        />

      )}

    </React.Fragment>
  );
}

ProfileList.propTypes = {
  profileList: PropTypes.array,
  viewProfile: PropTypes.func,
  currentProfile: PropTypes.object,
  likeProfile: PropTypes.func
};

export default ProfileList;