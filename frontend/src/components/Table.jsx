import React from 'react'
import { Card, Typography } from "@material-tailwind/react";

const TABLE_HEAD = ["Company", "Job Title", "Employed", "Score"];

const TABLE_ROWS = [
    {
      name: "Microsoft",
      job: "Manager",
      date: "23/04/18",
      score: "85",
    },
    {
      name: "Amazon",
      job: "Developer",
      date: "23/04/18",
      score: "82",
    },
    {
      name: "Google",
      job: "Executive",
      date: "19/09/17",
      score: "91",
    },
    {
      name: "NULL POINTER",
      job: "Developer",
      date: "24/12/08",
      score: "99",
    },
    {
      name: "Adobe",
      job: "Manager",
      date: "04/10/21",
      score: "65",
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
          {TABLE_ROWS.map(({ name, job, date ,score}, index) => (
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
                  {date}
                </Typography>
              </td>
              <td className="p-4">
                <Typography as="a" href="#" variant="small" color="white" className="font-medium">
                  {score}
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