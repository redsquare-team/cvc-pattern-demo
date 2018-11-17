import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';

import DefaultModal from "./modal/modal";

import { AppController } from "./App.context"
import PostModal from "./mymodals/postmodal";
import PostImgModal from "./mymodals/postimgmodal";
import PostList from "./mymodals/postlist"

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} style={{ width: 150 }} alt="logo" />
          <h1>Reactpress</h1>
          <AppController>
            <PostModal />
            <PostImgModal />
            <DefaultModal btnText="Help" btnClass="btn btn-primary"><center className="p-5">With this app you can post a text or an image</center></DefaultModal>
            <PostList />
          </AppController>
        </header>
      </div>
    );
  }
}

export default App;
