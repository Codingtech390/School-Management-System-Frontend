import React from "react";

const Announcements = () => {
  return (
    <div className="bg-white p-4 rounded">
      <div className="flex items-center justify-between">
        <h1 className="text-lg font-semibold">Announcements</h1>
        <span className="text-xs text-gray-400">View All</span>
      </div>
      <div className="flex flex-col gap-4 mt-4">
        <div className="bg-lamaSkyLight rounded-md p-4">
          <div className="flex items-center justify-between mb-1">
            <h2 className="font-medium">School Reopens on Jan 10</h2>
            <span className="text-xs text-gray-400 bg-white rounded-md px-1 py-1">
              2024-01-01
            </span>
          </div>
          <p className="text-sm text-gray-400">
          Classes will resume on January 10 for all students.
          </p>
        </div>
        <div className="bg-lamaPurpleLight rounded-md p-4">
          <div className="flex items-center justify-between mb-1">
            <h2 className="font-medium">New Library Books Available</h2>
            <span className="text-xs text-gray-400 bg-white rounded-md px-1 py-1">
              2024-01-01
            </span>
          </div>
          <p className="text-sm text-gray-400">
          Visit the library to check out the latest arrivals in all genres.
          </p>
        </div>
        <div className="bg-lamaYellowLight rounded-md p-4">
          <div className="flex items-center justify-between mb-1">
            <h2 className="font-medium">Sports Day Registration Open</h2>
            <span className="text-xs text-gray-400 bg-white rounded-md px-1 py-1">
              2024-01-01
            </span>
          </div>
          <p className="text-sm text-gray-400">
          Students can now sign up for the annual sports day events.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Announcements;
