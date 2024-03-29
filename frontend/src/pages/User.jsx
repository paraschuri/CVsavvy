import React from 'react'
import resume from '../assets/resumes.png'
import upload_img from '../assets/upload.png'
import Table from "../components/Table";
import Footer from "../components/Footer"
import { useCallback, useState } from 'react';
import {useDropzone} from 'react-dropzone'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'
import Courses from '../components/Courses'
const User = () => {
    const [file,setFile] = useState(null);
    const [data,setData] = useState([])
    const [status,setStatus] = useState("")
    const [courses,setCourses] = useState([])
    const [domain,setDomain] = useState("")
    
    const onDrop = useCallback(acceptedFiles => {
        setFile(acceptedFiles[0]);
    }, [])
    const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})
    const handleSubmit = async() => {
        if(!file)return;
        setStatus("Loading")
        const formData = new FormData();
        formData.append('file', file);
        const response = await fetch("/model/user",{
            method: 'POST',
            body: formData,
        })
        const json = await response.json()
        console.log(json["courses"])
        setData(json["jobs"])
        setStatus("Done")
        setCourses(json["courses"])
        setDomain(json["domain"])
    }
  return (
    <>
        <div className="text-white max-w-[1300px] px-10 pr-16 mx-auto pb-8 w-screen">
        <div className="flex flex-col lg:flex-row gap-4">
            <div className="mt-7 flex justify-center lg:hidden">
                    <img src={resume} alt="hello" className="h-[300px] w-[350px]" />
            </div>
            <div className="lg:mt-12 lg:w-[67%] lg:ml-10 lg:block flex flex-col items-center mt-16 ">
                <div className=" textGradient text-xl min-[440px]:text-2xl min-[540px]:text-3xl sm:text-4xl mx-w-[530] font-semibold ">
Welcome to Your Personalized Job Search Hub!
                </div>
                    <div className='text-white font-normal flex flex-col gap-3 text-base mt-5'>
                        <p><span className="font-semibold">Resume Analysis: </span>Upload your resume to extract relevant skills and experience using AI.</p>
                        <p><span className="font-semibold">Personalized Job Recommendations: </span>Discover tailored job opportunities based on your profile and preferences from Glassdoor.</p>
                        <p><span className="font-semibold">Course Suggestions: </span>Receive personalized course recommendations to enhance your skills and qualifications.</p>
                    </div>
            </div>
            <div className="mt-7 hidden lg:block">
                <img src={resume} alt="hello" className="h-[300px] w-[400px]" />
            </div>
        </div>
        <div className='text-3xl lg:ml-10 mt-3 mb-7'>Ready to Get Started?
Upload your resume now and take control of your career journey!</div>
        <div className='flex place-content-around' {...getRootProps()}>
            <div className='border-2 h-96 w-96 lg:w-7/12 rounded-3xl border-solid mx-10 mt-7 flex flex-col p-4 gap-4'>
                <div className='w-full h-full border-2 border-dashed bg-lightBlack rounded-2xl flex flex-col justify-center items-center'>
                    {!file?<><img src={upload_img} alt="" className='h-[60px] w-[75px]'/>
                    <p className=' text-darkBlack text-center'>Drag and Drop your files here or click here</p>
                    </>:
                    <div className='border-2 border-solid p-2 bg-darkBlack rounded-lg shadow-xl'>
                        {file.name}
                    </div>
                    }
                </div>
                <input {...getInputProps()} className='flex justify-center p-2 border-2 rounded-2xl' />
            </div>
        </div> 
        <div className='flex justify-center mt-4'>
            <button className={`${status==="Loading"?"bg-lightBlack text-gray-500":"bgGradient text-black"} py-2 px-6 mt-6 text-sm rounded-3xl font-semibold `} onClick={handleSubmit} disabled={status==="Loading"}>Check Resume</button>
        </div>
        {
            status==="Loading" &&
            <div  className="mt-14 w-[70%] mx-auto flex flex-col">
                <SkeletonTheme baseColor="#474B4F" highlightColor="#222629" height="30px" borderRadius="5px">
                    <Skeleton count={10} style={{margin:"0.25rem"}}/>
                </SkeletonTheme>
            </div>
        }
        {
             status==="Done" &&
            <div className='p-6 pl-10 mt-8 lg:w-[80%] lg:m-auto flex justify-center'>
                <Table className='bg-black' job_data={data} />
            </div>
        }
        {
            status==="Done" &&
            <Courses courses={courses}/>
        }
    </div>
    <Footer />
    </>
  )
}

export default User