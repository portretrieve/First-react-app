import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {

    const [blogs, setBlogs] = useState([
      { title: 'My new website', body: 'lorem ipsum...', author: 'mario'},
      { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi'},
      { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario'},
      { title: 'Web react top tips', body: 'lorem ipsum...', author: 'chandler'}
    ]);
  
  return (
    <div className="home">
      <BlogList blogsArray = {blogs} title="All My Blogs!" />~
    </div>
  );
};

export default Home;
