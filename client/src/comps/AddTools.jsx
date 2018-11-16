import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import TextFieldGroup from './common/TextFieldGroup.jsx';
import TextAreaFieldGroup from './common/TextAreaFieldGroup.jsx';
import ImageUploader from './common/ImageUploader.jsx';

class AddTools extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tools: [],
      name: '',
      description: '',
      toolCount: 0,
      selectedFile: null,
      photoFD: null,
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
    console.log(this.state.selectedFile);
  };

  addPhoto = () => {
    const fd = new FormData();
    fd.append('image', this.state.selectedFile, this.state.selectedFile.name);
    console.log(fd);
    this.setState({
      photoFD: fd,
    });
  };

  addTool = () => {
    // const fd = new FormData();
    // fd.append('image', this.state.selectedFile, this.state.selectedFile.name);
    // console.log(fd);

    const tool = {
      name: this.state.name,
      description: this.state.description,
      // image: fd,
    };
    let tools = this.state.tools;
    tools.push(tool);

    this.setState({
      tools,
      name: '',
      description: '',
      selectedFile: null,
      photoFD: null,
      toolCount: this.state.toolCount + 1,
    });
  };

  render() {
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
              <h1 className="display-4 text-center">Create Your Profile</h1>
              <p className="lead text-center">
                Lets get some information like what tools you have to share and where you are
              </p>
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
                <ImageUploader onChange={this.onChangeImage} />
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
