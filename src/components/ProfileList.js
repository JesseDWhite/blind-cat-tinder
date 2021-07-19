import React from 'react';
import Profile from './Profile';
import PropTypes from 'prop-types';

function ProfileList(props) {
  return (
    <React.Fragment>
      {props.profileList.map((profile) =>
        <Profile
          whenProfileClicked={props.onProfileSelection}
          animalName={profile.animalName}
          animalType={profile.animalType}
          gender={profile.gender}
          age={profile.age}
          description={profile.description}
          id={profile.id}
          key={profile.id}
        />
      )}
    </React.Fragment>
  );
}

ProfileList.propTypes = {
  profileList: PropTypes.array,
};

export default ProfileList;