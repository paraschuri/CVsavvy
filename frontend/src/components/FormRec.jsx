import React from 'react'
import {Button} from "@material-tailwind/react";
import TagInput from '../components/TagInput';
const FormRec = () => {
  return (
        <div className="p-4 py-6 rounded-3xl w-5/6 max-w-[800px] mt-4 mx-auto bg-lightBlack  md:p-8">
            <form>
                <div className=''>
                    <label className="block mb-2 text-base text-white">Job Title</label>
                    <input type="text" placeholder="Job Title " class="block w-full px-5 py-2.5 mt-2 text-white placeholder-gray-400 bg-transparent border border-gray-200 rounded-lg" />
                </div>
                <div className="-mx-2 mt-4 md:items-center md:flex">
                    <div className="flex-1 px-2">
                        <label class="block mb-2 text-base text-white">Qualification</label>
                        <input type="text" placeholder="Degree / Certification" class="block w-full px-5 py-2.5 mt-2 text-white placeholder-gray-400 bg-transparent border border-gray-200 rounded-lg" />
                    </div>

                    <div className="flex-1 px-2 mt-4 md:mt-0">
                        <label class="block mb-2 text-base text-white">Experience</label>
                        <input type="text" placeholder="Years" class="block w-full px-5 py-2.5 mt-2 text-white placeholder-gray-400 bg-transparent border border-gray-200 rounded-lg " />
                    </div>
                </div>
                <TagInput></TagInput>
            </form>
        </div>
  )
}

export default FormRec