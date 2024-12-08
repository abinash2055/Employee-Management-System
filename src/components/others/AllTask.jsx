import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const AllTask = () => {
  const authData = useContext(AuthContext);

  return (
    <div className="bg-[1C1C1C] p-5 mt-10 rounded">
      <div className="bg-blue-400 py-2 px-4 flex justify-between rounded mb-2">
        <h2 className="text-xl font-medium w-1/5">Employee Name</h2>
        <h3 className="text-xl font-medium w-1/5">New Task</h3>
        <h5 className="text-xl font-medium w-1/5">Active Task</h5>
        <h5 className="text-xl font-medium w-1/5">Completed Task</h5>
        <h5 className="text-xl font-medium w-1/5">Failed Task</h5>
      </div>

      <div className="overflow-auto">
        {authData.employees.map((elem, index) => {
          return (
            <div
              key={elem.id || index}
              className="border-2 border-emerald-600 py-2 px-4 flex justify-between rounded mb-2"
            >
              <h2 className="text-xl font-medium w-1/5">{elem.firstName}</h2>
              <h3 className="text-xl font-medium w-1/5 text-blue-400">
                {elem.taskCounts.newTask}
              </h3>
              <h5 className="text-xl font-medium w-1/5 text-purple-600">
                {elem.taskCounts.active}
              </h5>
              <h5 className="text-xl font-medium w-1/5 text-white">
                {elem.taskCounts.completed}
              </h5>
              <h5 className="text-xl font-medium w-1/5 text-red-600">
                {elem.taskCounts.failed}
              </h5>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllTask;
