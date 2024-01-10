import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
  } from "@material-tailwind/react";

export function SingleFeature({name,info,img}) {
    return (
        <Card className={`rounded-3xl px-6 m-6 flex-col items-center justify-center lg:max-w-[26rem] h-100 w-60 shadow-lg bg-gradient-radial from-lightBlack via-darkBlack to-black`} >
            <CardHeader floated={false} className="shadow-md border-[1E262A] border-spacing-0 border-8 rounded-full lg:h-[150px] lg:w-[150px] mb-8 h-28 w-28">
            <img
                src={img}
                alt="img"
                className="h-28 w-28 object-scale-down"
            />
            </CardHeader>
            <CardBody>
            <div className="mb-3 flex flex-wrap items-center justify-center">
                <Typography variant="h5" color="blue-gray" className="font-bold text-lg text-white">
                {name}
                </Typography>
            
            </div>
            <hr />
            <Typography color="white" className="text-sm font-light">
                Enter a freshly updated and thoughtfully furnished peaceful home
                surrounded by ancient trees, stone walls, and open meadows.
            </Typography>
            
            </CardBody>
            <CardFooter className="pb-4 flex justify-center items-center">
            <button className="bgGradient px-4 py-2 mt-4 text-sm rounded-3xl font-semibold text-black">
                TRY IT NOW
            </button>
            </CardFooter>
        </Card>
    );
  }

  export default SingleFeature;