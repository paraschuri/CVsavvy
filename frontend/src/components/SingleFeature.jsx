import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
  } from "@material-tailwind/react";
import resume from '../assets/resume.png'

export function SingleFeature() {
    return (
        <Card className={`rounded-3xl px-6 m-6 flex-col items-center justify-center w-[300px] max-w-[26rem] h-[500px] shadow-lg bg-gradient-radial from-lightBlack via-darkBlack to-black`} >
            <CardHeader floated={false} className="shadow-md border-[1E262A] border-spacing-0 border-8 rounded-full h-[150px] w-[150px] mb-8 ">
            <img
                src={resume}
                alt="img"
                className="h-[150px] w-[150px] object-scale-down"
            />
            </CardHeader>
            <CardBody>
            <div className="mb-3 flex items-center justify-center">
                <Typography variant="h5" color="blue-gray" className="font-bold text-lg text-white">
                RESUME ANAYLSIS
                </Typography>
            
            </div>
            <hr />
            <Typography color="white">
                Enter a freshly updated and thoughtfully furnished peaceful home
                surrounded by ancient trees, stone walls, and open meadows.
            </Typography>
            
            </CardBody>
            <CardFooter className="pb-0 flex justify-center items-center">
            <button className="bgGradient px-4 py-2 mt-4 text-sm rounded-3xl font-semibold text-black">
                TRY IT NOW
            </button>
            </CardFooter>
        </Card>
    );
  }

  export default SingleFeature;