import React from 'react';
import { connect } from 'react-redux';
import { makeApiCall } from '../actions';

class ProfileControl extends React.Component {
  constructor(props) {
    super(props)

  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(makeApiCall());
  }

  render() {
    const { error, isLoading, profiles } = this.props
    if (error) {
      return <>Error: {error.message}</>
    } else if (isLoading) {
      return <><img src='https://media.giphy.com/media/3o7btYzX9GycbDy7bW/giphy.gif' width='200px' alt='cat with sunglasses smoking'></img></>
      // Look up  Material UI or Semantic UI (React specifically)
    } else {
      return (
        <>
          <ul>
            {profiles.map((profile, animalId) =>
              <li key={animalId}>
                <img src={profile.profilePicture} width='250px' alt='animal profile picture' className='profilePicture'></img>
                <h3>{profile.animalName}</h3>
                <p>{profile.animalType}</p>
                <p>{profile.gender}</p>
                <p>{profile.age}</p>
                <p>{profile.description}</p>
              </li>
            )}
          </ul>
        </>
      )
    }
  }
}

const mapStateToProps = state => {
  return {
    profiles: state.profiles,
    isLoading: state.isLoading,
    error: state.error
  }
}

export default connect(mapStateToProps)(ProfileControl);