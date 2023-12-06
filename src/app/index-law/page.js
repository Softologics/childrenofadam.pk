"use client"
import React, { useState,useEffect } from 'react'
import Link from "next/link"
import Image from "next/image"
import dynamic from "next/dynamic"

const Navbar = dynamic(()=>import('../componets/Navbar/navbar'));
const Footer = dynamic(()=>import('../componets/Footer/footer'));
const Switcher = dynamic(()=>import('../componets/switcher'));
const CookieModal = dynamic(()=>import('../componets/cookieModal'));

const CompanyLogo = dynamic(()=>import('../componets/companyLogo'));
const BlogTwo = dynamic(()=>import('../componets/blogTwo'));
const TeamData = dynamic(()=>import('../componets/team'));

import * as Icon from 'react-feather';

import {BsCheckCircle} from "react-icons/bs"
import {MdKeyboardArrowRight} from "react-icons/md"
import { FaRegEnvelope } from "react-icons/fa"
import {LiaUniversitySolid, LiaMoneyBillAltSolid, LiaAwardSolid} from "react-icons/lia"

import ModalVideo from 'react-modal-video'
import "../../../node_modules/react-modal-video/css/modal-video.css";

const TinySlider = dynamic(()=>import('tiny-slider-react'),{ssr: false,});
import '../../../node_modules/tiny-slider/dist/tiny-slider.css'

