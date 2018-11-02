import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import TextFieldGroup from '../common/TextFieldGroup.jsx';
import TextAreaFieldGroup from '../common/TextAreaFieldGroup.jsx';
import InputGroup from '../common/InputGroup.jsx';
import SelectListGroup from '../common/SelectListGroup.jsx';

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

    console.log('submit');
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { errors } = this.state;

    // Select options for status
    const options = [
      { label: '* Select Status', value: 0 },
      { label: 'Borrower', value: 'Borrower' },
      { label: 'Lender', value: 'Lender' },
      { label: 'Both', value: 'Both' },
    ];

    return (
      <div className="create-profile">
        <div className="container">
          <div className="row">
            <h1 className="display-4 text-center">Create Your Profile</h1>
            <p className="lead text-center">
              Lets get some information like what tools you have to share and where you are
            </p>
            <small className="d-block pb-3">* = required fields</small>
            <form onSubmit={this.onSubmit}>
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
                placeholder="* Profile Handle"
                name="handle"
                value={this.state.handle}
                onChange={this.onChange}
                error={errors.handle}
                info="A unique handle for your profile URL. Your full name, company name, nickname."
              />
              <TextFieldGroup
                placeholder="* Profile Handle"
                name="handle"
                value={this.state.handle}
                onChange={this.onChange}
                error={errors.handle}
                info="A unique handle for your profile URL. Your full name, company name, nickname."
              />
              <TextFieldGroup
                placeholder="* Profile Handle"
                name="handle"
                value={this.state.handle}
                onChange={this.onChange}
                error={errors.handle}
                info="A unique handle for your profile URL. Your full name, company name, nickname."
              />
              <TextFieldGroup
                placeholder="* Profile Handle"
                name="handle"
                value={this.state.handle}
                onChange={this.onChange}
                error={errors.handle}
                info="A unique handle for your profile URL. Your full name, company name, nickname."
              />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

CreateProfile.propTypes = {
  profile: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  profile: state.profile,
  errors: state.errors,
});

export default connect(mapStateToProps)(CreateProfile);
