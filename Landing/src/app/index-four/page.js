import React from "react";
import Image from "next/image";

import Navbar from "../componants/navbar";
import Footer from "../componants/footer";
import Switcher from "../componants/switcher";
import About from "../componants/about";
import Property from "../componants/property";
import Client from "../componants/client";
import Feature from "../componants/feature";
import GetInTuch from "../componants/get-in-touch";
import VideoModal from "../componants/videoModal";
import SearchTab from "../componants/searchTab";

 export default function IndexFour(){
    return(
        <>
          <Navbar/>
          <section className="relative py-40 lg:h-screen flex justify-center items-center bg-green-600/10">
                <div className="container">
                    <div className="grid md:grid-cols-2 gap-[30px] mt-10 items-center">
                        <div className="md:text-start text-center">
                            <h1 className="font-bold lg:leading-normal leading-normal text-4xl lg:text-5xl mb-6">Find Your <span className="text-green-600">Perfect <br /> & Wonderful</span> Home</h1>
                            <p className="text-slate-400 text-xl max-w-xl">A great plateform to buy, sell and rent your properties without any agent or commisions.</p>
                            <SearchTab/>
                        </div>

                        <div className="relative lg:ms-10">
                            <div className="p-5 shadow dark:shadow-gray-700 rounded-t-full bg-white dark:bg-slate-900">
                                <Image src="/images/hero.jpg" className="shadow-md rounded-t-full rounded-md" alt="" width={0} height={0} sizes="100vw" style={{width:"100%", height:"auto"}} priority />
                            </div>
                            <VideoModal/>
                        </div>
                    </div>
                </div>
            </section>
            <section className="relative md:pb-24 pb-16">
                <About />
                <Feature />
                <Property />
                <Client />
               <GetInTuch/>
            </section>  
            <Footer />
            <Switcher />
        </>
    )
 }