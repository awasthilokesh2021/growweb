import React from "react";

const Menu = () => {
  return (
    <div className="w-full  min-h-auto pt-[100px] mt-2">
      <div className="w-[80%] mx-auto flex flex-col">
        <div className="flex justify-around items-start py-20 mb-2">
          <div className=" flex flex-col items-start">
            <h1 className="text-[50px] mb-[50px]">LEAD WITH DATA</h1>
            <p className="text-[32px]  mb-[30px]">No-Code, Full-Stack Business Intelligence (BI) Software</p>
            <button className="px-4 py-2 rounded-md bg-fuchsia-700 text-white">Get Started Now</button>
          </div>
          <div>
            <img
              src="https://cdni.iconscout.com/illustration/premium/thumb/growth-of-education-with-hard-work-2158676-1816228.png?f=webp"
              alt="mutual fund"
            />
          </div>
        </div>
        <div className="flex flex-col items-center mb-40 gap-4 ">
            <p className="mb-4">Hundreds of 5-star reviews for Business Intelligence, Data Analytics, and Dashboard Visualization.</p>
             <div className="flex gap-8">
                  <div className="flex items-center flex-col">
                    <h1 className="text-2xl">Capteera</h1>
                    <span>****</span>
                  </div>
                  <div className="flex items-center flex-col">
                    <h1 className="text-2xl">Capteera</h1>
                    <span>****</span>
                  </div>
                  <div className="flex items-center flex-col">
                    <h1 className="text-2xl">Capteera</h1>
                    <span>****</span>
                  </div>
                  <div className="flex items-center flex-col">
                    <h1 className="text-2xl">Capteera</h1>
                    <span>****</span>
                  </div>
             </div>
             <div className="flex gap-4">
                <img className=" max-w-[70px]" src="https://assets-global.website-files.com/5bc779c7cb6515eacd17ad0f/65e0f161b9618a5bf6b54db3_ca-shortlist-2024-p-500.png" alt="md" />
                <img className=" max-w-[70px]" src="https://assets-global.website-files.com/5bc779c7cb6515eacd17ad0f/661840703d42e7a3795afeb5_spring%20medal.png" alt="md" />
                <img className=" max-w-[70px]" src="https://assets-global.website-files.com/5bc779c7cb6515eacd17ad0f/641cc3a9eb881001690fc092_badge-getapp-category-leaders-2023-p-500.png" alt="md" />
                <img className=" max-w-[70px]" src="https://assets-global.website-files.com/5bc779c7cb6515eacd17ad0f/65e0f161f86da5c7a8f63fa5_sa-frontrunners-2024.png" alt="md" />
             </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
