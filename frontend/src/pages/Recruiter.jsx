import React from 'react'
import upload_img from '../assets/upload.png'
import TableRec from "../components/TableRec";
import Loading from "../components/Loading";
import { useCallback, useState } from 'react';
import {useDropzone} from 'react-dropzone'
import { CiCircleRemove } from "react-icons/ci";
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'
import TagInput from '../components/TagInput';
import Footer from '../components/Footer';
const Recruiter = () => {
  const [files,setFiles] = useState([]);
  const [resume,setResume] = useState([])
  const [status,setStatus] = useState("")
  const [jobTitle, setJobTitle] = useState("");
  const [qualification, setQualification] = useState("");
  const [experience, setExperience] = useState("");
  const [tags,setTags] = useState([])

  const handleSubmit = async(e) => {
    e.preventDefault()
    const formData = new FormData();
    files.forEach((file, index) => {
      formData.append(`file${index + 1}`, file);
    });
    let required_skills = ""
    for(let i=0;i<tags.length;i++){
      required_skills+=tags[i]+" ";
    }
    formData.append('length',files.length)
    formData.append('skills',required_skills)
    setStatus("loading")
    const response = await fetch("/model/recruiter",{
      method: 'POST',
      body: formData,
    })
    const json = await response.json()
    // setJobTitle("")
    // setQualification("")
    // setExperience("")
    setStatus("Done")
    // setTags([])
    // setFiles([])
    setResume(json["ranked_resume"])
}
  const onDrop = useCallback(acceptedFiles => {
    setFiles(files=>[...files,...acceptedFiles])
  }, [])
  const handleRemove = (name) => {
    setFiles(files.filter(file=>{
      return file.name!==name;
    }))
  }
  const handleClear = () => {
    setFiles([])
  }
  const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})
  return (
    <>
    <div className="text-white max-w-[1300px] px-4 lg:px-20 lg:mx-auto w-screen">
        <div className='mt-12 flex flex-col px-5 sm:px-10'>
            <div className='text:xl md:text-2xl lg:text-4xl text-lightGreen text-center font-semibold'>
                Discover exceptional candidates effortlessly with the prowess of our AI-driven recruiting.
            </div>
            <div className='text-xs sm:text-sm lg:text-xl text-center mt-6'>
                CVSavvy represents the zenith of cutting-edge AI Recruiting Software, seamlessly automating candidate sourcing, intricately matching candidates with their perfect roles, offering profound insights into your hiring processes, and ultimately refining the quality of your hires with unparalleled sophistication. Elevate your recruitment experience with CVSavvy.
            </div>
        </div>
        <div className='flex justify-center'>
          <div className='border-2 border-green-800 mt-8 rounded-3xl w-5/6'></div>
        </div>
        <div className='flex flex-col-reverse justify-center items-center lg:flex-row lg:place-content-around mt-6 m-2 h-full' >
            <div className='border-2 h-80 lg:h-96 w-5/6 lg:w-4/12 rounded-3xl border-solid mx-10 mt-7 flex flex-col justify-start items-center shadow-md shadow-slate-500'>
                <div className='flex justify-between w-5/6'>
                  <div className='my-3 w-auto text-xl'>Upload Files</div>
                  <button onClick={handleClear} className='text-xl text-red-500'><CiCircleRemove/></button>
                </div>
                <div className='border-2 border-lightBlack rounded-3xl w-5/6'></div>
                <div className='m-2 w-5/6 overflow-y-auto scrollbar scrollbar-thumb-lightBlack  scrollbar-thumb-rounded-3xl'>
                    {
                      files.map((file,index)=>(
                        <div className='flex gap-2 justify-between'>
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
                    <p className=' text-darkBlack text-center mt-2'>Drag and Drop the files or Click here to Upload</p>
                </div>
                <input {...getInputProps()} />
            </div>
        </div>
        <div className="my-8">
          <div className="p-4 py-6 rounded-3xl w-5/6 max-w-[800px] mt-4 mx-auto bg-lightBlack md:p-8">
            <form onSubmit={handleSubmit}>
              <div className="">
                <label className="block mb-2 text-base text-white">Job Title</label>
                <input
                  type="text"
                  placeholder="Job Title"
                  className="block w-full px-5 py-2.5 mt-2 text-white placeholder-gray-400 bg-transparent border border-gray-200 rounded-lg"
                  value={jobTitle}
                  onChange={(e) => setJobTitle(e.target.value)}
                />
              </div>
              <div className="-mx-2 mt-4 md:items-center md:flex">
                <div className="flex-1 px-2">
                  <label className="block mb-2 text-base text-white">Qualification</label>
                  <input
                    type="text"
                    placeholder="Degree / Certification"
                    className="block w-full px-5 py-2.5 mt-2 text-white placeholder-gray-400 bg-transparent border border-gray-200 rounded-lg"
                    value={qualification}
                    onChange={(e) => setQualification(e.target.value)}
                  />
                </div>
                <div className="flex-1 px-2 mt-4 md:mt-0">
                  <label className="block mb-2 text-base text-white">Experience</label>
                  <input
                    type="text"
                    placeholder="Years"
                    className="block w-full px-5 py-2.5 mt-2 text-white placeholder-gray-400 bg-transparent border border-gray-200 rounded-lg"
                    value={experience}
                    onChange={(e) => setExperience(e.target.value)}
                  />
                </div>
              </div>
              <TagInput tags={tags} setTags={setTags} />
              <div className="flex justify-center mt-4">
                <button className="bgGradient py-2 px-6 mt-6 text-sm rounded-3xl font-semibold text-black" type="submit">Get Results</button>
              </div>
            </form>
          </div>
        </div>
        {
            status==="loading" &&
            <div  className="mt-14 w-[70%] mx-auto flex flex-col">
                <SkeletonTheme baseColor="#474B4F" highlightColor="#222629" height="30px" borderRadius="5px">
                    <Skeleton count={10} style={{margin:"0.25rem"}}/>
                </SkeletonTheme>
            </div>
        }
        {
          status==="Done" &&
          <div className='p-6 my-8 lg:m-auto flex justify-center'>
              <TableRec resume={resume} className='bg-transparent' />
          </div>
        }
    </div>
    </>
  )
}

export default Recruiter