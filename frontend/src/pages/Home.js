import ClassList from "../components/ClassList";

const Home = () => {

  const schoolClasses = fetch("http://localhost:4000/api/classes")
  return (
    <div className="home">
      <h2>All Classes</h2>
      {schoolClasses && <ClassList schoolClasses={schoolClasses} pageTitle="All Classes from ClassList Component" />}
    </div>
  );
};

export default Home;
