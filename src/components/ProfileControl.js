import React from 'react';
import { connect } from 'react-redux';
import { makeApiCall } from '../actions';
import ProfileList from './ProfileList';
import ProfileDetails from './ProfileDetails';
import * as a from '../actions';

class ProfileControl extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(makeApiCall());
  }

  viewProfile = (animalProfile) => {
    console.log(animalProfile)
    const { dispatch } = this.props;
    const action = a.getProfile(animalProfile);
    dispatch(action);
  }

  backToMainPage = () => {
    const { dispatch } = this.props;
    const action = a.backToMainPage();
    dispatch(action);
  }

  likeProfile = () => {
    const { dispatch } = this.props;
    const action = a.likeProfile();
    dispatch(action);
  }

  render() {
    let currentlyVisibleState = null;
    const { error, isLoading, selectedProfile, profiles } = this.props
    if (error) {
      return <>Error: {error.message}</>
    } else if (isLoading) {
      return <><img src='https://media.giphy.com/media/3o7btYzX9GycbDy7bW/giphy.gif' width='200px' alt='cat with sunglasses smoking'></img></>
      // Look up  Material UI or Semantic UI (React specifically)
    } else if (selectedProfile != null) {
      currentlyVisibleState =
        <ProfileDetails
          profile={selectedProfile}
          backToMainPage={this.backToMainPage}
          likeProfile={this.likeProfile}
        />;

    } else if (selectedProfile == null) {
      currentlyVisibleState = <ProfileList
        profiles={profiles}
        viewProfile={this.viewProfile}
      />
    }
    return (
      <>
        {currentlyVisibleState}
      </>
    )
  }
}


const mapStateToProps = state => {
  return {
    profiles: state.profiles,
    isLoading: state.isLoading,
    error: state.error,
    selectedProfile: state.selectedProfile
  }
}

export default connect(mapStateToProps)(ProfileControl);