const Home = () => {
  return (
    <div className="max-w-7xl mx-auto mt-5 font-font-gen max-lg:p-5">
      <div className="w-full flex max-lg:flex-col gap-6">
        <div className="flex flex-1 ">
          <input
            type="text"
            name=""
            id=""
            placeholder="type your domain"
            className="border p-5 flex-1 outline-none"
          />
          <button className=" bg-green  w-44 text-white outline-none">
            Submit Domain
          </button>
        </div>
        <div className="">
          <ul className="flex gap-10 text-base text-gray">
            <li>Online</li>
            <li>.net</li>
            <li>inc</li>
            <li>$11.9</li>
          </ul>
        </div>
      </div>

      <div className="grid lg:grid-cols-4 gap-5 mt-7 grid-cols-1 ">
        <div className="relative col-span-3">
          <img
            src="https://images.pexels.com/photos/326576/pexels-photo-326576.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            className="opacity-90 h-80 w-full object-cover"
          />
          <div className="absolute top-3 text-white p-10">
            <div>
              <h5>Website and Commerce</h5>
              <h3 className="text-3xl md:w-[70%] w-full font-bold mt-3">
                Tools for All Your Business and products
              </h3>
              <p className="text-md">
                websites and store solution for all your things
              </p>
              <button className="px-5 py-3 bg-white text-black rounded-md mt-5">
                Get Started{" "}
              </button>
            </div>
          </div>
        </div>
        <div className="col-span-1 bg-light">
          <div className="p-5">
            <h2>Domain name</h2>
            <h2 className="text-3xl md:w-[80%] w-full  mt-3">
              Grab A com to serach
            </h2>
            <p>2 year pucrchase required</p>
            <button className="px-5 py-3 bg-black text-white rounded-md mt-5">
              Get Started{" "}
            </button>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-5 grid-cols-1 lg:grid-rows-2 mt-10 text-gray">
        <div className="border text-center border-gray text-xl   h-20 flex justify-center items-center">
          Domain
        </div>
        <div className="border text-center border-gray text-xl   h-20 flex justify-center items-center">
          SSL security
        </div>
        <div className="border text-center border-gray text-xl   h-20 flex justify-center items-center">
          {" "}
          Websites wrodpress
        </div>
        <div className="border text-center border-gray text-xl   h-20 flex justify-center items-center">
          websites
        </div>
        <div className="row-span-2 border text-center border-gray text-xl max-xl:h-20   flex justify-center items-center">
          Shop sale 100 %
        </div>
        <div className="border text-center border-gray text-xl   h-20 flex justify-center items-center">
          Domain
        </div>
        <div className="border text-center border-gray text-xl   h-20 flex justify-center items-center">
          SSL security
        </div>
        <div className="border text-center border-gray text-xl   h-20 flex justify-center items-center">
          {" "}
          Websites wrodpress
        </div>
        <div className="border text-center border-gray text-xl   h-20 flex justify-center items-center">
          websites
        </div>
      </div>
    </div>
  );
};

export default Home;
