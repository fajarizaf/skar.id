import React, { Fragment } from 'react';
import '../assets/css/App.css';

function Post() {
  return (
    <Fragment>
      <div className="main">
        <p className="datepost">31 Agustus 2020 - Fajar Riza Fauzi</p>
        <h1 className="font-1">Tutorial React Dalam Bahasa Indonesia</h1>
        <div className="divider"></div>
        <p className="paragraph">Hanya sebuah dokumentasi tertulis agar tidak lupa tentang hal yang sudah pernah saya pelajari. dan berusaha membagikanya bagi para pembaca.</p>
      </div>
    </Fragment>
  );
}

export default Post;
