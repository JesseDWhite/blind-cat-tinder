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
      // selectedProfile: null
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

  // viewProfile = (animalProfile) => {
  //   console.log(animalProfile)
  //   // Instead, we could pass animalObject (profile itself) to this function instead of just the ID. Then below, we could set selectedProfile to equal that entire object, instead of accessing the `this.props.profiles` (<-- undefined?) state with our id. 
  //   // const selectedProfile = animalProfile // profile
  //   this.setState({
  //     selectedProfile: animalProfile
  //   });
  // }

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