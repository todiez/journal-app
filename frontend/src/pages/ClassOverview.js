import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";

const ClassOverview = () => {
  const { data, isPending } = useFetch(process.env.REACT_APP_BACKEND_API);

  return (
    <div>
      <h2>Class Overview Component</h2>
      {isPending && <div>Loading...</div>}
      {data &&
        data.map((schoolClass) => (
          <div className="blog-preview" key={schoolClass._id}>
            <Link to={`/${schoolClass._id}`}>
              <h3>{schoolClass.className}</h3>
            </Link>
          </div>
        ))}
    </div>
  );
};

export default ClassOverview;
