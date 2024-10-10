import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ClassOverview = () => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const url = "http://localhost:4000/api/classes";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setIsPending(false);
        setData(data);
      } catch {
        console.log("Fetch did not work");
      }
    };

    fetchData();
  }, []);

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
