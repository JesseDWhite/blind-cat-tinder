import React from 'react';
import { connect } from 'react-redux';
import { makeApiCall } from '../actions';
import ProfileList from './ProfileList';
import ProfileDetails from './ProfileDetails';


class ProfileControl extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedProfile: null
    }
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(makeApiCall());
  }

  viewProfile(animalId) {
    const selectedProfile = this.props.profiles[animalId]
    this.setState({
      selectedProfile: selectedProfile
    });
  }

  render() {
    let currentlyVisibleState = null;
    const { error, isLoading } = this.props
    if (error) {
      return <>Error: {error.message}</>
    } else if (isLoading) {
      return <><img src='https://media.giphy.com/media/3o7btYzX9GycbDy7bW/giphy.gif' width='200px' alt='cat with sunglasses smoking'></img></>
      // Look up  Material UI or Semantic UI (React specifically)
    } else if (this.state.selectedProfile != null) {
      currentlyVisibleState =
        <ProfileDetails
        // profiles={this.props.selectedProfile}
        />;

    } else {
      currentlyVisibleState = <ProfileList
        profiles={this.props.profiles}
        viewProfile={this.viewProfile}
      />
      return (
        <>
          {currentlyVisibleState}
        </>
      )
    }
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