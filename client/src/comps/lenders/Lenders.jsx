import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import Spinner from '../common/Spinner.jsx';
import { getProfileByTool, getAllLenders, searchStartedFalse } from '../../actions/profileActions';
import LenderItem from './LenderItem.jsx';

class Lenders extends Component {
  componentDidMount() {
    this.props.searchStartedFalse();
  }

  render() {
    let lenderItems;

    if (this.props.lenders === null || this.props.loading) {
      lenderItems = <Spinner />;
    } else {
      const { lenders } = this.props;
      if (lenders.length > 0) {
        lenderItems = lenders.map(lender => <LenderItem key={lender._id} lender={lender} />);
      } else {
        lenderItems = <h4>No lenders found...</h4>;
      }
    }
    return (
      <div className="lenders">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="display-4 text-center">Lender Profiles</h1>
              <p className="lead text-center">They just might have what you need</p>
              {lenderItems}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Lenders.propTypes = {
  getProfileByTool: PropTypes.func.isRequired,
  getAllLenders: PropTypes.func.isRequired,
  searchStartedFalse: PropTypes.func.isRequired,
  lenders: PropTypes.array.isRequired,
};

const mapStateToProps = state => ({
  lenders: state.profile.lenders,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getProfileByTool,
      getAllLenders,
      searchStartedFalse,
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Lenders);
