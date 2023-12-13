import React, { useState, useRef } from "react";
import vegImage from "../../assets/Images/veg.png";
import backArrow from "../../assets/Images/backArrow.png";
import line from "../../assets/Images/line.png";
import rightArrow from "../../assets/Images/rightArrow.png";
import "../../index.css";
const Cart = () => {
  const [quantity, setQuantity] = useState(0);
  // Increment the quantity
  const incrementQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  // Decrement the quantit
  const decrementQuantity = () => {
    if (quantity > 0) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  return (
    <>
      <div className=" flex justify-around items-center mt-[56px] mx-[18px] text-black ">
        <button>
          <img className=" h-[42px] w-[42px]" src={backArrow} alt="" />
        </button>
        <div className="">
          <h1 className=" font-semibold font-giloryBold text-center text-[#832526] text-[24px]">
            The Woods Cafe
          </h1>
          <h1 className=" text-[12px] font-">Venkatesh mall, Chhindwara,</h1>
        </div>
        <button>
          <img className=" h-[42px] w-[42px]" src={line} alt="" />
        </button>
      </div>
      <div className="flex justify-center">
        <h1 className=" text-[#832526] font-giloryBold text-[14px]  text-sm">
          Table Number 23
        </h1>
      </div>
      <div className=" border border-solid font- border-[#EDEDED] h-0 "></div>

      {/* order contents  */}
      <div className=" mt-[54px] text-black font-extrabold">
        {/* order1  */}
        <div className=" mx-[22px] mb-[28px] font-giloryBold ">
          <div className="flex justify-around">
            <div className="flex items-center flex-grow">
              <img
                className=" w-[14px] h-[14px] mx-[8px]"
                src={vegImage}
                alt=""
              />
              <h1 className=" font-extrabold   text-[18px]">
                Margherita Pizza
              </h1>
            </div>
            {/* inc and dec quanity  */}
            <div className="flex-shrink-0 flex items-center h-[39px] gap-3 w-[81px] mx-[28px] border-[3px] px-[13px] py-[14px] rounded-[10px] ">
              <button onClick={incrementQuantity} className="">
                +
              </button>
              <h1 className="  ">{quantity}</h1>
              <button onClick={decrementQuantity} className="">
                -
              </button>
            </div>

            <div className="flex justify-center flex-col">
              <h1 className=" font-extrabold ">₹185</h1>
            </div>
          </div>
        </div>
        {/* order 2 */}
        <div className=" mx-[22px] mb-[28px] font-giloryBold ">
          <div className="flex justify-around">
            <div className="flex items-center flex-grow">
              <img
                className=" w-[14px] h-[14px] mx-[8px]"
                src={vegImage}
                alt=""
              />
              <h1 className="font-   text-[18px]">Double Cheese Pizza</h1>
            </div>
            {/* inc and dec quanity  */}
            <div className="flex-shrink-0 flex items-center h-[39px] gap-3 w-[81px] mx-[28px] border-[3px] px-[13px] py-[14px] rounded-[10px] ">
              <button onClick={incrementQuantity} className="">
                +
              </button>
              <h1 className="  ">{quantity}</h1>
              <button onClick={decrementQuantity} className="">
                -
              </button>
            </div>

            <div className="flex justify-center flex-col">
              <h1 className="">₹185</h1>
            </div>
          </div>
        </div>
        {/* order 3 */}
        <div className=" mx-[22px] mb-[28px] font-giloryBold ">
          <div className="flex justify-around">
            <div className="flex items-center flex-grow">
              <img
                className=" w-[14px] h-[14px] mx-[8px]"
                src={vegImage}
                alt=""
              />
              <h1 className=" text-[18px]">Alfredo Pasta</h1>
            </div>
            {/* inc and dec quanity  */}
            <div className="flex-shrink-0 flex items-center h-[39px] gap-3 w-[81px] mx-[28px] border-[3px] px-[13px] py-[14px] rounded-[10px] ">
              <button onClick={incrementQuantity} className="">
                +
              </button>
              <h1 className="  ">{quantity}</h1>
              <button onClick={decrementQuantity} className="">
                -
              </button>
            </div>

            <div className="flex justify-center flex-col">
              <h1>₹185</h1>
            </div>
          </div>
        </div>
        <div className=" border border-solid border-[#EDEDED] h-0 "></div>
        <div className=" ">
          <h1 className=" font-giloryLight font-semibold  text-[16px] ml-[17px] mr-[175px] pt-4 mb-40">
            A delicious and cheesy pizza made with fresh vegetables and topped
            with...
          </h1>
        </div>
        <div className="">
          <button className=" bg-[#832526] mx-[22px] flex h-[53px] w-[345px] rounded-[10px] justify-center items-center">
            <img src={rightArrow} alt="" />
            <img src={rightArrow} alt="" />
            <img src={rightArrow} alt="" />
            <h1 className=" text-white text-[16px]">Slide to Pay</h1>
          </button>
        </div>
      </div>
    </>
  );
};

export default Cart;
