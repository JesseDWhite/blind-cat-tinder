import React from 'react';
import PropTypes from 'prop-types';
import { Provider, LikeButton } from "@lyket/react";

function ProfileDetails(props) {
  const { profile } = props;

  return (
    <React.Fragment>
      <div className='profileCard'>
        <div className='card'>
          <img className='profilePicture' src={profile.profilePicture} width='350px' alt='profile'></img>
          <h2>{profile.animalName}</h2>
          <h4>{profile.gender} - {profile.age}</h4>
          <div className='card likeButton'>
            <Provider apiKey="acc0dbccce8e557db5ebbe6d605aaa">
              <LikeButton
                namespace="my-blog-post"
                id="how-to-beat-me-at-chess"
                component={LikeButton.templates.Twitter}
              />
            </Provider>
          </div>
          <div className='card'>
            <h4>Bio</h4>
            <p><em>{profile.description}</em></p>
            <button className='btn btn-danger' onClick={() => props.backToMainPage()}>Back To Main Page</button>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

ProfileDetails.propTypes = {
  profile: PropTypes.object
}

export default ProfileDetails;