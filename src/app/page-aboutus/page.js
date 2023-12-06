"use client"
import React, {useState,useEffect} from 'react'
import Link from "next/link"
// import Image from "next/image"
import dynamic from "next/dynamic"

const Navbar = dynamic(()=>import('../componets/Navbar/navbar'));
const Footer = dynamic(()=>import('../componets/Footer/footer'));
const Switcher = dynamic(()=>import('../componets/switcher'));

// const CompanyLogo = dynamic(()=>import('../componets/companyLogo'));
// const KeyFeature = dynamic(()=>import('../componets/keyFeatures'));

// import * as Icon from 'react-feather';
import {MdKeyboardArrowRight} from "react-icons/md"
// import { FaRegEnvelope } from "react-icons/fa"

// import { teamData } from '../Data/data'

// import ModalVideo from 'react-modal-video'
import "../../../node_modules/react-modal-video/css/modal-video.css";

const TinySlider = dynamic(()=>import('tiny-slider-react'),{ssr: false,});
import '../../../node_modules/tiny-slider/dist/tiny-slider.css'

import CountUp from 'react-countup';

export default function AboutUs(){
    useEffect(() => {
        if (typeof window !== "undefined"){
          document.documentElement.setAttribute("dir", "ltr");
          document.documentElement.classList.add('light');
        }
      }, []);
    const [isOpen, setOpen] = useState(false)

    const settings = {
        container: '.tiny-single-item',
        items: 1,
        controls: false,
        mouseDrag: true,
        loop: true,
        rewind: true,
        autoplay: true,
        autoplayButtonOutput: false,
        autoplayTimeout: 3000,
        navPosition: "bottom",
        speed: 400,
        gutter: 16,
    }

    const services = [
        {
            image: "/images/client/amazon.svg",
            name: 'Thomas Israel',
            description: `" If the distribution of letters and words is random, the reader will not be distracted from making a neutral judgement on the visual impact and readability of the typefaces (typography), or the distribution of text on the page consists of a more or less random series of words or syllables. "`,
        },
        {
            image: "/images/client/google.svg",            
            name: 'Carl Oliver',
            description: `" If the distribution of letters and words is random, the reader will not be distracted from making a neutral judgement on the visual impact and readability of the typefaces (typography), or the distribution of text on the page consists of a more or less random series of words or syllables. "`,

        },
        {
            image:"/images/client/lenovo.svg",
            name: 'Barbara McIntosh',
            description: `" If the distribution of letters and words is random, the reader will not be distracted from making a neutral judgement on the visual impact and readability of the typefaces (typography), or the distribution of text on the page consists of a more or less random series of words or syllables. "`,
        },
        {
            image: "/images/client/paypal.svg",            
            name: 'Jill Webb',
            description: `" If the distribution of letters and words is random, the reader will not be distracted from making a neutral judgement on the visual impact and readability of the typefaces (typography), or the distribution of text on the page consists of a more or less random series of words or syllables. "`,
        },
        {
            image: "/images/client/shopify.svg",
            name: 'Dean Tolle',
            description: `" If the distribution of letters and words is random, the reader will not be distracted from making a neutral judgement on the visual impact and readability of the typefaces (typography), or the distribution of text on the page consists of a more or less random series of words or syllables. "`,
        },
        {
            image: "/images/client/spotify.svg",
            name: 'Christa Smith',
            description: `" If the distribution of letters and words is random, the reader will not be distracted from making a neutral judgement on the visual impact and readability of the typefaces (typography), or the distribution of text on the page consists of a more or less random series of words or syllables. "`,
        }
    ]

    return(
        <>
        <Navbar navClass="nav-light" />

        <section className="relative table w-full py-36 lg:py-44  bg-no-repeat bg-center bg-cover" style={{backgroundImage:"url('/images/childrenofadam/hospital.jpeg')"}}>
            <div className="absolute inset-0 bg-black opacity-75"></div>
            <div className="container relative">
                <div className="grid grid-cols-1 pb-8 text-center mt-10">
                    <h3 className="mb-6 md:text-4xl text-3xl md:leading-normal leading-normal font-medium text-white">About Us</h3>

                    {/* <p className="text-slate-300 text-lg max-w-xl mx-auto">Start working with Tailwind CSS that can provide everything you need to generate awareness, drive traffic, connect.</p> */}
                </div>
            </div>

            <div className="absolute text-center z-10 bottom-5 start-0 end-0 mx-3">
                <ul className=" tracking-[0.5px]  mb-0 inline-flex mx-auto space-x-1">
                    <li className="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out text-white/50 hover:text-white"><Link href="/">Children of Adam</Link></li>
                    <li className="inline-block text-base text-white/50 mx-0.5 ltr:rotate-0 rtl:rotate-180"><MdKeyboardArrowRight className="text-xl"/></li>
                    <li className="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out text-white" aria-current="page">Aboutus</li>
                </ul>
            </div>
        </section>

        <div className="relative">
            <div className="shape absolute sm:-bottom-px -bottom-[2px] start-0 end-0 overflow-hidden z-1 text-white dark:text-slate-900">
                <svg className="w-full h-auto scale-[2.0] origin-top" viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
                </svg>
            </div>
        </div>

        <section className="relative md:py-24 py-16">
            <div className="container relative">
                <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-[30px]">
                    <div className="lg:col-span-5 md:col-span-6">
                    <iframe width="100%" height="495" src="https://www.youtube.com/embed/08CS2tkKoYw" title="Children of Adam - Pakistan" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>

                    <div className="lg:col-span-7 md:col-span-6">
                        <div className="lg:ms-5">
                            <div className="flex mb-4">
                                <span className="text-red-600 text-2xl font-bold mb-0"><CountUp className="counter-value text-6xl font-bold" start={1} end={12}></CountUp>+</span>
                                <span className="self-end font-medium ms-2">Years <br /> Experience</span>
                            </div>

                            <h3 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">Who we are ?</h3>

                            <p className="text-slate-400 max-w-xl">Children of Adam (CoA) Pakistan was established as a Trust in May 12, 2020. Although we have recently been established in Pakistan but CoA as Bani Adam was registered in USA way back in 2011. CoA has been working in various parts of the world carrying out relief work and providing assistance to the people in the areas of food and shelter. We are present in the following countries: Afghanistan, Bangladesh, Rwanda, Syria, and Yemen.
CoA Pakistan focus projects in first phase are:
1. Informal Schools – Education for out of school children ;
2. Clean and Safe Pakistan – Hygiene Awareness and providing clean civic facilities and safe drinking water to the people.
3. Roshan Pakistan – Lighting homes especially in rural areas.
4. Equal opportunities to transgenders – Counseling, capacity building and providing job opportunities.
5. Eye Care – Providing state of the art treatment along with cataract surgeries in rural areas by establishing medical camps in collaboration with renowned hospitals and bringing medical specialists from outside Pakistan.
In addition to the above focus projects CoA shall carry out donor specific targeted projects.
CoA Pakistan has been established with the complete assistance of Bani Adam/CoA USA, however, in future for executing above projects it will need support of other donors. All projects of CoA have active involvement of community.</p>

                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="container relative mt-8">
                <CompanyLogo/>
            </div> */}

        </section>

        <Footer/>
        <Switcher/>
        </>

    )
}