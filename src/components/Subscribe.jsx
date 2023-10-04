const Subscribe = () => {
  return (
    <div className="py-12 md:py-24 flex flex-col items-center justify-center px-5">
      <div className="text-center">
        <h1 className="text-[#20B15A] font-semibold">SUBSCRIBE</h1>
        <h2 className="my-3 font-semibold text-2xl capitalize">
          Subscribe to get the latest <br /> news about us
        </h2>
        <p className="text-[#8B8B8B] mb-5 text-[14px]">
          Please drop your email below to get daily update about what we do
        </p>
        <div className="flex gap-3  border border-black p-2 rounded-xl ">
          <input
            className="outline-none w-full md:w-[400px] pl-1"
            type="text"
            placeholder="Enter Your Email Address"
          />
          <button className="bg-[#F55F1D] px-5 py-2 rounded-xl text-white  md:top-1">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
