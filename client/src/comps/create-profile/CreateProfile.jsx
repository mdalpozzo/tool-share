import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import TextFieldGroup from '../common/TextFieldGroup.jsx';
import TextAreaFieldGroup from '../common/TextAreaFieldGroup.jsx';
import InputGroup from '../common/InputGroup2.jsx';
import SelectListGroup from '../common/SelectListGroup.jsx';

import { createProfile } from '../../actions/profileActions';

class CreateProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displaySocialInputs: false,
      handle: '',
      location: '',
      status: '',
      tools: '',
      bio: '',
      youtube: '',
      twitter: '',
      facebook: '',
      linkedin: '',
      instagram: '',
      errors: {},
    };
  }

  onSubmit = e => {
    e.preventDefault();

    const newProfile = {
      handle: this.state.handle,
      location: this.state.location,
      status: this.state.status,
      tools: this.state.tools,
      bio: this.state.bio,
      social: {
        youtube: {
          type: this.state.youtube,
        },
        twitter: {
          type: this.state.twitter,
        },
        facebook: {
          type: this.state.facebook,
        },
        linkedin: {
          type: this.state.linkin,
        },
        instagram: {
          type: this.state.instagram,
        },
      },
    };

    this.props.createProfile(newProfile, this.props.history);
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { errors, displaySocialInputs } = this.state;

    let socialInputs;

    if (displaySocialInputs) {
      socialInputs = (
        <div>
          <InputGroup
            placeholder="Twitter Profile URL"
            name="twitter"
            icon="fab fa-twitter"
            value={this.state.twitter}
            onChange={this.onChange}
            error={errors.twitter}
          />
          <InputGroup
            placeholder="Facebook Profile URL"
            name="facebook"
            icon="fab fa-facebook"
            value={this.state.facebook}
            onChange={this.onChange}
            error={errors.facebook}
          />
          <InputGroup
            placeholder="Linkedin Profile URL"
            name="linkedin"
            icon="fab fa-linkedin"
            value={this.state.linkedin}
            onChange={this.onChange}
            error={errors.linkedin}
          />
          <InputGroup
            placeholder="Youtube Profile URL"
            name="youtube"
            icon="fab fa-youtube"
            value={this.state.youtube}
            onChange={this.onChange}
            error={errors.youtube}
          />
          <InputGroup
            placeholder="Instagram Profile URL"
            name="instagram"
            icon="fab fa-instagram"
            value={this.state.instagram}
            onChange={this.onChange}
            error={errors.instagram}
          />
        </div>
      );
    }

    // Select options for status
    const options = [
      { label: '* Select Status', value: 0 },
      { label: 'Borrower', value: 'Borrower' },
      { label: 'Lender', value: 'Lender' },
      { label: 'Both', value: 'Both' },
    ];

    return (
      <div className="create-profile">
        <div className="container-fluid">
          <div className="row text-center">
            <div className="col-md-6 m-auto">
              <h1 className="display-4 text-center">Create Your Profile</h1>
              <p className="lead text-center">
                Lets get some information like what tools you have to share and where you are
              </p>
              <p>
                <small className="d-block pb-3">* = required fields</small>
              </p>
              <form className="text-center" onSubmit={this.onSubmit}>
                <TextFieldGroup
                  placeholder="* Profile Handle"
                  name="handle"
                  value={this.state.handle}
                  onChange={this.onChange}
                  error={errors.handle}
                  info="A unique handle for your profile URL. Your full name, company name, nickname."
                />
                <SelectListGroup
                  placeholder="Status"
                  name="status"
                  value={this.state.status}
                  onChange={this.onChange}
                  options={options}
                  error={errors.status}
                  info="Are you borrowing, lending or both?"
                />
                <TextFieldGroup
                  placeholder="e.g. bend, oregon"
                  name="location"
                  value={this.state.location}
                  onChange={this.onChange}
                  error={errors.location}
                  info="Where are you located?"
                />
                <TextFieldGroup
                  placeholder="e.g. hammer, lawnmower, shovel..."
                  name="tools"
                  value={this.state.tools}
                  onChange={this.onChange}
                  error={errors.tools}
                  info="Tools you have to share."
                />
                <TextAreaFieldGroup
                  placeholder="a little bit about yourself here..."
                  name="bio"
                  value={this.state.bio}
                  onChange={this.onChange}
                  error={errors.bio}
                  info="A short bio about yourself."
                />

                <div className="mb-3">
                  <button
                    type="button"
                    onClick={() => {
                      this.setState(prevState => ({
                        displaySocialInputs: !prevState.displaySocialInputs,
                      }));
                    }}
                    className="btn btn-light"
                  >
                    Add Social Network Links
                  </button>
                  <span className="text-muted">Optional</span>
                </div>
                {socialInputs}
                <input type="submit" value="Submit" className="btn btn-info btn-block mt-4" />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

CreateProfile.propTypes = {
  createProfile: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  profile: state.profile,
  errors: state.errors,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      createProfile,
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(CreateProfile));