export default function IndexLow(){
    useEffect(() => {
        if (typeof window !== "undefined"){
          document.documentElement.setAttribute("dir", "ltr");
          document.documentElement.classList.add('light');
        }
      }, []);
    const [isOpen, setOpen] = useState(false);
    const services = [
        {
            iamge: "/images/law/1.jpg",
            name: 'Rules of Civil Procedure',
            role: 'Lending Law',
        },
        {
            iamge: "/images/law/2.jpg",
            name: 'Property & Real Estate',
            role: 'Investment Consulting',
        },
        {
            iamge: "/images/law/3.jpg",
            name: 'Civil Litigation',
            role: 'Tax & Benefits',
        },
        {
            iamge: "/images/law/4.jpg",
            name: 'Labours Relations Board',
            role: 'Merges & Acquisitions',
        },
        {
            iamge: "/images/law/5.jpg",
            name: 'The Labour code',
            role: 'Construction Law',
        },
        {
            iamge: "/images/law/6.jpg",
            name: 'Patient Checkup',
            role: 'Health Care Law',
        },
        {
            iamge: "/images/law/7.jpg",
            name: 'Personal Injury',
            role: 'Personal',
        },
    ]
    const settings2 = {
        container: '.tiny-six-item',
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
        responsive: {
            1025: {
                items: 6
            },
    
            992: {
                items: 4
            },
    
            767: {
                items: 3
            },
    
            320: {
                items: 1
            },
        },
    }
    const clientsData = [
        {
            image:"/images/client/01.jpg",
            name:"Thomas Israel",
            title:"C.E.O",
            desc:"I didnt know a thing about icon design until I read this book. Now I can create any icon I need in no time. Great resource!",
            image1:"/images/client/02.jpg",
            name1:"Barbara McIntosh",
            title1:"C.E.O",
            desc1:"There are so many things I had to do with my old software that I just Do not do at all with Techwind. Suspicious but I can not say I Do not love it.",
        },
        {
            image:"/images/client/03.jpg",
            name:"Carl Oliver",
            title:"C.E.O",
            desc:"The best part about Techwind is every time I pay my employees, my bank balance doesn't go down like it used to. Looking forward to spending this extra cash when I figure out why my card is being declined.",
            image1:"/images/client/04.jpg",
            name1:"Jill Webb",
            title1:"C.E.O",
            desc1:"I am trying to get a hold of someone in support, I am in a lot of trouble right now and they are saying it has something to do with my books. Please get back to me right away.",
        },
        {
            image:"/images/client/05.jpg",
            name:"Barbara McIntosh",
            title:"C.E.O",
            desc:"I used to have to remit tax to the EU and with Techwind I somehow Do not have to do that anymore. Nervous to travel there now though.",
            image1:"/images/client/06.jpg",
            name1:"Janisha Doll",
            title1:"C.E.O",
            desc1:"This is the fourth emailIvesent to your support team. I am literally being held in jail for tax fraud. Please answer your damn emails, this is important.",
        },
    ]
    return(
        <>
        <Navbar navClass="nav-light" />

        <section className="flex md:h-screen py-36 items-center bg-center bg-no-repeat bg-cover" style={{backgroundImage:"url('/images/law/bg.jpg')"}}>
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/80 to-black"></div>
            <div className="container relative">
                <div className="grid grid-cols-1 mt-10">
                    <h5 className="text-lg text-white font-medium mb-3">Best Law Firm</h5>
                    <h3 className="font-bold lg:leading-normal leading-normal text-4xl lg:text-5xl mb-5 text-white">Unbelievable solutions <br /> for all legal cases</h3>

                    <p className="text-slate-300 text-lg max-w-xl">Create, collaborate, and turn your ideas into incredible products with the definitive platform for digital design.</p>

                    <div className="mt-8">
                        <Link href="#" className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle transition duration-500 ease-in-out text-base text-center bg-red-600 hover:bg-red-700 border-red-600 hover:border-red-700 text-white">Get Started</Link>
                    </div>
                </div>
            </div>
        </section>

        <section className="relative md:py-24 py-16 bg-gray-50 dark:bg-slate-800 overflow-hidden">
            <div className="container relative">
                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
                    <div className="group relative p-6 hover:bg-red-600 dark:hover:bg-red-600 transition-all duration-500 ease-in-out bg-white dark:bg-slate-900 overflow-hidden text-center">
                        <div className="w-20 h-20 bg-red-600 group-hover:bg-white text-white group-hover:text-red-600 rounded-full text-2xl flex align-middle justify-center items-center shadow-sm dark:shadow-gray-800 dark:group-hover:shadow-gray-700 mx-auto">
                            <LiaUniversitySolid className="h-7 w-7"/>
                        </div>

                        <div className="mt-6">
                            <Link href="#" className="text-lg font-medium group-hover:text-white transition-all duration-500 ease-in-out">Professional Court Service</Link>
                            <p className="text-slate-400 group-hover:text-white/75 transition-all duration-500 ease-in-out mt-3">Competently leverage existing enterprise wide niches through stand alone services. Quickly productize technically.</p>
                        </div>
                    </div>

                    <div className="group relative p-6 bg-red-600 dark:hover:bg-red-600 transition-all duration-500 ease-in-out overflow-hidden text-center">
                        <div className="w-20 h-20 bg-white text-red-600 rounded-full text-2xl flex align-middle justify-center items-center shadow-sm dark:shadow-gray-600 mx-auto">
                            
                            <LiaMoneyBillAltSolid className="h-7 w-7"/>
                        </div>

                        <div className="mt-6">
                            <Link href="#" className="text-lg font-medium text-white transition-all duration-500 ease-in-out">Competitive Pricing</Link>
                            <p className="text-white/75 transition-all duration-500 ease-in-out mt-3">Competently leverage existing enterprise wide niches through stand alone services. Quickly productize technically.</p>
                        </div>
                    </div>

                    <div className="group relative p-6 hover:bg-red-600 dark:hover:bg-red-600 transition-all duration-500 ease-in-out bg-white dark:bg-slate-900 overflow-hidden text-center">
                        <div className="w-20 h-20 bg-red-600 group-hover:bg-white text-white group-hover:text-red-600 rounded-full text-2xl flex align-middle justify-center items-center shadow-sm dark:shadow-gray-800 dark:group-hover:shadow-gray-700 mx-auto">
                           
                            <LiaAwardSolid className="h-7 w-7"/>
                        </div>

                        <div className="mt-6">
                            <Link href="#" className="text-lg font-medium group-hover:text-white transition-all duration-500 ease-in-out">Top Expart Attorney</Link>
                            <p className="text-slate-400 group-hover:text-white/75 transition-all duration-500 ease-in-out mt-3">Competently leverage existing enterprise wide niches through stand alone services. Quickly productize technically.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container relative md:mt-24 mt-16">
                <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-[30px]">
                    <div className="lg:col-span-5 md:col-span-6">
                        <div className="relative">
                            <div className="relative">
                                <Image src="/images/law/ab1.jpg" width={0} height={0} sizes='100vw' style={{width:"100%" , height:"auto"}} className="lg:w-[400px] w-[280px]" alt="" />
                                <div className="absolute top-0 translate-y-2/4 end-0 text-center">
                                    <Link href="#" onClick={() => setOpen(true)} data-id="S_CGed6E610" className="lightbox h-20 w-20 rounded-full shadow-lg dark:shadow-gray-800 inline-flex items-center justify-center bg-white dark:bg-slate-900 text-red-600 dark:text-white">
                                        <i className="mdi mdi-play inline-flex items-center justify-center text-2xl"></i>
                                    </Link>
                                </div>
                            </div>
                            <div className="absolute -end-5 -bottom-16">
                                <Image src="/images/law/ab2.jpg" width={0} height={0} sizes='100vw' style={{width:"100%" , height:"auto"}} className="lg:w-[280px] w-[200px] border-8 border-white dark:border-slate-900" alt="" />
                            </div>
                        </div>
                    </div>
                    <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="S_CGed6E610" onClose={() => setOpen(false)} />

                    <div className="lg:col-span-7 md:col-span-6 mt-8 md:mt-0">
                        <div className="lg:ms-5">
                            <h3 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">Welcome to Techwind <br /> Law Firm Company</h3>

                            <p className="text-slate-400 max-w-xl">Start working with Tailwind CSS that can provide everything you need to generate awareness, drive traffic, connect. Dummy text is text that is used in the publishing industry or by web designers to occupy the space which will later be filled with real content.</p>

                            <ul className="list-none text-slate-400 mt-4">
                                <li className="mb-1 flex items-center"><BsCheckCircle className="text-red-600 text-base me-2"/> Digital Marketing Solutions for Tomorrow</li>
                                <li className="mb-1 flex items-center"><BsCheckCircle className="text-red-600 text-base me-2"/> Our Talented & Experienced Marketing Agency</li>
                                <li className="mb-1 flex items-center"><BsCheckCircle className="text-red-600 text-base me-2"/> Create your own skin to match your brand</li>
                            </ul>

                            <div className="mt-6">
                                <Link href="/contact-one" className="py-2 px-5 inline-flex items-center font-semibold tracking-wide border align-middle transition duration-500 ease-in-out text-base text-center bg-red-600 hover:bg-red-700 border-red-600 hover:border-red-700 text-white me-2 mt-2"><FaRegEnvelope className="me-2 text-sm"/> Contact us</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container relative md:mt-24 mt-16 pt-16">
                <div className="grid grid-cols-1 pb-8 text-center">
                    <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">We provide Different types of office</h3>

                    <p className="text-slate-400 max-w-xl mx-auto">Start working with Tailwind CSS that can provide everything you need to generate awareness, drive traffic, connect.</p>
                </div>
            </div>

            <div className="container-fluid relative">
                <div className="flex justify-center relative mt-8">
                    <div className="relative w-full">
                        <div className="tiny-six-item">
                            <TinySlider settings={settings2}>
                                {services.map((item, index) =>{
                                    return (
                                        <div className="tiny-slide" key={index}>
                                            <div className="group relative shadow dark:shadow-gray-800 overflow-hidden mx-2">
                                                <div className="relative">
                                                    <Image src={item.iamge} width={0} height={0} sizes="100vw" style={{width:"100%", height:"auto"}} className="group-hover:rotate-3 group-hover:scale-110 duration-500 ease-in-out" alt="" />
                                                    <div className="absolute inset-0 bg-gradient-to-t from-black"></div>
                                                </div>

                                                <div className="absolute bottom-6 start-6 end-6">
                                                    <Link href="#" className="text-white/70 hover:text-white text-lg block font-semibold duration-500 ease-in-out">{item.name}</Link>
                                                    <span className="text-white/60 block">{item.role}</span>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}
                            </TinySlider>

                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="pt-20 pb-32 w-full table relative bg-center bg-no-repeat bg-cover" style={{backgroundImage:"url('/images/business/bg02.jpg')"}}>
            <div className="absolute inset-0 bg-slate-900/70"></div>
            <div className="container relative">
                <div className="grid grid-cols-1 text-center">
                    <h3 className="mb-4 md:text-3xl text-2xl text-white font-medium">Speak With Our Expert <br /> Lawyers Today!</h3>

                    <p className="text-white/80 max-w-xl mx-auto mb-0">Start working with Techwind that can provide everything you need to generate awareness, drive traffic, connect.</p>

                    <div className="mt-6">
                        <Link href="#" className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-red-600 hover:bg-red-700 border-red-600 hover:border-red-700 text-white rounded-md me-2 mt-2">Free Consultation</Link>
                    </div>
                </div>
            </div>
        </section>

        <div className="container relative">
            <div className="grid grid-cols-1">
                <div className="relative -top-[52px] shadow dark:shadow-gray-800 py-6 bg-white dark:bg-slate-900">
                   <CompanyLogo/>
                </div>
            </div>
        </div>

        <section className="relative md:pt-11 pt-3 md:pb-24 pb-16 overflow-hidden">
            <div className="container relative">
                <div className="grid lg:grid-cols-12 md:grid-cols-2 grid-cols-1 items-center mt-10 gap-[30px]">
                    <div className="lg:col-span-5 md:order-2 order-1">
                        <div className="lg:ms-10 relative">
                            <div className="bg-white dark:bg-slate-900 rounded-md shadow dark:shadow-gray-800 p-6">
                                <h3 className="mb-6 text-2xl leading-normal font-medium">Free Consultation</h3>

                                <form>
                                    <div className="grid grid-cols-1 gap-4">
                                        <div className="text-start">
                                            <label htmlFor="name" className="font-semibold">Your Name:</label>
                                            <div className="form-icon relative mt-2">
                                                <Icon.User className="w-4 h-4 absolute top-3 start-4"></Icon.User>
                                                <input name="name" id="name" type="text" className="form-input ps-11 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-red-600 dark:border-gray-800 dark:focus:border-red-600 focus:ring-0" placeholder="Name :" />
                                            </div>
                                        </div>

                                        <div className="text-start">
                                            <label htmlFor="email" className="font-semibold">Your Email:</label>
                                            <div className="form-icon relative mt-2">
                                                <Icon.Mail className="w-4 h-4 absolute top-3 start-4"></Icon.Mail>
                                                <input name="email" id="email" type="email" className="form-input ps-11 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-red-600 dark:border-gray-800 dark:focus:border-red-600 focus:ring-0" placeholder="Email :" />
                                            </div>
                                        </div>

                                        <div className="text-start">
                                            <label htmlFor="subject" className="font-semibold">Your Question:</label>
                                            <div className="form-icon relative mt-2">
                                                <Icon.Book className="w-4 h-4 absolute top-3 start-4"></Icon.Book>
                                                <input name="subject" id="subject" className="form-input ps-11 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-red-600 dark:border-gray-800 dark:focus:border-red-600 focus:ring-0" placeholder="Subject :" />
                                            </div>
                                        </div>

                                        <div className="text-start">
                                            <label htmlFor="comments" className="font-semibold">Your Comment:</label>
                                            <div className="form-icon relative mt-2">
                                                <Icon.MessageCircle className="w-4 h-4 absolute top-3 start-4"></Icon.MessageCircle>
                                                <textarea name="comments" id="comments" className="form-input ps-11 w-full py-2 px-3 h-28 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-red-600 dark:border-gray-800 dark:focus:border-red-600 focus:ring-0" placeholder="Message :"></textarea>
                                            </div>
                                        </div>
                                    </div>

                                    <button type="submit" id="submit" name="send" className="py-2 px-5 font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-red-600 hover:bg-red-700 border-red-600 hover:border-red-700 text-white rounded-md justify-center flex items-center mt-3">Send Message</button>
                                </form>
                            </div>
                            <div className="overflow-hidden absolute lg:h-[400px] h-[320px] lg:w-[400px] w-[320px] bg-red-600/5 bottom-0 end-0 rotate-45 -z-1 rounded-3xl"></div>
                        </div>
                    </div>

                    <div className="lg:col-span-7 md:order-1 order-2">
                        <h4 className="mb-4 text-2xl leading-normal font-medium">We Are Ready To Help <br /> You To Get a Solution.</h4>
                        <p className="text-slate-400">Due to its widespread use as filler text for layouts, non-readability is of great importance: human perception is tuned to recognize certain patterns and repetitions in texts. If the distribution of letters visual impact.</p>
                        <ul className="list-none text-slate-400 mt-4">
                            <li className="mb-1 flex items-center"><BsCheckCircle className="text-red-600 text-base me-2"/> Digital Marketing Solutions for Tomorrow</li>
                            <li className="mb-1 flex items-center"><BsCheckCircle className="text-red-600 text-base me-2"/> Our Talented & Experienced Marketing Agency</li>
                            <li className="mb-1 flex items-center"><BsCheckCircle className="text-red-600 text-base me-2"/> Create your own skin to match your brand</li>
                        </ul>

                        <div className="mt-4">
                            <Link href="/page-aboutus" className="relative inline-flex items-center font-semibold tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:duration-500 text-red-600 hover:text-red-600 after:bg-red-600 duration-500">Find Out More <MdKeyboardArrowRight className="text-xl ms-1"/></Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container relative md:mt-24 mt-16">
                <div className="grid grid-cols-1 pb-8 text-center">
                    <h3 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">Clients Testimonials</h3>

                    <p className="text-slate-400 max-w-xl mx-auto">Start working with Tailwind CSS that can provide everything you need to generate awareness, drive traffic, connect.</p>
                </div>

                <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 mt-8 gap-[30px]">
                    {clientsData.map((item,index)=>{
                        return(
                            <ul className="space-y-8" key={index}>
                                <li className="shadow dark:shadow-gray-800 p-6">
                                    <div className="flex items-center pb-6 border-b border-gray-100 dark:border-gray-800">
                                        <Image src={item.image} width={64} height={64} className="h-16 w-16 rounded-full shadow dark:shadow-gray-800" alt="" />
    
                                        <div className="ps-4">
                                            <Link href="#" className="text-lg hover:text-red-600 duration-500 ease-in-out">{item.name}</Link>
                                            <p className="text-slate-400">{item.title}</p>
                                        </div>
                                    </div>
    
                                    <div className="mt-6">
                                        <p className="text-slate-400">{item.desc}</p>
                                        <ul className="list-none space-x-1 mb-0 text-amber-400 mt-2">
                                            <li className="inline"><i className="mdi mdi-star"></i></li>
                                            <li className="inline"><i className="mdi mdi-star"></i></li>
                                            <li className="inline"><i className="mdi mdi-star"></i></li>
                                            <li className="inline"><i className="mdi mdi-star"></i></li>
                                            <li className="inline"><i className="mdi mdi-star"></i></li>
                                        </ul>
                                    </div>
                                </li>
    
                                <li className="shadow dark:shadow-gray-800 p-6">
                                    <div className="flex items-center pb-6 border-b border-gray-100 dark:border-gray-800">
                                        <Image src={item.image1} width={64} height={64} className="h-16 w-16 rounded-full shadow dark:shadow-gray-800" alt="" />
    
                                        <div className="ps-4">
                                            <Link href="#" className="text-lg hover:text-red-600 duration-500 ease-in-out">{item.name1}</Link>
                                            <p className="text-slate-400">{item.title1}</p>
                                        </div>
                                    </div>
    
                                    <div className="mt-6">
                                        <p className="text-slate-400">{item.desc}</p>
                                        <ul className="list-none space-x-1 mb-0 text-amber-400 mt-2">
                                            <li className="inline"><i className="mdi mdi-star"></i></li>
                                            <li className="inline"><i className="mdi mdi-star"></i></li>
                                            <li className="inline"><i className="mdi mdi-star"></i></li>
                                            <li className="inline"><i className="mdi mdi-star"></i></li>
                                            <li className="inline"><i className="mdi mdi-star"></i></li>
                                        </ul>
                                    </div>
                                </li>
                            </ul>
                        )
                    })}
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
                                    <Image src="/images/law/bg2.jpg" width={0} height={0} sizes='100vw' style={{height:"auto", width:"100%"}} className="shadow-lg" alt="" />
                                    <div className="absolute bottom-2/4 translate-y-2/4 start-0 end-0 text-center">
                                        <Link href="#" onClick={() => setOpen(true)} data-id="S_CGed6E610"
                                            className="lightbox h-20 w-20 rounded-full shadow-lg dark:shadow-gray-800 inline-flex items-center justify-center bg-white dark:bg-slate-900 text-red-600 dark:text-white">
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
                                                <h6 className="text-white/50 text-lg font-semibold">Team</h6>
                                                <h3 className="md:text-3xl text-2xl md:leading-normal leading-normal font-semibold text-white mt-2">Meet Experience <br /> Team Member</h3>
                                            </div>
                                        </div>

                                        <div className="mt-8">
                                            <div className="section-title text-md-start">
                                                <p className="text-white/50 max-w-xl mx-auto mb-2">Start working with Techwind that can provide everything you need to generate awareness, drive traffic, connect.</p>
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

            <div className="absolute bottom-0 start-0 end-0 sm:h-2/3 h-4/5 bg-gradient-to-b from-red-500 to-red-600"></div>
        </section>

        
        <section className="relative md:pt-24 pt-16">
            <div className="container relative">
                <div className="grid grid-cols-1 pb-8 text-center">
                    <h6 className="text-red-600 text-base mb-2">Our Minds</h6>
                    <h3 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">Management Team</h3>

                    <p className="text-slate-400 max-w-xl mx-auto">Start working with Tailwind CSS that can provide everything you need to generate awareness, drive traffic, connect.</p>
                </div>
                <TeamData/>
            </div>
        </section>

        <section className="container relative md:py-24 py-16">
            <BlogTwo/>
        </section>

        <Footer/>
        <Switcher/>
        <CookieModal/>
        </>
    )
}