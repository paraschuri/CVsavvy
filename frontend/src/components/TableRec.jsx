import React from 'react'
import { Card, Typography } from "@material-tailwind/react";

const TABLE_HEAD = ["Company", "Job Title", "Location", "Apply Link"];

const TABLE_ROWS = [
    {
      name: "Microsoft",
      job: "Manager",
      location: "Bangalore",
      link: "https://www.google.co.in",
    },
    {
      name: "Amazon",
      job: "Developer",
      location: "Mumbai",
      link: "82",
    },
    {
      name: "Google",
      job: "Executive",
      location: "Delhi",
      link: "91",
    },
    {
      name: "NULL POINTER",
      job: "Developer",
      location: "Pune",
      link: "99",
    },
    {
      name: "Adobe",
      job: "Manager",
      location: "Hyderabad",
      link: "65",
    },
    {
      name: "Microsoft",
      job: "Manager",
      link: "https://www.google.co.in",
    },
  ];

const Table = () => {
  return (
    <Card className="  bg-lightBlack overflow-scroll md:overflow-auto h-full w-full max-w-[1300px] px-10">
      <table className="w-full min-w-max table-auto text-left">
        <thead>
          <tr>
            {TABLE_HEAD.map((head) => (
              <th key={head} className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                <Typography
                  variant="small"
                  color="white"
                  className="font-normal leading-none uppercase"
                >
                  {head}
                </Typography>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {TABLE_ROWS.map(({ name, job, location ,link}, index) => (
            <tr key={name} className="even:bg-blue-gray-50/50">
              <td className="p-4">
                <Typography variant="small" color="white" className="font-normal">
                  {name}
                </Typography>
              </td>
              <td className="p-4">
                <Typography variant="small" color="white" className="font-normal">
                  {job}
                </Typography>
              </td>
              <td className="p-4">
                <Typography variant="small" color="white" className="font-normal">
                  {location}
                </Typography>
              </td>
              <td className="p-4">
                <Typography as="a" href={`${link}`} variant="small" color="white" className="font-medium">
                  Apply
                </Typography>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Card>
  )
}

export default Table