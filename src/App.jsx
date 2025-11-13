import React, { useState } from "react";
import { AiOutlineDollar } from "react-icons/ai";
import coin from "./assets/Group 8.png";
import bekzod from "./assets/Group 24.png";
const App = () => {
  const [coins, setCoins] = useState(0);
  const [count, setCount] = useState(0);
  return (
    <div className=" bg-gray-900">
      <div className="container mx-auto w-[85%]">
        <div>
          <h1 className="text-[30px] text-white text-center py-[50px]">
            Hamster Kombat
          </h1>
          <ul className="flex justify-center gap-5 ">
            <li className="flex flex-col gap-5 bg-gray-700 items-center w-[250px] p-3 rounded-2xl ">
              <p className="font-bold text-orange-700 text-[18px]">
                Earn per tap
              </p>
              <span className="flex justify-center items-center gap-2 text-white font-bold ">
                <AiOutlineDollar color="yellow" />
                {coins}
              </span>
            </li>
            <li className="flex flex-col gap-5 bg-gray-700 items-center w-[250px] p-3 rounded-2xl ">
              <p className="font-bold text-purple-700 text-[18px]">
                Coins to level up
              </p>
              <span className="flex justify-center items-center gap-2 text-white font-bold ">
                <AiOutlineDollar color="yellow" />
                {coins}
              </span>
            </li>
            <li className="flex flex-col gap-5 bg-gray-700 items-center w-[250px] p-3 rounded-2xl ">
              <p className="font-bold text-green-700 text-[18px]">
                Profit per hour
              </p>
              <span className="flex justify-center items-center gap-2 text-white font-bold ">
                <AiOutlineDollar color="yellow" />
                {coins}
              </span>
            </li>
          </ul>

          <main>
            <section>
              <div className="flex items-center gap-5 justify-center mt-[50px]">
                <img className="w-[100px]" src={coin} alt="" />
                <p className="text-white text-[50px] font-bolder">{count}</p>
              </div>
              <div className="flex items-center justify-center mt-10">
                <img
                  className="active:scale-[1.1] active:shadow active:transition-all"
                  src={bekzod}
                  alt=""
                />
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
};

export default App;
