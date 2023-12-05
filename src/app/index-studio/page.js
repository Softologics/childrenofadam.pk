"use client"
import React, { useState,useEffect} from 'react'
import Link from "next/link"
import Image from "next/image"
import dynamic from "next/dynamic"

const Navbar = dynamic(()=>import('../componets/Navbar/navbar'));
const Footer = dynamic(()=>import('../componets/Footer/footer'));
const Switcher = dynamic(()=>import('../componets/switcher'));
const CookieModal = dynamic(()=>import('../componets/cookieModal'));

const ClientsOne = dynamic(()=>import('../componets/clientsOne'));
const AvailableProject = dynamic(()=>import('../componets/availaleProject'));
const CompanyLogo = dynamic(()=>import('../componets/companyLogo'));

const TinySlider = dynamic(()=>import('tiny-slider-react'),{ssr: false,});
import '../../../node_modules/tiny-slider/dist/tiny-slider.css'

import ModalVideo from 'react-modal-video'
import "../../../node_modules/react-modal-video/css/modal-video.css";

import {MdKeyboardArrowRight} from "react-icons/md"
import { FaArrowRight } from 'react-icons/fa'
import {RiPresentationFill,RiMoneyCnyBoxLine} from "react-icons/ri"
import{LiaFileInvoiceDollarSolid} from "react-icons/lia"
import {AiOutlineDollar} from "react-icons/ai"

import CountUp from 'react-countup';
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"

const settings = {
    container: '.tiny-one-item',
    items: 1,
    controls: true,
    mouseDrag: true,
    loop: true,
    rewind: true,
    autoplay: true,
    autoplayButtonOutput: false,
    autoplayTimeout: 3000,
    navPosition: "bottom",
    controlsText: ['<i class="mdi mdi-chevron-left "></i>', '<i class="mdi mdi-chevron-right"></i>'],
    nav: false,
    speed: 400,
    gutter: 0,
}

