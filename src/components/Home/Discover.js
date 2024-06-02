import React from "react";
import { FaGlobe } from "react-icons/fa6";
import { FaIgloo } from "react-icons/fa";
import { GiTroglodyte } from "react-icons/gi";
import { FcGlobe } from "react-icons/fc";

const Discover = () => {
  return (
    <div className=" w-full bg-green-400 text-white min-h-[110vh] py-[150px]">
      <div className="w-[80%] mx-auto">
        <div>
          <h1 className=" text-5xl text-center mb-[100px]">
            Discover What Sets Grow Apart
          </h1>
          <div className=" grid grid-cols-2 gap-6">
            <div className="px-5 py-4 flex flex-col gap-4 justify-center items-center">
              <span className=" text-2xl">
                <FaGlobe />
              </span>
              <h1 className=" font-bold">75+ Integrations</h1>
              <p className=" text-center text-md text-white ">
                Grow seamlessly integrates with Google BigQuery, PostgreSQL,
                MySQL, HubSpot, Salesforce, Quickbooks, Google Analytics, and
                75+ data sources!
              </p>
            </div>

            <div className=" px-5 py-4 flex flex-col gap-4 justify-center items-center">
              <span className=" text-2xl">
                <FaIgloo />
              </span>
              <h1 className=" font-bold">Unlimited Users</h1>
              <p className=" text-center text-md text-white ">
                Say goodbye to per-seat charges. With Grow, unlimited users mean
                unlimited growth potential. Set the right permissions and create
                a unified data environment for your entire team.
              </p>
            </div>

            <div className=" px-5 py-4 flex flex-col gap-4 justify-center items-center">
              <span className=" text-2xl">
                <GiTroglodyte />
              </span>
              <h1 className=" font-bold">One Platform</h1>
              <p className=" text-center text-md text-white ">
                Grow isn’t just a tool; it’s a comprehensive solution. Combining
                ETL, data warehousing, visualization, and alerts, Grow is your
                all-in-one platform for business intelligence.
              </p>
            </div>

            <div className=" px-5 py-4 flex flex-col gap-4 justify-center items-center">
              <span className=" text-2xl">
                <FcGlobe className="bg-white" />
              </span>
              <h1 className=" font-bold">No-code, Full-stack BI</h1>
              <p className=" text-center text-md text-white ">
                Experience the power and scalability necessary for analysts,
                coupled with the simplicity needed for business users to
                self-serve. Grow bridges the gap between complex data analysis
                and everyday business needs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Discover;
