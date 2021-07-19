import React from 'react';
import PropTypes from 'prop-types';
import ReusableForm from './ReusableForm';

function EditProfileForm(props) {
  const { profile } = props;
  const { animalType, animalName, gender, age, description } = e.target;

  function handleEditProfileFormSub(e) {
    e.preventDefault();
    props.onEditProfile({
      animalName: animalName.value,
      animalType: animalType.value,
      gender: gender.value,
      age: age.value,
      description: description.value,
      id: profile.id
    });
  }

  return (
    <React.Fragment>
      <ReusableForm
        formSubmissionHandler={handleEditProfileFormSub}
        buttonText="Update Profile" />
    </React.Fragment>
  );
}

EditProfileForm.propTypes = {
  profile: PropTypes.object,
  onEditProfile: PropTypes.func
}

export default EditProfileForm;