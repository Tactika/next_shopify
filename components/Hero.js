import Link from "next/link";

const Hero = () => {
  return (
    <div className="my-48 mx-auto max-w-7xl px-4 sm:mt-24 md:mt-72 text-center">
      <h1 className="font-extrabold text-gray-900">
        <p className="text-xl sm:text-3xl md:text-4xl">
          JoBox Tool Co
        </p>
        <p className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-4xl sm:text-6xl md:text-7xl">
          Modern eCommerce
        </p>
      </h1>
      <div className="mt-5 max-w-md mx-auto flex justify-center items-center md:mt-8">
        <Link href="#">
          <a className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium py-3 border-transparent rounded-md text-white bg-gray-900 hover:bg-orange-400">
            Tool Up Now
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
