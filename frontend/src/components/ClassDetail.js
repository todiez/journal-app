import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const ClassDetail = () => {
  // Extracting id from URL parameters:
  const { id } = useParams();

  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);

  const url = "http://localhost:4000/api/classes/";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url + id);
        const data = await response.json();
        setIsPending(false);
        setData(data);
      } catch {
        console.log("Fetch did not work");
      }
    };

    fetchData();
  }, [id]);

  return (
    <div>
      <h2>Class Detail Component</h2>
      {isPending && <div>Loading...</div>}
      {data && (
        <div className="blog-detail">
          <h3>{data.className}</h3>
          <p>Teacher: {data.classTeacher}</p>
          <p>Students: {data.studentCount}</p>
          <p>Timetable: {data.timetable}</p>
        </div>
      )}
    </div>
  );
};

export default ClassDetail;
