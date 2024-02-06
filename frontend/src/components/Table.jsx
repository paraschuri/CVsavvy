import React, { useState } from 'react'
import { Card, Typography } from "@material-tailwind/react";

const TABLE_HEAD = ["Company", "Job Title", "Salary" ,"Location", "Apply Link"];


const Table = ({data}) => {
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
          {data.map(({company,job,location,apply,salary}) => (
            
            <tr key={company} className="even:bg-blue-gray-50/50">
              <td className="p-4 max-w-1">
                <Typography variant="small" color="white" className="font-normal">
                  {company}
                </Typography>
              </td>
              <td className="p-4 max-w-28">
                <Typography variant="small" color="white" className="font-normal">
                  {job}
                </Typography>
              </td>
              <td className="p-4 max-w-12">
                <Typography variant="small" color="white" className="font-normal">
                  {salary}
                </Typography>
              </td>
              <td className="p-4 max-w-1">
                <Typography variant="small" color="white" className="font-normal">
                  {location}
                </Typography>
              </td>
              <td className="p-4">
                <Typography as="a" href={`${apply}`} variant="small" color="white" className="font-medium">
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