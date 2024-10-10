import { Link } from "react-router-dom";

const ClassList = ({ schoolClasses, pageTitle }) => {
  // props object, passed down blogs are inside this object
  //and taken out of the object like the following or as a destructered object as done above
  // const blogs = props.blogs;
  // const title = props.title;

  //props in practice, just destructure and change the arrow function to
  // const BlogList = ({blogs, title})

  var counter = 1;

  return (
    <div className="blog-list">
      <h2>{pageTitle}</h2>
      {schoolClasses.map((schoolClass) => (
        <div className="blog-preview" key={counter++}>
          <Link to={`/classes/${counter}`}>
          {/* surrounding this by the link tag makes a link out of it due to JSX */}
          <h3>{counter}. {schoolClass.className}</h3>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ClassList;
