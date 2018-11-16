import React, { Component } from 'react';
import PropTypes from 'prop-types';

const ImageUploader = ({ onChange, onClick }) => (
  <div className="container">
    <div className="row">
      <input type="file" onChange={onChange} />
      <div className="col">
        <button onClick={onClick}>Upload File</button>
      </div>
    </div>
  </div>
);

export default ImageUploader;
