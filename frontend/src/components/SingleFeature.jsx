

export function SingleFeature({name, img, info }) {
    return (
        <div className="p-6 max-w-[400px] mx-auto bg-gradient-radial from-lightBlack via-darkBlack to-black rounded-3xl flex flex-col">
            <img className="object-center w-full mb-8 rounded-xl h-[225px] object-scale-down" src={img} alt="blog" />

            <h1 className="mx-auto mb-8 text-2xl font-semibold leading-none tracking-tighter">{name}</h1>
            <p className="mx-auto text-base leading-relaxed">{info}</p>
            <button className="bgGradient py-2 px-6 mx-auto mt-6 lg:mt-8 text-sm rounded-3xl font-semibold text-black">Check your Resume</button>
        </div>
    );
  }
export default SingleFeature;