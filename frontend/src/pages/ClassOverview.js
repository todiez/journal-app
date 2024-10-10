import ClassDetail from "../components/ClassDetail";
import ClassList from "../components/ClassList";

const ClassOverview = () => {
  //const { data: schoolClasses } = fetch("http://localhost:4000/api/classes");

  const schoolClasses = [
    {
      className: "10A",
      classTeacher: "Mrs. Smith",
      studentCount: 30,
      timetable: "Monday to Friday, 8:00 AM - 3:00 PM",
    },
    {
      className: "9B",
      classTeacher: "Mr. Johnson",
      studentCount: 28,
      timetable: "Monday to Friday, 8:30 AM - 3:30 PM",
    },
    {
      className: "11C",
      classTeacher: "Ms. Garcia",
      studentCount: 25,
      timetable:
        "Monday, Wednesday, Friday: 9:00 AM - 4:00 PM; Tuesday, Thursday: 8:00 AM - 2:00 PM",
    },
    {
      className: "8D",
      classTeacher: "Mr. Lee",
      studentCount: 32,
      timetable:
        "Monday to Thursday, 7:45 AM - 2:45 PM; Friday: 7:45 AM - 1:00 PM",
    },
    {
      className: "7E",
      classTeacher: "Dr. Patel",
      studentCount: 29,
      timetable:
        "Daily, 9:00 AM - 4:00 PM with a break from 12:00 PM - 1:00 PM",
    },
  ];

  return (
    <div>
      {schoolClasses && (
        <ClassList
          schoolClasses={schoolClasses}
          pageTitle="All Classes from ClassList Component"
        />
      )}
    </div>
  );
};

export default ClassOverview;
