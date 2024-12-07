// const employees = [
//   {
//     id: 1,
//     firstName: "Aarav",
//     email: "employee1@example.com",
//     password: "123",
//     taskCount: {
//       active: 2,
//       newTask: 1,
//       completed: 1,
//       failed: 0,
//     },
//     tasks: [
//       {
//         active: true,
//         newTask: true,
//         completed: false,
//         failed: false,
//         taskTitle: "Complete Project Report",
//         taskDescription:
//           "Finish the final report for the project due this week.",
//         category: "Work",
//         taskDate: "2024-12-10",
//       },
//       {
//         active: true,
//         newTask: false,
//         completed: true,
//         failed: false,
//         taskTitle: "Team Meeting",
//         taskDescription: "Attend the weekly team sync meeting.",
//         category: "Work",
//         taskDate: "2024-12-08",
//       },
//       {
//         active: false,
//         newTask: true,
//         completed: false,
//         failed: true,
//         taskTitle: "Update Resume",
//         taskDescription: "Revise the CV to include recent achievements.",
//         category: "Personal",
//         taskDate: "2024-12-07",
//       },
//     ],
//   },
//   {
//     id: 2,
//     firstName: "Anaya",
//     email: "employee2@example.com",
//     password: "123",
//     taskCount: {
//       active: 2,
//       newTask: 1,
//       completed: 1,
//       failed: 0,
//     },
//     tasks: [
//       {
//         active: true,
//         newTask: true,
//         completed: false,
//         failed: false,
//         taskTitle: "Client Call",
//         taskDescription: "Schedule and participate in a call with the client.",
//         category: "Work",
//         taskDate: "2024-12-09",
//       },
//       {
//         active: false,
//         newTask: false,
//         completed: true,
//         failed: false,
//         taskTitle: "Submit Expense Report",
//         taskDescription: "Submit the monthly expense report to finance.",
//         category: "Work",
//         taskDate: "2024-12-05",
//       },
//       {
//         active: true,
//         newTask: false,
//         completed: false,
//         failed: false,
//         taskTitle: "Read New Industry Article",
//         taskDescription: "Read an article on recent trends in the industry.",
//         category: "Education",
//         taskDate: "2024-12-11",
//       },
//     ],
//   },
//   {
//     id: 3,
//     firstName: "Ishaan",
//     email: "employee3@example.com",
//     password: "123",
//     taskCount: {
//       active: 2,
//       newTask: 1,
//       completed: 1,
//       failed: 0,
//     },
//     tasks: [
//       {
//         active: true,
//         newTask: true,
//         completed: false,
//         failed: false,
//         taskTitle: "Prepare Presentation",
//         taskDescription: "Create slides for the upcoming presentation.",
//         category: "Work",
//         taskDate: "2024-12-10",
//       },
//       {
//         active: true,
//         newTask: false,
//         completed: true,
//         failed: false,
//         taskTitle: "Weekly Review",
//         taskDescription: "Review weekly goals and prepare for the next week.",
//         category: "Work",
//         taskDate: "2024-12-07",
//       },
//     ],
//   },
//   {
//     id: 4,
//     firstName: "Diya",
//     email: "employee4@example.com",
//     password: "123",
//     taskCount: {
//       active: 2,
//       newTask: 1,
//       completed: 1,
//       failed: 0,
//     },
//     tasks: [
//       {
//         active: true,
//         newTask: true,
//         completed: false,
//         failed: false,
//         taskTitle: "Team Brainstorming Session",
//         taskDescription:
//           "Participate in the team brainstorming session for project ideas.",
//         category: "Work",
//         taskDate: "2024-12-12",
//       },
//       {
//         active: false,
//         newTask: false,
//         completed: true,
//         failed: false,
//         taskTitle: "Fitness Routine",
//         taskDescription: "Complete the weekly fitness routine.",
//         category: "Personal",
//         taskDate: "2024-12-06",
//       },
//       {
//         active: true,
//         newTask: false,
//         completed: false,
//         failed: false,
//         taskTitle: "Schedule Doctor's Appointment",
//         taskDescription:
//           "Book an appointment with the doctor for a routine check-up.",
//         category: "Personal",
//         taskDate: "2024-12-09",
//       },
//     ],
//   },
//   {
//     id: 5,
//     firstName: "Vivaan",
//     email: "employee5@example.com",
//     password: "123",
//     taskCount: {
//       active: 2,
//       newTask: 1,
//       completed: 0,
//       failed: 0,
//     },
//     tasks: [
//       {
//         active: true,
//         newTask: true,
//         completed: false,
//         failed: false,
//         taskTitle: "Complete Task Documentation",
//         taskDescription: "Document the completed tasks for the current sprint.",
//         category: "Work",
//         taskDate: "2024-12-08",
//       },
//       {
//         active: true,
//         newTask: false,
//         completed: false,
//         failed: false,
//         taskTitle: "Plan Weekend Trip",
//         taskDescription: "Plan the details for the upcoming weekend trip.",
//         category: "Personal",
//         taskDate: "2024-12-13",
//       },
//     ],
//   },
// ];

// const admin = [
//   {
//     id: 1,
//     email: "admin@example.com",
//     password: "123",
//   },
// ];

// export const setLocalStorage = () => {
//   localStorage.setItem("employees", JSON.stringify(employees));
//   localStorage.setItem("admin", JSON.stringify(admin));
// };

// export const getLocalStorage = () => {
//   const employees = JSON.parse(localStorage.getItem("employees"));
//   const admin = JSON.parse(localStorage.getItem("admin"));
//   console.log(employees, admin);

//   return { employees, admin };
// };
