import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import isEmpty from '../../validation/is-empty';

class LenderItem extends Component {
  render() {
    const { lender } = this.props;
    console.log(lender);
    return (
      <div className="card card-body bg-light mb-3">
        <div className="row">
          <div className="col-3">
            <img src={lender.user.avatar} alt="" className="rounded-circle" />
          </div>
          <div className="col-lg-6 col-md-4 col-8">
            <div className="row">
              <div className="col">
                <h3 className="align-text-bottom">{lender.user.name}</h3>
              </div>
              <div className="col">
                <p className="align-text-bottom">{lender.status}</p>
              </div>
              <div className="col">
                <p className="align-text-bottom">{lender.location}</p>
              </div>
              {/* <p>Tools for lending: {lender.tools}</p> */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LenderItem;
