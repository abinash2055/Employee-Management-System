const employees = [
  {
    id: 1,
    email: "employee1@example.com",
    password: "123",
    tasks: [
      {
        title: "Complete Project Report",
        description: "Finish the final report for the project due this week.",
        category: "Work",
        taskDate: "2024-12-10",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Team Meeting",
        description: "Attend the weekly team sync meeting.",
        category: "Work",
        taskDate: "2024-12-08",
        active: true,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        title: "Update Resume",
        description: "Revise the CV to include recent achievements.",
        category: "Personal",
        taskDate: "2024-12-07",
        active: false,
        newTask: true,
        completed: false,
        failed: true,
      },
    ],
  },
  {
    id: 2,
    email: "employee2@example.com",
    password: "123",
    tasks: [
      {
        title: "Client Call",
        description: "Schedule and participate in a call with the client.",
        category: "Work",
        taskDate: "2024-12-09",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Submit Expense Report",
        description: "Submit the monthly expense report to finance.",
        category: "Work",
        taskDate: "2024-12-05",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        title: "Read New Industry Article",
        description: "Read an article on recent trends in the industry.",
        category: "Education",
        taskDate: "2024-12-11",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
    ],
  },
  {
    id: 3,
    email: "employee3@example.com",
    password: "123",
    tasks: [
      {
        title: "Prepare Presentation",
        description: "Create slides for the upcoming presentation.",
        category: "Work",
        taskDate: "2024-12-10",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Weekly Review",
        description: "Review weekly goals and prepare for the next week.",
        category: "Work",
        taskDate: "2024-12-07",
        active: true,
        newTask: false,
        completed: true,
        failed: false,
      },
    ],
  },
  {
    id: 4,
    email: "employee4@example.com",
    password: "123",
    tasks: [
      {
        title: "Team Brainstorming Session",
        description:
          "Participate in the team brainstorming session for project ideas.",
        category: "Work",
        taskDate: "2024-12-12",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Fitness Routine",
        description: "Complete the weekly fitness routine.",
        category: "Personal",
        taskDate: "2024-12-06",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        title: "Schedule Doctor's Appointment",
        description:
          "Book an appointment with the doctor for a routine check-up.",
        category: "Personal",
        taskDate: "2024-12-09",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
    ],
  },
  {
    id: 5,
    email: "employee5@example.com",
    password: "123",
    tasks: [
      {
        title: "Complete Task Documentation",
        description: "Document the completed tasks for the current sprint.",
        category: "Work",
        taskDate: "2024-12-08",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Plan Weekend Trip",
        description: "Plan the details for the upcoming weekend trip.",
        category: "Personal",
        taskDate: "2024-12-13",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
    ],
  },
];

const admin = [
  {
    id: 1,
    email: "admin@example.com",
    password: "123",
  },
];

export const setLocalStorage = () => {
  localStorage.setItem("employees", JSON.stringify(employees));
  localStorage.setItem("admin", JSON.stringify(admin));
};

export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem("employees"));
  const admin = JSON.parse(localStorage.getItem("admin"));
  console.log(employees, admin);
};