export default function IndexStudio(){
    useEffect(() => {
        if (typeof window !== "undefined"){
          document.documentElement.setAttribute("dir", "ltr");
          document.documentElement.classList.add('light');
        }
      }, []);
    const [isOpen, setOpen] = useState(false)
    const [isOpenTab, setisOpen] = useState(0);

    const handleTabClick = (index) => {
        setisOpen(index);
    };


    const services = ["/images/studio/01.jpg","/images/studio/02.jpg","/images/studio/03.jpg"];
    const aboutData = [
        {
            icon:RiPresentationFill,
            title:"Digital Marketing",
            desc:"The phrasal sequence of the is now so that many campaign and benefit"
        },
        {
            icon:LiaFileInvoiceDollarSolid,
            title:"Investing",
            desc:"The phrasal sequence of the is now so that many campaign and benefit"
        },
        {
            icon:RiMoneyCnyBoxLine,
            title:"Mortgage Advisor",
            desc:"The phrasal sequence of the is now so that many campaign and benefit"
        },
        {
            icon:RiPresentationFill,
            title:"Real Estate",
            desc:"The phrasal sequence of the is now so that many campaign and benefit"
        },
        {
            icon:AiOutlineDollar,
            title:"Payroll & Accounting",
            desc:"The phrasal sequence of the is now so that many campaign and benefit"
        },
        {
            icon:LiaFileInvoiceDollarSolid,
            title:"Branch Registration",
            desc:"The phrasal sequence of the is now so that many campaign and benefit"
        },
     ]

     const PortfolioData = [
    {
        image:"/images/studio/work1.jpg",
        title:"Techwind Personal Portfolio",
        name:"Creative"
    },
    {
        image:"/images/studio/work2.jpg",
        title:"Techwind Minimal Portfolio",
        name:"Minimal"
    },
    {
        image:"/images/studio/work3.jpg",
        title:"Cryptor NFT Market",
        name:"Crypto"
    },
    {
        image:"/images/studio/work4.jpg",
        title:"Techwind Portfolio",
        name:"Portfolio"
    },
    {
        image:"/images/studio/work5.jpg",
        title:"Techwind Constuction",
        name:"Corporate"
    },
    {
        image:"/images/studio/work6.jpg",
        title:"Techwind SEO",
        name:"SEO"
    },
    {
        image:"/images/studio/work7.jpg",
        title:"Cryptor NFT Market",
        name:"Crypto"
    },
]
    return(
        <>
        <Navbar/>

        <section className="relative table w-full py-36 lg:py-44 before:content-[''] before:absolute  xl:before:start-[50rem] lg:before:start-[30rem] md:before:start-[15rem] before:start-[0rem] lg:before:bottom-[10rem] md:before:bottom-[12rem] before:bottom-[14rem] before:w-[60rem] before:h-[30rem] before:rounded-[18rem] ltr:before:rotate-[135deg] rtl:before:rotate-[45deg] before:bg-indigo-600/5 dark:before:bg-indigo-600/10 overflow-hidden">
            <div className="absolute inset-0 bg-indigo-600 opacity-5"></div>
            <div className="container relative">
                <div className="grid md:grid-cols-12 grid-cols-1 items-center mt-10 gap-[30px]">
                    <div className="md:col-span-7">
                        <div className="md:me-6">
                            <h4 className="font-bold lg:leading-normal leading-normal text-4xl lg:text-5xl mb-5">Bigger, Bolder
                                <br /> <span className="text-indigo-600">& Better</span></h4>
                            <p className="text-slate-400 text-lg max-w-xl">Launch your campaign and benefit from our expertise
                                on designing and managing conversion centered Tailwind CSS v3.x html page.</p>

                            <div className="mt-6">
                                <Link href="/page-aboutus" className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md">Company</Link>
                            </div>
                        </div>
                    </div>
                    <div className="md:col-span-5">
                        <div className="relative">
                            <div className="tiny-one-item studio-img">

                                <TinySlider settings={settings}>
                                    {services.map((item, index) => {
                                        return(
                                            <div className="tiny-slide" key={index}>
                                                <div className="m-2 mx-3">
                                                    <Image src={item} width={0} height={0} sizes="100vw" style={{width:"100%", height:"auto"}} className="rounded-lg" alt="" />
                                                </div>
                                            </div>
                                        )
                                    })}
                                </TinySlider>
                            </div>
                            <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="S_CGed6E610" onClose={() => setOpen(false)} />
                            <div className="absolute bottom-2/4 translate-y-2/4 start-0 end-0 text-center">
                                <Link href="#" onClick={() => setOpen(true)} data-id="S_CGed6E610"
                                    className="lightbox h-20 w-20 rounded-full shadow-lg dark:shadow-gray-800 inline-flex items-center justify-center bg-white dark:bg-slate-900 text-indigo-600 dark:text-white">
                                    <i className="mdi mdi-play inline-flex items-center justify-center text-2xl"></i>
                                </Link>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>

        <section className="relative md:py-24 py-16 pt-12">
            <div className="container relative">
                <CompanyLogo/>
            </div>
            <div className="container relative md:mt-24 mt-16">
                <div className="grid md:grid-cols-12 grid-cols-1 pb-8 items-end">
                    <div className="lg:col-span-8 md:col-span-6 md:text-start text-center">
                        <h3 className="md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">We create
                            world-className <br /> web design, and <br /> branding.</h3>
                    </div>

                    <div className="lg:col-span-4 md:col-span-6 md:text-end hidden md:block">
                        <Link href="#" className="relative inline-flex items-center font-semibold tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:transition-all after:duration-500 text-slate-400 hover:text-indigo-600 after:bg-indigo-600 duration-500 ease-in-out">See
                            More <FaArrowRight className="ms-2 text-[10px]"/></Link>
                    </div>
                </div>
                <div className="grid lg:grid-cols-12 grid-cols-1 mt-8 gap-[30px]">
                    <div className="lg:col-span-3">
                        <div className="grid lg:grid-cols-1 grid-cols-2 sticky top-20">
                            <div className="counter-box relative md:text-start text-center">
                                <h1 className="font-bold text-3xl text-indigo-600"><CountUp className="counter-value" end={11} start={3} />+</h1>
                                <span className="counter-head font-medium h6">Designers & <br /> developers</span>
                            </div>

                            <div className="counter-box relative md:text-start text-center lg:mt-6">
                                <h1 className="font-bold text-3xl text-indigo-600"><CountUp className="counter-value" end={5} start={1} />
                                </h1>
                                <span className="counter-head font-medium h6">Years of <br /> Experience</span>
                            </div>
                        </div>

                    </div>
                    <div className="lg:col-span-9">
                        <div className="grid md:grid-cols-2 grid-cols-1 gap-[30px]">
                                    {aboutData.map((item,index)=>{
                                        let Icons = item.icon
                                    return(
                                    <div key={index} className="p-6 rounded-lg shadow dark:shadow-gray-800 bg-white dark:bg-slate-900">
                                        <div
                                            className="w-16 h-16 bg-indigo-600/5 border-2 border-indigo-600/20 text-indigo-600 rounded-lg text-2xl flex align-middle justify-center items-center shadow-sm dark:shadow-gray-800">
                                            <Icons width={24} height={24}/>
                                        </div>
    
                                        <div className="content mt-7">
                                            <Link href="/page-services" className="title h5 text-lg font-medium hover:text-indigo-600">{item.title}</Link>
                                            <p className="text-slate-400 mt-3">{item.desc}</p>
    
                                            <div className="mt-5">
                                                <Link href="#" className="relative inline-flex items-center font-semibold tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:duration-500 text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500">Read
                                                    More<FaArrowRight className="ms-2 text-[10px]"/></Link>
                                            </div>
                                        </div>
                                    </div>
                                    )
                                    })} 
                        </div>

                        <div className="grid md:grid-cols-12 grid-cols-1 md:hidden mt-8">
                            <div className="md:col-span-12 text-center">
                                <Link href="#" className="relative inline-flex items-center font-semibold tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:transition-all after:duration-500 text-slate-400 hover:text-indigo-600 after:bg-indigo-600 duration-500 ease-in-out">See
                                    More <FaArrowRight className="ms-2 text-[10px]"/></Link>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>

        <section className="relative md:py-24 py-16 md:pt-0 pt-0">
            <div className="container relative">
                <div className="grid grid-cols-1 justify-center">
                    <div className="relative z-1">
                        <div className="grid lg:grid-cols-12 grid-cols-1 md:text-start text-center justify-center">
                            <div className="lg:col-start-2 lg:col-span-10">
                                <div className="relative">
                                    <Image src="/images/digital/cta.jpg" width={0} height={0} sizes='100vw' style={{width:"100%", height:"auto"}} className="rounded-md shadow-lg" alt="" />
                                    <div className="absolute bottom-2/4 translate-y-2/4 start-0 end-0 text-center">
                                        <Link href="#" onClick={() => setOpen(true)} data-id="S_CGed6E610" className="lightbox h-20 w-20 rounded-full shadow-lg dark:shadow-gray-800 inline-flex items-center justify-center bg-white dark:bg-slate-900 text-indigo-600 dark:text-white">
                                            <i className="mdi mdi-play inline-flex items-center justify-center text-2xl"></i>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="content md:mt-8">
                            <div className="grid lg:grid-cols-12 grid-cols-1 md:text-start text-center justify-center">
                                <div className="lg:col-start-2 lg:col-span-10">
                                    <div className="grid md:grid-cols-2 grid-cols-1 items-center">
                                        <div className="mt-8">
                                            <div className="section-title text-md-start">
                                                <h6 className="text-white/50 text-lg font-semibold">Techwind Agency</h6>
                                                <h3 className="md:text-3xl text-2xl md:leading-normal leading-normal font-semibold text-white mt-2"> We are a full-service <br /> digital company</h3>
                                            </div>
                                        </div>

                                        <div className="mt-8">
                                            <div className="section-title text-md-start">
                                                <p className="text-white/50 max-w-xl mx-auto mb-2">Start working with Techwind that can provide everything you need to generate awareness, drivetraffic, connect.</p>
                                                <Link href="#" className="text-white flex items-center">Read More <MdKeyboardArrowRight className="text-xl ms-1"/></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="absolute bottom-0 start-0 end-0 sm:h-2/3 h-4/5 bg-gradient-to-b from-indigo-500 to-indigo-600"></div>
        </section>

        <section className="realtive md:py-24 py-16 bg-gray-50 dark:bg-slate-800">
            <div className="container relative">
                <div className="grid md:grid-cols-12 grid-cols-1 gap-[30px]">
                    <div className="lg:col-span-4 md:col-span-5">
                        <div className="sticky top-20">
                            <ul className="flex-column text-center p-6 bg-white dark:bg-slate-900 shadow dark:shadow-gray-800 rounded-md" id="myTab" data-tabs-toggle="#myTabContent" role="tablist">
                                <li role="presentation">
                                        <button onClick={() => handleTabClick(0)} className={`${isOpenTab === 0 ?'text-white bg-indigo-600 hover:text-white' : ''} px-4 py-2 text-center font-semibold rounded-md w-full mt-3 hover:text-indigo-600 transition-all duration-500 ease-in-out`} id="dashboard-tab" data-tabs-target="#dashboard" type="button" role="tab" aria-controls="dashboard" aria-selected="false">Project Strategy</button>
                                </li>
                                <li role="presentation">
                                    <button onClick={() => handleTabClick(1)} className={`${isOpenTab === 1 ?'text-white bg-indigo-600 hover:text-white' : ''} px-4 py-2 text-center font-semibold rounded-md w-full mt-3 hover:text-indigo-600 transition-all duration-500 ease-in-out`} id="dashboard-tab" data-tabs-target="#dashboard" type="button" role="tab" aria-controls="dashboard" aria-selected="false">Ux Research and Concept </button>
                                </li>
                                <li role="presentation">
                                    <button onClick={() => handleTabClick(2)} className={`${isOpenTab === 2 ?'text-white bg-indigo-600 hover:text-white' : ''} px-4 py-2 text-center font-semibold rounded-md w-full mt-3 hover:text-indigo-600 transition-all duration-500 ease-in-out`} id="dashboard-tab" data-tabs-target="#dashboard" type="button" role="tab" aria-controls="dashboard" aria-selected="false">Creative Front-End </button>
                                </li>
                                <li role="presentation">
                                    <button onClick={() => handleTabClick(3)} className={`${isOpenTab === 3 ?'text-white bg-indigo-600 hover:text-white' : ''} px-4 py-2 text-center font-semibold rounded-md w-full mt-3 hover:text-indigo-600 transition-all duration-500 ease-in-out`} id="dashboard-tab" data-tabs-target="#dashboard" type="button" role="tab" aria-controls="dashboard" aria-selected="false">Content Strategy</button>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="lg:col-span-8 md:col-span-7">
                        <div id="myTabContent" className="p-6 bg-white dark:bg-slate-900 shadow dark:shadow-gray-800 rounded-md">
                            {isOpenTab === 0 ? 
                                <div id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                    <Image src="/images/studio/p01.jpg" width={0} height={0} sizes='100vw' style={{width:"100%", height:"auto"}} className="shadow rounded-md" alt="" />
                                    <div className="mt-6">
                                        <p className="text-slate-400 mb-2">This is required when, for example, the final text is not yet available. Dummy text is also known as fill text. It is said that song composers of the past used dummy texts as lyrics.</p>
                                        <Link href="#" className="relative inline-flex items-center font-semibold tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:duration-500 text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500">See More <FaArrowRight className="ms-2 text-[10px]"/></Link>
                                    </div>
                                </div> : ""}
                            {isOpenTab === 1 ? 
                                <div  id="dashboard" role="tabpanel" aria-labelledby="dashboard-tab">
                                    <Image src="/images/studio/p02.jpg" width={0} height={0} sizes='100vw' style={{width:"100%", height:"auto"}} className="shadow rounded-md" alt="" />
                                    <div className="mt-6">
                                        <p className="text-slate-400 mb-2">This is required when, for example, the final text is not yet available. Dummy text is also known as fill text. It is said that song composers of the past used dummy texts as lyrics.</p>
                                        <Link href="#" className="relative inline-flex items-center font-semibold tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:duration-500 text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500">See More <FaArrowRight className="ms-2 text-[10px]"/></Link>
                                    </div>
                                </div> :""
                            }    
                            {isOpenTab === 2 ?
                                <div  id="settings" role="tabpanel" aria-labelledby="settings-tab">
                                    <Image src="/images/studio/p03.jpg" width={0} height={0} sizes='100vw' style={{width:"100%", height:"auto"}} className="shadow rounded-md" alt="" />
                                    <div className="mt-6">
                                        <p className="text-slate-400 mb-2">This is required when, for example, the final text is not yet available. Dummy text is also known as fill text. It is said that song composers of the past used dummy texts as lyrics.</p>
                                        <Link href="#" className="relative inline-flex items-center font-semibold tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:duration-500 text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500">See More <FaArrowRight className="ms-2 text-[10px]"/></Link>
                                    </div>
                                </div>:""
                            }
                            {isOpenTab === 3 ? 
                            <div  id="contacts" role="tabpanel" aria-labelledby="contacts-tab">
                                <Image src="/images/studio/p04.jpg" width={0} height={0} sizes='100vw' style={{width:"100%", height:"auto"}} className="shadow rounded-md" alt="" />
                                <div className="mt-6">
                                    <p className="text-slate-400 mb-2">This is required when, for example, the final text is not yet available. Dummy text is also known as fill text. It is said that song composers of the past used dummy texts as lyrics.</p>
                                    <Link href="#" className="relative inline-flex items-center font-semibold tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:duration-500 text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500">See More <FaArrowRight className="ms-2 text-[10px]"/></Link>
                                </div>
                            </div> : ""
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="relative md:py-24 py-16">
            <div className="container relative">
                <div className="grid grid-cols-1">
                    <div className="section-title mb-8">
                        <h6 className="text-indigo-600 text-sm font-bold mb-2">Portfolio</h6>
                        <h4 className="md:text-3xl md:leading-normal text-2xl leading-normal font-semibold mb-4">Read some amazing <br /> case studies.</h4>
                        <p className="text-slate-400 max-w-xl mb-0">Start working with Techwind that can provide everything you need to generate awareness, drive traffic, connect.</p>
                    </div>
                </div>
                <ResponsiveMasonry  columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}  >
                    <Masonry columnsCount={3}>
                        {PortfolioData.map((item,index)=>{
                            return(
                                <div key={index} className="picture-item p-4 rounded-md">
                                    <div className="">
                                        <div className="relative">
                                            <div className="shadow dark:shadow-gray-800 p-5 pb-0 rounded-md bg-emerald-600/5 dark:bg-emerald-600/30">
                                                <Image src={item.image} width={0} height={0} sizes='100vw' style={{width:"100%",height:"auto"}} className="rounded-t-md shadow" alt="" />
                                            </div>
                                        </div>
        
                                        <div className="pt-4 px-3">
                                            <h5 className="mb-1 font-semibold text-lg"><Link href="#" className="hover:text-emerald-600">{item.title}</Link></h5>
                                            <span className="text-slate-400">{item.name}</span>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </Masonry>
                </ResponsiveMasonry>
                <div className="grid md:grid-cols-12 grid-cols-1 mt-8">
                    <div className="md:col-span-12 text-center">
                        <Link href="#" className="relative inline-flex items-center font-semibold tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:transition-all after:duration-500 text-slate-400 hover:text-indigo-600 after:bg-indigo-600 duration-500 ease-in-out">See
                            More<FaArrowRight className="ms-2 text-[10px]"/></Link>
                    </div>
                </div>

            </div>
            <div className=" md:mt-24 mt-16">
                <ClientsOne/>
                <AvailableProject/>
            </div>
        </section>

        <Footer/>
        <Switcher/>
        <CookieModal/>
        </>
    )
}