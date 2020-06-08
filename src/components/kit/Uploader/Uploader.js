// @flow

import React, { Component } from 'react';
import { Card } from '../';
import FileInput from './FileInput';
import UploaderPhoto from "./UploaderPhoto";
import AddUploaderPhoto from "./AddUploaderPhoto";

type Props = {
  value?: Number,
  text?: String,
  handleUploadFile: Function,
  handleRemoveFile: Function
};

export default class Uploader extends Component<Props> {

  static defaultProps = {
    value: '',
    text: 'uploader.choosePicture'
  };

  state = {
    file: null,
    src: null,
    imageSrc: this.props.value,
    showProgress: false
  };

  handleFile = () => this._fileInput.click();

  setFile = e => {
    let reader = new FileReader();
    reader.onloadend = () => {
      this.setState({
        src: reader.result
      });
    };
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }

    this.setState({
      file: e.target.files[0],
      showProgress: true
    }, () => this.props.handleUploadFile(this.state.file));
  };

  removeFile = () => {
    this.setState(
      {
        file: null,
        showProgress: false
      },
      () => {
        this._fileInput.value = '';
        this.props.handleRemoveFile();
      });
  };

  removeFileSrc = () => {
    this.setState({
      imageSrc: ""
    })
  };

  render() {
    const { text } = this.props;
    const { file, src, imageSrc } = this.state;
    const wrapperPadding = file ? '' : 'px-5';

    return (
      <Card
        hasBorder
        type="white"
        className={`position-relative w-max overflow-hidden ${wrapperPadding}`}
        hasAnimation={false}
      >
        {
          file ?
            <UploaderPhoto src={src} onRemovePhoto={this.removeFile}/> : imageSrc.length ?
            <UploaderPhoto src={imageSrc} onRemovePhoto={this.removeFileSrc}/> :
            <AddUploaderPhoto onAdd={this.handleFile} addText={text}/>
        }
        <FileInput type="file" ref={ref => this._fileInput = ref} onChange={this.setFile}/>
      </Card>
    );
  }
}
