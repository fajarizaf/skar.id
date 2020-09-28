import React, { Fragment, useState, useEffect } from 'react';
import '../../assets/css/App.css';

function Postdetail(props) {
  
  const slug = props.match.params.slug

  const [post, setPost] = useState([])

  useEffect(() => { 
    loadData()
  },[]);

  const loadData = async () => {
    const response =await fetch('http://localhost:4000/api/post/'+slug)
    const data = await response.json()
    setPost(data)
  }

  return (
    <Fragment>
        {
            post.map((key,value) => (
                <div className="main" key={value}>
                    <p style={{textAlign:"center",marginTop:40}} className="datepost">{key.datepost} - {key.authorpost}</p>
                    <h1 style={{textAlign:"center"}} className="font-1">{key.titlepost}</h1>
                    <div className="divider"></div>
                    <p className="paragraph">{key.contentpost}</p>
                </div>
            ))
        }
    </Fragment>
  );
}

export default Postdetail;
