import React from "react";
import AcceptTask from "./AcceptTask";

const TaskList = ({ data }) => {
  return (
    <div
      id="tasklist"
      className="h-[55%] overflow-x-auto flex items-center justify-start gap-5 flex-nowrap w-full py-5 mt-10"
    >
      <AcceptTask />
      <div className="flex-shrink-0 p-5 h-full w-[300px] bg-blue-400 rounded-xl">
        <div className="flex justify-between items-center">
          <h3 className="bg-red-600 text-sm px-3 py-1 rounded">High</h3>
          <h4 className="text-sm">25 Feb 2023</h4>
        </div>
        <h2 className="mt-5 text-2xl font-semibold">Make a Youtube video</h2>
        <p className="text-sm mt-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
          est sequi, cupiditate adipisci reiciendis iste.
        </p>
      </div>
      <div className="flex-shrink-0 p-5 h-full w-[300px] bg-green-400 rounded-xl">
        <div className="flex justify-between items-center">
          <h3 className="bg-red-600 text-sm px-3 py-1 rounded">High</h3>
          <h4 className="text-sm">25 Feb 2023</h4>
        </div>
        <h2 className="mt-5 text-2xl font-semibold">Make a Youtube video</h2>
        <p className="text-sm mt-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
          est sequi, cupiditate adipisci reiciendis iste.
        </p>
      </div>
      <div className="flex-shrink-0 p-5 h-full w-[300px] bg-yellow-400 rounded-xl">
        <div className="flex justify-between items-center">
          <h3 className="bg-red-600 text-sm px-3 py-1 rounded">High</h3>
          <h4 className="text-sm">25 Feb 2023</h4>
        </div>
        <h2 className="mt-5 text-2xl font-semibold">Make a Youtube video</h2>
        <p className="text-sm mt-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
          est sequi, cupiditate adipisci reiciendis iste.
        </p>
      </div>
    </div>
  );
};

export default TaskList;
