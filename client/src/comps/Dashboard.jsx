import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCurrentProfile } from '../actions/profileActions';
import { getToolsByUser } from '../actions/toolActions';
import Spinner from './common/Spinner.jsx';

class Dashboard extends Component {
  componentDidMount() {
    this.props.getCurrentProfile();
    // this.props.getToolsByUser(this.props.auth.user.id);
  }

  render() {
    const { user } = this.props.auth;
    const { profile, loading } = this.props.profile;
    const { tools } = this.props.tool;

    let dashboardContent;

    if (profile === null || loading) {
      dashboardContent = <Spinner />;
    } else {
      // Check if logged in user has profile data and tools
      if (Object.keys(profile).length > 0 && tools !== null) {
        dashboardContent = (
          <div>
            <h4>TODO: DISPLAY PROFILE</h4>
            <Link to="/add-tools" className="btn btn-lg btn-info">
              Add Tools
            </Link>
          </div>
        );
      } else {
        // User has profile but no tools
        dashboardContent = (
          <div className="text-center">
            <p className="lead text=muted">Welcome {user.name}</p>
            <p>You don't have any tools for lending yet...</p>
            <Link to="/add-tools" className="btn btn-lg btn-info">
              Add Tools
            </Link>
          </div>
        );
      }
    }

    return (
      <div className="dashboard">
        <div className="container-fluid">
          <div className="row">
            <div className="container-fluid">
              <div className="col-md-12">{dashboardContent}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  profile: state.profile,
  auth: state.auth,
  tool: state.tool,
});

export default connect(
  mapStateToProps,
  { getCurrentProfile, getToolsByUser }
)(Dashboard);
