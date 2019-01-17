import React, { Component } from 'react';
import PropTypes from 'prop-types';

const ImageUploader = ({ onChange, onClick }) => (
  <div className="container">
    <div className="row">
      <input type="file" onChange={onChange} />
      <div className="col">
        <button type="button" onClick={onClick}>
          Add Photo
        </button>
      </div>
    </div>
  </div>
);

export default ImageUploader;
