import React from 'react';
import { CardDeck } from 'react-bootstrap';
import fakeBlogs from '../fakeData/fakeBlogs';
import SingleBlog from '../SingleBlog/SingleBlog';
import './Blog.css';
const Blog = () => {
  return (
    <section className='blog' id='blog'>
      <div className='container'>
      <div className=" text-center text-white mb-5">
                    <h5 style={{color:'#f9004d',letterSpacing:'2px', fontWeight:'bold'}}>Articles</h5>
                    <h1>Some of My Article</h1>
       </div>
        <CardDeck>
          {fakeBlogs.map(blog => (
            <SingleBlog key={blog.id} blog={blog} />
          ))}
        </CardDeck>
      </div>
    </section>
  );
};

export default Blog;
