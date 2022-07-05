import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Bloglist from './Bloglist';
import AddBlog from './AddBlog';
import Editblog from './Editblog';
import { useEffect, useState } from 'react';
import { Redirect, Route } from 'react-router-dom';
import BlogSingle from './BlogSingle';
import Home from './Home';
import Deleteblog from './Deleteblog';
function App() {
  const [blog,setBlog]= useState([])
  useEffect(() =>{
    fetch("http://localhost:5600/",
    {  
       method: "get",
       headers: new Headers({'content-type': 'application/json'}),
       async: true
  })
  .then(function(response) {
    return response.text()
 }).then(function(text) {
  setBlog(JSON.parse(text));
 });
}, []);

function onAddBlog(event){
  event.preventDefault();
  let blogTitle = document.getElementById('title').value;
  let blogDescription = document.getElementById('description').value;
  let blogImage = document.getElementById('imgUrl').value;
  let blogAuthor = document.getElementById('author').value;
  if(blogTitle==="" || blogDescription==="" || blogImage==="" || blogAuthor===""){
      document.getElementsById('title').classList.add("error")
      return;
  }
  const blogData={
      "id": Math.random(),
  "imgurl":  blogImage,
  "title":  blogTitle,
  "description": blogDescription,
  "author": {
      "authorid": 2,
      "imgUrl": " ",
      "name": blogAuthor,
      "date":"11-02-1998"
      }
  }
  console.log(blogData);
  try {
    console.log("dhjgjhdsgjhgsafjhc")
    fetch("http://localhost:5600/save",
    {  
       method: "POST",
       headers: new Headers({'content-type': 'application/json'}),
       body: JSON.stringify(blogData),
    })
    .then(function(response) {
       return response.text()
    }).then(function(text) {
       console.log(text)
    });
   
 } catch (err) {
    alert(err);
 }
  setBlog((previousBlog) => {
    //let b=previousBlog.filter(e => e.id === blogData.id);
    //b.forEach(f => previousBlog.spliceBlog.splice(previousBlog.findIndex(e => e.id)))
    
    return [...previousBlog,blogData]
    
  })
  console.log(blog)
    

}
function onEditblog(event){
  event.preventDefault();
  let blogTitle = document.getElementById('title').value;
  let blogDescription = document.getElementById('description').value;
  let blogImage = document.getElementById('imgUrl').value;
  let blogAuthor = document.getElementById('author').value;
  let blog_id=document.getElementById('blogid').value;
  console.log(blog_id)
  if(blogTitle==="" || blogDescription==="" || blogImage==="" || blogAuthor===""){
      document.getElementsById('title').classList.add("error")
      return;
  }
  const blogData={
      "_id": blog_id,
  "imgurl":  blogImage,
  "title":  blogTitle,
  "description": blogDescription,
  "author": {
      "authorid": 2,
      "imgUrl": " ",
      "name": blogAuthor,
      "date":"11-02-1998"
      }
  }
  console.log(blogData);
  try {
    console.log("dhjgjhdsgjhgsafjhc")
    fetch("http://localhost:5600/edit",
    {  
       method: "POST",
       headers: new Headers({'content-type': 'application/json'}),
       body: JSON.stringify(blogData),
    })
    .then(function(response) {
       return response.text()
    }).then(function(text) {
       console.log(text)
    });
   
 } catch (err) {
    alert(err);
 }
  setBlog((previousBlog) => {
    //let b=previousBlog.filter(e => e.id === blogData.id);
    //b.forEach(f => previousBlog.spliceBlog.splice(previousBlog.findIndex(e => e.id)))
    
    return [...previousBlog,blogData]
    
  })
  console.log(blog)
    
}
function onDeleteblog(event){
  event.preventDefault();
  let blog_id=document.getElementById('blogid').value;
  console.log(blog_id)

  const blogData={
      "_id": blog_id
  }
  console.log(blogData);
  try {
    console.log("dhjgjhdsgjhgsafjhc")
    fetch("http://localhost:5600/delete",
    {  
       method: "POST",
       headers: new Headers({'content-type': 'application/json'}),
       body: JSON.stringify(blogData),
    })
    .then(function(response) {
       return response.text()
    }).then(function(text) {
       console.log(text)
    });
   
 } catch (err) {
    alert(err);
 }
  setBlog((previousBlog) => {
    //let b=previousBlog.filter(e => e.id === blogData.id);
    //b.forEach(f => previousBlog.spliceBlog.splice(previousBlog.findIndex(e => e.id)))
    
    return [...previousBlog,blogData]
    
  })
  console.log(blog)
    
}


  return (
    <div className="App">
      <Header></Header>
      <Route exact path='/'>
        <Redirect to='/home'/>
      </Route>
      <Route path='/home'>
        <Home></Home>
      </Route>
      <Route path='/blogList'>
      <Bloglist blogData={blog}></Bloglist>
      </Route>
      <Route path='/addBlog'>
         <AddBlog onFormSubmitHandler={onAddBlog}></AddBlog>
      </Route>
      <Route path='/singleBlog/:blogId'>
        <BlogSingle blogData={blog}></BlogSingle>
      </Route>
      <Route path='/Editblog/:blogId'>
        <Editblog onEdit={onEditblog} blogData={blog}></Editblog>
      </Route>
      <Route path='/Deleteblog/:blogId'>
        <Deleteblog onDelete={onDeleteblog} blogData={blog}></Deleteblog>
      </Route>
      {/*<header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>*/}
    </div>
  );
}

export default App;
