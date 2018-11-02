import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import Spinner from '../common/Spinner.jsx';
import { getProfileTool, getAllLenders } from '../../actions/profileActions';
import LenderItem from './LenderItem.jsx';

class Lenders extends Component {
  componentDidMount() {
    this.props.getAllLenders();
  }

  render() {
    console.log(this.props);
    const { lenders, loading } = this.props.lenders;
    let lenderItems;

    if (lenders === null || loading) {
      lenderItems = <Spinner />;
    } else {
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
  getProfileTool: PropTypes.func.isRequired,
  getAllLenders: PropTypes.func.isRequired,
  lenders: PropTypes.array.isRequired,
};

const mapStateToProps = state => ({
  lenders: state.profile,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getProfileTool,
      getAllLenders,
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Lenders);
