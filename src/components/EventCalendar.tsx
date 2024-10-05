"use client";
import Image from "next/image";
import { useState } from "react";

import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

// TEMPORARY DATA FOR CALENDAR EVENTS
const events = [
  {
    id: 1,
    title: "Back to School Orientation",
    time: "10AM - 2PM",
    description:
      "A welcome event for new students and parents to introduce them to the school, staff, and upcoming academic year.",
  },
  {
    id: 2,
    title: "Parent-Teacher Conference",
    time: "2PM - 3PM",
    description:
      "An opportunity for parents to meet with teachers to discuss student progress and performance.",
  },
  {
    id: 3,
    title: "Annual Sports Day",
    time: "4PM - 8PM",
    description:
      "A fun day filled with various athletic activities, competitions, and team-building exercises for students.",
  },
];

const EventCalendar = () => {
  const [value, onChange] = useState<Value>(new Date());
  return (
    <div className="bg-white p-4 rounded">
      <div>
        <Calendar onChange={onChange} value={value} />
        <div className="flex justify-between items-center">
          <h1 className="text-lg font-semibold my-4">Events</h1>
          <Image
            src="/moreDark.png"
            alt="moreDark.png"
            width={20}
            height={20}
          />
        </div>
        <div className="flex flex-col gap-4">
          {events.map((event) => (
            <div
              className="p-5 rounded-md border-2 border-gray-100 border-t-4 odd:border-t-lamaSky even:border-t-lamaPurple"
              key={event.id}
            >
              <div className="flex items-center justify-between">
                <h1 className="font-semibold text-gray-600">{event.title}</h1>
                <span className="text-gray-300 text-xs">{event.time}</span>
              </div>
              <p className="mt-2 text-gray-400 text-sm">{event.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventCalendar;
