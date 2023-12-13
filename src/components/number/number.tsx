import React from "react";
import India from "../../assets/Images/india.png";
const Number = () => {
  return (
    <div className=" pt-[626px] bg-black">
      <div className=" h-[209px] bg-white  rounded-t-[32px] rounded-b-[20px] text-black">
        <div className=" flex justify-center items-center  pt-[29px] py-[22px] pb-[16px]">
          <h1 className=" text-[20px] font-giloryBold">
            Enter your mobile number
          </h1>
        </div>

        <div className=" bg-[#F8F8F8] rounded-xl  items-center flex h-[48px]  mx-[22px]  mb-[16px]">
          <div className=" flex">
            <img
              className=" h-[24px] w-[24px] mr-[4px] ml-[12px]"
              src={India}
              alt=""
            />
            <h1 className=" font-giloryBold text-[16px]">+91</h1>
            <h1 className=" mx-[12px] text-[#A4A4A4] ">|</h1>
          </div>
          <div>
            <input
              className=" font-giloryLight text-[16px] pl-[12px] bg-[#F8F8F8]"
              type="text"
              placeholder="Mobile Number"
            />
          </div>
        </div>

        <div className="justify-center items-center flex">
          <div className=" bg-[#832526] py-[22px] h-[53px] w-[345px] flex justify-center items-center  rounded-xl ">
            <button className=" text-[16px] text-white font-giloryBold">
              Generate OTP
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Number;
