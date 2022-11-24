import React from 'react';
import {useState, useEffect } from "react";
import './fetch.css'

// `http://213.131.37.250:3001/users`


function Fetch() {
  const [posts, setPosts] = useState([]);
  const fetchPosts = () => {
    fetch(`http://192.168.0.249:3000/users`).then(response => response.json()).then((json) => setPosts(json));
  }
  useEffect(() => {
fetchPosts();
  },[])
  
  return (
<div id='test'>
    <label>Compny List</label>
  <select>
   {
    posts.map((post, index) => 
    <option key={index} id="post">
          {post.id} {post.company} 
    </option>
    )
   }
   </select>
   <form>
   <input type="text" placeholder='შეიყვანეთ კომნიის დასახელება' id='inputCompany'/>
   <input type="submit" value="add Company" id='new-company-add'/>
   </form>
   
   
</div>
  );
}

export default Fetch;