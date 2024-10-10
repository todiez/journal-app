const ClassDetail = () => {
 
  const { data: schoolClasses } = fetch("http://localhost:4000/api/classes");

  return (
    <div>
      <h2>Class Detail Component</h2>

      {/* {schoolClasses.map((schoolClass) => (
        <div className="blog-preview" key={schoolClasses._id}>
          <h3>
            {counter}. {schoolClass.className}
          </h3>
        </div>
      ))} */}
    </div>
  );
};

export default ClassDetail;
