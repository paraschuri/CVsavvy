import React from 'react'
import upload_img from '../assets/upload.png'
import TableRec from "../components/TableRec";
import Loading from "../components/Loading";
import { useCallback, useState } from 'react';
import {useDropzone} from 'react-dropzone'
import { CiCircleRemove } from "react-icons/ci";

const Recruiter = () => {
  const [files,setFiles] = useState([]);
  const handleSubmit = async() => {
    if(!files.length)return;
    const formData = new FormData();
    files.forEach((file, index) => {
      formData.append(`file${index + 1}`, file);
    });
    const required_skills = "tensorflow pytorch keras numpy pandas opencv"
    formData.append('length',files.length)
    formData.append('skills',required_skills)
    const response = await fetch("/model/recruiter",{
        method: 'POST',
        body: formData,
    })
    const json = await response.json()
    console.log(json)
}
  const onDrop = useCallback(acceptedFiles => {
    files.map(file=>{
      if(file.name===acceptedFiles[0].name){
        alert('File already uploaded')
        return 
      }
    })
    console.log(flag)
    setFiles(files=>[...files,acceptedFiles[0]])
  }, [])
  const handleRemove = (name) => {
    setFiles(files.filter(file=>{
      return file.name!==name;
    }))
  }
  const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})
  return (
    <div className="text-white max-w-[1300px] px-20 mx-auto w-screen">
        <div className='mt-12 flex flex-col'>
            <div className='text:xl sm:text-2xl lg:text-4xl text-lightGreen text-center font-semibold'>
                Discover exceptional candidates effortlessly with the prowess of our AI-driven recruiting.
            </div>
            <div className='text-xs sm:text-sm lg:text-xl text-center mt-6'>
                CVSavvy represents the zenith of cutting-edge AI Recruiting Software, seamlessly automating candidate sourcing, intricately matching candidates with their perfect roles, offering profound insights into your hiring processes, and ultimately refining the quality of your hires with unparalleled sophistication. Elevate your recruitment experience with CVSavvy.
            </div>
        </div>
        <div className='flex justify-center'>
          <div className='border-2 border-green-800 mt-8 rounded-3xl w-5/6'></div>
        </div>
        <div className='flex flex-col justify-center items-center mt-8'>
          <div className='border-2 h-80 rounded-3xl w-5/6 flex flex-col justify-center items-center p-4 gap-4'>
            <div className="border-2 border-gray-600 rounded-xl w-full">
                <select className="bg-transparent py-1.5 pl-7 text-gray-400 w-full placeholder:text-gray-900 text-xs sm:text-sm rounded-xl">
                  <option className='text-black'>Job Title</option>
                  <option className='text-black'>Software Engineer</option>
                  <option className='text-black'>Web Developer</option>
                  <option className='text-black'>Data Scientist</option>
                </select>
            </div>
            <div className=' border-2 border-gray-600 rounded-xl w-full '>
            <input
                type="text" className="bg-transparent py-1.5 pl-8 text-gray-100 w-full placeholder:text-gray-400 text-xs sm:text-sm rounded-xl"
                placeholder="Qualifications"
              />
            </div>
            <div className=' border-2 border-gray-600 rounded-xl w-full '>
              <input
                type="text" className="bg-transparent py-1.5 pl-8 text-gray-100 w-full placeholder:text-gray-400 text-xs sm:text-sm rounded-xl"
                placeholder="Skills"
              />
            </div>
            <div className=' border-2 border-gray-600 rounded-xl w-full '>
              <input
                type="text" className="bg-transparent py-1.5 pl-8 text-gray-100 w-full placeholder:text-gray-400 text-xs sm:text-sm rounded-xl"
                placeholder="Location"
              />
            </div>
          </div>
        </div>  
        <div className='flex flex-col-reverse justify-center items-center lg:flex-row lg:place-content-around mt-6 m-2' >
            <div className='border-2 h-20 lg:h-96 w-full lg:w-4/12 rounded-3xl border-solid mx-10 mt-7 flex flex-col justify-start items-center shadow-md shadow-slate-500'>
                <div className='my-3 w-auto'>Upload Files</div>
                <div className='border-2 border-lightBlack rounded-3xl w-5/6'></div>
                <div className='m-2 w-5/6 overflow-y-auto scrollbar-thumb-lightBlack scrollbar-thin scrollbar-thumb-rounded-3xl'>
                    {
                      files.map((file,index)=>(
                        <div className='flex gap-2'>
                          <p>{file.name}</p>
                          <button onClick={()=>handleRemove(file.name)}><CiCircleRemove/></button>
                        </div>
                      ))
                    }
                </div>
            </div>
            <div className='border-2 h-96 w-full lg:w-7/12 rounded-3xl border-solid mx-10 mt-7 flex flex-col p-4 gap-4' {...getRootProps()}>
                <div className='w-full h-full border-2 border-dashed bg-lightBlack rounded-2xl flex flex-col justify-center items-center'>
                    <img src={upload_img} alt="" className='h-[60px] w-[75px]'/>
                    <p className=' text-darkBlack text-center'>Drag and Drop your files here</p>
                </div>
                <input {...getInputProps()} />
            </div>
        </div>
        <div className='flex justify-center mt-4'>
            <button className="bgGradient py-2 px-6 mt-6 text-sm rounded-3xl font-semibold text-black" onClick={handleSubmit}>Get Results</button>
        </div>
        <div className='flex justify-center mt-4 '><Loading /></div>
        <div className='p-6 pl-10 mt-8 h-[600px]'>
            <TableRec className='bg-black' />
        </div>
    </div>
  )
}

export default Recruiter