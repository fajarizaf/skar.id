import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './assets/css/App.css';
import Header from './components/Header';
import Home from './containers/Home'
import Post from './containers/Post'
import Postdetail from './containers/detail/Postdetail'
import Services from './containers/Services'
import Showcase from './containers/Showcase'

import ListPost from './containers/haslogin/ListPost'
import AddPost from './containers/haslogin/AddPost'
import EditPost from './containers/haslogin/EditPost'

function App() {
  return (
      <Router>
        <div className="body">
          <Header />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/post/:slug" component={Postdetail} />
            <Route path="/services" component={Services} />
            <Route path="/showcase" exact component={Showcase} />

            <Route path="/admin/add/post" exact component={AddPost} />
            <Route path="/admin/edit/post/:slug" exact component={EditPost} />
            <Route path="/admin/list/post" exact component={ListPost} />
          </Switch>
        </div>
      </Router>
  );
}

export default App;
