import { useParams } from "react-router-dom";
import { useState } from "react";
import useFetch from "../hooks/useFetch";

const ClassDetail = () => {
  // Extracting id from URL parameters:
  const { id } = useParams();
  const url = process.env.REACT_APP_BACKEND_API;

  const [note, setNote] = useState("");

  //useFetch custom hook
  const { data, isPending } = useFetch(url + id);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const noteObj = { classID: id, note };
    console.log(noteObj);

    try {
      const response = await fetch(url + "note", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(noteObj),
      });
      console.log(response);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      // Assuming the server returns JSON
      const json = await response.json();
      console.log("Success:", json);

      
    } catch (error) {
      console.error(
        "There was a problem with the fetch operation:",
        error.message
      );
    }
  };

  return (
    <div>
      {isPending && <div>Loading...</div>}
      {data && (
        <div className="blog-detail">
          <h2>{data.className}</h2>
          <p>Teacher: {data.classTeacher}</p>
          <p>Students: {data.studentCount}</p>
          <p>Timetable: {data.timetable}</p>
        </div>
      )}
      <div className="create" style={{ marginTop: "40px" }}>
        <h2>Eintrag hinzufügen</h2>
        <form onSubmit={handleSubmit} style={{ marginTop: "40px" }}>
          <textarea
            required
            value={note}
            onChange={(e) => setNote(e.target.value)}
          />
          {<button>Hinzufügen</button>}
        </form>
      </div>
    </div>
  );
};

export default ClassDetail;
