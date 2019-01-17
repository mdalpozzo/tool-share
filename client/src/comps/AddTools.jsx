import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import Dropzone from 'react-dropzone';

import TextFieldGroup from './common/TextFieldGroup.jsx';
import TextAreaFieldGroup from './common/TextAreaFieldGroup.jsx';
import ImageUploader from './common/ImageUploader.jsx';
// import fs from require('fs');

class AddTools extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tools: [],
      name: '',
      description: '',
      toolCount: 0,
      selectedFile: null,
      photos: [],
      errors: {},
    };
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onChangeImage = e => {
    this.setState({
      selectedFile: e.target.files[0],
    });
  };

  addPhoto = () => {
    if (this.state.photos.length >= 4) {
    } else if (this.state.photos.length === 0) {
      const photos = new FormData();
      photos.append('img1', this.state.selectedFile, this.state.selectedFile.name);
      this.setState({
        photos: photos,
      });
    } else {
      const imgNum = this.state.photos.length + 1;
      const photos = this.state.photos.append(
        `img${imgNum}`,
        this.state.selectedFile,
        this.state.selectedFile.name
      );
      this.setState({
        photos: photos,
      });
    }
  };

  addTool = () => {
    const tool = {
      name: this.state.name,
      description: this.state.description,
      image: this.state.photos,
    };
    // let tools = this.state.tools;
    // tools.push(tool);

    // this.setState({
    //   tools,
    //   name: '',
    //   description: '',
    //   selectedFile: null,
    //   photos: null,
    //   toolCount: this.state.toolCount + 1,
    // });
  };

  onDrop = (acceptedFiles, rejectedFiles) => {};

  render() {
    console.log(this.state);
    const { toolCount, tools } = this.state;

    let toolInputs;

    if (toolCount > 0) {
      toolInputs = tools.map(tool => {
        return (
          <div className="card" style={{ width: '18rem', display: 'inline-block' }}>
            <img className="card-img-top" src="" alt="Card image cap" />
            <div className="card-body">
              <p className="card-text">{tool.name}</p>
              <p className="card-text">{tool.description}</p>
            </div>
          </div>
        );
      });
    }

    return (
      <div className="create-profile">
        <div className="container-fluid">
          <div className="row text-center">
            <div className="col-md-6 m-auto">
              <h1 className="display-4 text-center">Add Tools</h1>
              <p className="lead text-center">Tell us what tools you're lending</p>
              <p>
                <small className="d-block pb-3">* = required fields</small>
              </p>
              <form className="text-center" onSubmit={this.onSubmit}>
                {toolInputs}
                <TextFieldGroup
                  placeholder="e.g. hammer, lawnmower, shovel..."
                  name="name"
                  value={this.state.name}
                  onChange={this.onChange}
                  info="Toolname."
                />
                <TextFieldGroup
                  placeholder="12in hack saw... 21ft ladder..."
                  name="description"
                  value={this.state.description}
                  onChange={this.onChange}
                  info="Tool description."
                />

                <Dropzone onDrop={this.onDrop} multiple maxSize={8000000}>
                  {({ getRootProps, getInputProps }) => (
                    <div {...getRootProps()}>
                      <input {...getInputProps()} />
                      <p className="dropzone">Drag files here or click</p>
                    </div>
                  )}
                </Dropzone>

                <button type="button" onClick={this.addTool} className="btn btn-light">
                  Add More Tools
                </button>
                <input type="submit" value="Submit" className="btn btn-info btn-block mt-4" />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

AddTools.propTypes = {
  errors: PropTypes.object,
};

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(AddTools));
