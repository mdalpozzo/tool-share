import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {} from '../actions/actions';
// import ControlledCarousel from './banners/ControlledCarousel.jsx';
import TextFieldGroup from './common/TextFieldGroup.jsx';
import { getProfileByTool, getAllLenders } from '../actions/profileActions';

class Landing extends Component {
  constructor() {
    super();
    this.state = {
      query: '',
      location: '',
      results: '',
      errors: {},
    };
  }

  componentWillMount() {}

  componentDidMount() {}

  componentWillReceiveProps(nextProps) {
    console.log(nextProps.profile);
    // maybe instead if areSearchResultsStale false then show results page/lenders results
    if (nextProps.profile.searchStarted) {
      this.props.history.push('/lenders');
    }
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    if (this.state.query === '') {
      this.props.getAllLenders();
    } else {
      this.props.getProfileByTool(this.state.query, this.state.location);
    }
  };

  seeAll = () => {
    this.props.getAllLenders();
  };

  render() {
    const { errors } = this.state;

    // if (this.state.lenders) {
    //   return (
    //     <div className="landing">
    //       <div className="container-fluid">
    //         <div className="row">
    //           <div className="container-fluid">
    //             <h1>HELLO</h1>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   );
    // } else {
    return (
      <div className="landing">
        <div className="container-fluid">
          <div className="row">
            <div className="container-fluid landing-inner">
              <div className="col-lg-6 main-search">
                <h1 className="display-3 text-center">Tool Share</h1>
                <p className="lead text-center">You need it, your neighbor's got it</p>
                {/* pull this out into a search component.  create a search page with lenders comonent and search comp */}
                <form className="text-center" onSubmit={this.onSubmit}>
                  <TextFieldGroup
                    placeholder="What do you need?"
                    name="query"
                    type="text"
                    value={this.state.query}
                    onChange={this.onChange}
                    error={errors.email}
                  />
                  <TextFieldGroup
                    placeholder="Where are you?"
                    name="location"
                    type="text"
                    value={this.state.location}
                    onChange={this.onChange}
                    error={errors.password}
                  />
                  <input type="submit" value="Search" className="btn btn-info" />
                </form>
                <input
                  value="See All Lenders"
                  type="button"
                  onClick={this.seeAll}
                  className="btn btn-info"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
    // }
  }
}

Landing.propTypes = {
  getProfileByTool: PropTypes.func.isRequired,
  getAllLenders: PropTypes.func.isRequired,
  // errors: PropTypes.object.isRequired,
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getProfileByTool,
      getAllLenders,
    },
    dispatch
  );

const mapStateToProps = state => ({
  profile: state.profile,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Landing);
