import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
  const { data, ispending, error } = useFetch("http://localhost:8000/blogs");

  return (
    <div className="home">
      {error && <div> {error} </div>} {ispending && <div> Loading.... </div>}
      {data && <BlogList blogsArray={data} title="All My Blogs!" />}
    </div>
  );
};

export default Home;
