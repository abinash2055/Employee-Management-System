import React from "react";

const TaskListNumbers = () => {
  return (
    <div className="flex mt-10 justify-between screen gap-5">
      <div className="rounded-xl w-[45%] px-9 py-6 bg-red-400">
        <h2 className="text-3xl font-semibold">1</h2>
        <h3 className="text-xl font-medium">New Task</h3>
      </div>
      <div className="rounded-xl w-[45%] px-9 py-6 bg-blue-400">
        <h2 className="text-3xl font-semibold">3</h2>
        <h3 className="text-xl font-medium">Complete Task</h3>
      </div>
      <div className="rounded-xl w-[45%] px-9 py-6 bg-green-400">
        <h2 className="text-3xl font-semibold">0</h2>
        <h3 className="text-xl font-medium">Accepted Task</h3>
      </div>
      <div className="rounded-xl w-[45%] px-9 py-6 bg-yellow-400">
        <h2 className="text-3xl font-semibold">0</h2>
        <h3 className="text-xl font-medium">Failed Task</h3>
      </div>
    </div>
  );
};

export default TaskListNumbers;