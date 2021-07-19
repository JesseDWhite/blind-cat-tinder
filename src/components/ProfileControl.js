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
      return <><img src='https://media.giphy.com/media/3o7btYzX9GycbDy7bW/giphy.gif' width='200px' alt='cat with sunglasses'></img></>
    } else {
      return (
        <>
          <ul>
            {profiles.map((profile, index) =>
              <li key={index}>
                <h3>{profile.AnimalName}</h3>
                <p>{profile.AnimalType}</p>
                <p>{profile.Gender}</p>
                <p>{profile.Age}</p>
                <p>{profile.Description}</p>
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