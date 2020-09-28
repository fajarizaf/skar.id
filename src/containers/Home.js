import React, { Fragment, useState, useEffect  } from 'react';
import { Link } from "react-router-dom";
import '../assets/css/App.css';
import '../assets/css/Font.css';

function Home() {

  const [post, setPost] = useState([]);

  useEffect(() => { 
    loadData()
  },[]);

  const loadData = async () => {
    const response =await fetch('http://localhost:4000/api/post/')
    const data = await response.json()
    setPost(data)
  }

  return (
    <Fragment>
      <div className="main">
        <h1 className="font-1">Tutorial React Dalam Bahasa Indonesia</h1>
        <h3 className="font-3">Hanya sebuah dokumentasi tertulis agar tidak lupa tentang hal yang sudah pernah saya pelajari. dan berusaha membagikanya bagi para pembaca.</h3>
        <div className="divider"></div>
        <div className="post">
          {
            post.map((key,value) => (
              <div className="postitem" key={value}>
                <p className="datepost">{key.datepost}</p> 
                <Link to={{pathname:'post/'+key.slugpost}}><h4 className="font-4">{key.titlepost}</h4></Link> 
              </div>
            ))
          }
        </div>
      </div>
    </Fragment>
  );
}

export default Home;
