import React, { useState, useEffect, useRef } from 'react';
import { Text } from 'react-native';
import * as FileSystem from 'expo-file-system';
import IPFS from 'ipfs-mini';

function dataURIToBlob(dataURI) {
  dataURI = dataURI.replace(/^data:/, '');

  const type = dataURI.match(/image\/[^;]+/);
  const base64 = dataURI.replace(/^[^,]+,/, '');
  const arrayBuffer = new ArrayBuffer(base64.length);
  const typedArray = new Uint8Array(arrayBuffer);

  for (let i = 0; i < base64.length; i++) {
      typedArray[i] = base64.charCodeAt(i);
  }

  return new Blob([arrayBuffer], {type});
}
class IpfsUpload extends React.Component {
  constructor(props) {
    super(props);
    this.state = { fn : props.source};
   }
  syncFile(fn) {
    const me = this;
    const ipfs = new IPFS();
    ipfs.setProvider({ host: 'ipfs.infura.io', port: 5001, protocol: 'https' });
    FileSystem.readAsStringAsync(fn,  
      { encoding: FileSystem.EncodingType.Base64 }).then((content) => {
   }).catch((err) => {
   })
  }
  componentDidUpdate (prevProps, prevState) {
    if (this.props.source !== prevProps.source) {
      this.setState({fn:this.props.source});
        
    }
    if (this.state.fn !== prevState.fn && !!this.state.fn) {
      this.syncFile(this.state.fn);
    }
    return true;
    if (!!this.state.fn) {
      this.syncFile(this.state.fn);
    }
  }
  componentDidMount () {
  }
  render() {
    return (<Text>{!this.state.fn ? '==' : ('Loading --26--' + this.state.fn)}</Text>)
  }
};
export default IpfsUpload;