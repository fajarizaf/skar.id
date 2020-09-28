import React, { Fragment, useState, useEffect } from 'react';
import { Link } from "react-router-dom";    
import '../../assets/css/App.css';

function ListPost() {

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
        <Link to="/admin/add/post">
            <button className="btn-2">Create Post</button>
        </Link>
        {
            post.map((key,value) => (
              <div className="adminlist" key={value}>
                <div style={{width:'85%'}} className="row">
                    <h4 className="font-3">{key.titlepost}</h4>
                    <p className="font-3" style={{color:'#8e9095'}}>published : {key.datepost}</p>
                </div>
                <div style={{width:'15%'}} className="row">
                    <Link to={{pathname:'/admin/edit/post/'+key.slugpost}}>
                        <button style={{float:'right'}} className="btn-1">Sunting</button>
                    </Link>
                </div>
              </div>
            ))
        } 
      </div>
    </Fragment>
  );
}

export default ListPost;
