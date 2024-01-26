import React from 'react'
import resume from '../assets/resumes.png'
import upload_img from '../assets/upload.png'
import Table from "../components/Table";
import Footer from "../components/Footer"
import { useCallback, useState } from 'react';
import {useDropzone} from 'react-dropzone'
const User = () => {
    const [file,setFile] = useState(null);

    const onDrop = useCallback(acceptedFiles => {
        setFile(acceptedFiles[0]);
    }, [])
    const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})
    const handleSubmit = async() => {
        if(!file)return;
        const formData = new FormData();
        formData.append('file', file);
        const response = await fetch("/model",{
            method: 'POST',
            body: formData,
        })
        const json = await response.json()
        console.log(json)
    }
  return (
    <>
        <div className="text-white max-w-[1300px] px-10 pr-16 mx-auto pb-8 w-screen">
        <div className="flex flex-col lg:flex-row gap-4">
            <div className="mt-7 flex justify-center lg:hidden">
                    <img src={resume} alt="hello" className="h-[300px] w-[350px]" />
            </div>
            <div className="lg:mt-12 lg:w-[67%] lg:ml-10 lg:block flex flex-col items-center mt-16 ">
                <div className=" text-lightGreen text-xl min-[440px]:text-2xl min-[540px]:text-3xl sm:text-4xl mx-w-[530] font-semibold ">Make Your Mark: 
                    <span className="text-white text-xl ml-0 block min-[440px]:text-2xl min-[540px]:text-3xl sm:text-4xl font-medium lg:ml-0"> Ensure Your Resume Stands Out for All the Right Reasons!</span>
                    <div className='text-white font-normal flex flex-col gap-3 text-sm mt-5'>
                        <p>Rank higher among peers with our <span className="font-semibold">AI-powered</span> evaluation.</p>
                        <p>Sidestep errors and enhance your resume with personalized tips.</p>
                        <p>Craft visually appealing resumes for maximum impact.</p>
                    </div>
                </div>
            </div>
            <div className="mt-7 hidden lg:block">
                <img src={resume} alt="hello" className="h-[300px] w-[400px]" />
            </div>
        </div>
        <div className='text-3xl lg:ml-10 mt-3 mb-7'>Concerned your resume isn't good enough? Get instant feedback and suggestions using our resume scanner.</div>
        <div className='flex place-content-around' {...getRootProps()}>
            <div className='border-2 h-96 w-96 lg:w-7/12 rounded-3xl border-solid mx-10 mt-7 flex flex-col p-4 gap-4'>
                <div className='w-full h-full border-2 border-dashed bg-lightBlack rounded-2xl flex flex-col justify-center items-center'>
                    {!file?<><img src={upload_img} alt="" className='h-[60px] w-[75px]'/>
                    <p className=' text-darkBlack text-center'>Drag and Drop your files here or click here</p></>:
                    <div>
                        {file.name}
                    </div>
                    }
                </div>
                <input {...getInputProps()} className='flex justify-center p-2 border-2 rounded-2xl' />
            </div>
        </div> 
        <div className='flex justify-center mt-4'>
            <button className="bgGradient py-2 px-6 mt-6 text-sm rounded-3xl font-semibold text-black" onClick={handleSubmit}>Check Resume</button>
        </div>
        <div className='p-6 pl-10 mt-8'>
            <Table className='bg-black' />
        </div>
    </div>
    <Footer /> 
    </>
  )
}

export default User