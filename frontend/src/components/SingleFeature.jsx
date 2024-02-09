

export function SingleFeature({name, img, info }) {
    return (
        <div className="p-6 max-w-[400px] mx-auto bg-gradient-radial from-lightBlack via-darkBlack to-black rounded-3xl flex flex-col transform hover:scale-105 transition duration-500">
            <img className="object-center w-full mb-8 rounded-xl h-[225px] object-scale-down" src={img} alt="blog" />

            <h1 className="mx-auto mb-8 text-2xl font-semibold leading-none tracking-tighter">{name}</h1>
            <p className="mx-auto text-base leading-relaxed">{info}</p>
        </div>
    );
  }
export default SingleFeature;