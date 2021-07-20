import React from 'react';
import Profile from './Profile';
import PropTypes from 'prop-types';

function ProfileList(props) {
  const { profiles } = props
  return (
    <React.Fragment>
      {profiles.map((profile) =>
        <Profile
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
  viewProfile: PropTypes.func
};

export default ProfileList;