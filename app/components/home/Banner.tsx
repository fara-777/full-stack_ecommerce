import Image from "next/image";

const Banner = () => {
  return (
    <div className="h-[300px] bg-black flex items-center justify-center">
      <div className="h-[200px] relative w-full">
        <Image src={"/banner.jpeg"} fill alt="" className=" w-full" />
      </div>
    </div>
  );
};

export default Banner;
