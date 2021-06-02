import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import { useHistory } from "react-router-dom";
import { useState } from "react";

const BlogDetails = () => {
  const { id } = useParams();
  const history = useHistory();
  const [isPending, setIsPending] = useState(false);
  const { data, ispending, error } = useFetch(
    `http://localhost:8000/blogs/${id}`
  );

  const handleDelete = () => {
    setIsPending(true);
    fetch("http://localhost:8000/blogs/" + data.id, {
      method: "DELETE",
    }).then(() => {
      history.push("/");
      setIsPending(false);
    });
  };

  return (
    <div className="blog-details">
      {ispending && <div> Loading.... </div>} {error && <div> {error} </div>}
      {data && (
        <article>
          <p> Blog id is: {data.id} </p> <h2> {data.title} </h2>
          <p> Written By {data.author} </p> <div> {data.body} </div>
          {!isPending && <button onClick={handleDelete}> Delete </button>}
          {isPending && (
            <button onClick={handleDelete}> Deleting Now... </button>
          )}
        </article>
      )}
    </div>
  );
};

export default BlogDetails;
