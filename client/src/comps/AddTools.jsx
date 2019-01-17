import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import Dropzone from 'react-dropzone';

import TextFieldGroup from './common/TextFieldGroup.jsx';
import TextAreaFieldGroup from './common/TextAreaFieldGroup.jsx';
import ImageUploader from './common/ImageUploader.jsx';
import { saveTool } from '../actions/toolActions';
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
      photosPreview: [],
      photoCount: 0,
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
    };

    this.props.saveTool(tool, this.state.photos);
    // let tools = this.state.tools;
    // tools.push(tool);

    // this.setState({
    //   tools,
    //   name: '',
    //   description: '',j
    //   selectedFile: null,
    //   photos: null,
    //   toolCount: this.state.toolCount + 1,
    // });
  };

  onDrop = (acceptedFiles, rejectedFiles) => {
    const photoCount = this.state.photoCount + 1;
    const photos = [...this.state.photos, acceptedFiles[0]];

    const reader = new FileReader();
    reader.addEventListener(
      'load',
      () => {
        this.setState({
          photosPreview: [...this.state.photosPreview, reader.result],
          photos,
          photoCount,
        });
      },
      false
    );
    reader.readAsDataURL(acceptedFiles[0]);
  };

  render() {
    console.log(this.state);
    const { toolCount, tools } = this.state;
    const { photosPreview } = this.state;

    let toolInputs, toolImages;

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

    if (photosPreview.length > 0) {
      toolImages = photosPreview.map(imgSrc => {
        return (
          <div className="toolImgUploadThumb">
            <img src={imgSrc} />
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

                <div>
                  <p>Uploaded images...</p>
                  {toolImages}
                </div>

                <Dropzone onDrop={this.onDrop} multiple={false} maxSize={8000000}>
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

const mapDispatchToProps = dispatch => bindActionCreators({ saveTool }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(AddTools));
