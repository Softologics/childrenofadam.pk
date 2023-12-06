"use client"
import React, { useState ,useEffect} from 'react'
import Link from 'next/link'
import Image from 'next/image'
import dynamic from 'next/dynamic';

const Navbar = dynamic(()=>import('../componets/Navbar/navbar'));
const Footer = dynamic(()=>import('../componets/Footer/footer'));
const CookieModal = dynamic(()=>import('../componets/cookieModal'));
const ClientsOne = dynamic(()=>import('../componets/clientsOne'));
const GetInTuct = dynamic(()=>import('../componets/getInTuch'));
const Switcher = dynamic(()=>import('../componets/switcher'));

import CountUp from 'react-countup';
import ModalVideo from 'react-modal-video'
import "../../../node_modules/react-modal-video/css/modal-video.css";
const TinySlider = dynamic(()=>import('tiny-slider-react'), {ssr:false});

import {LuAirplay,LuAtom} from 'react-icons/lu'
import {VscMention} from 'react-icons/vsc'
import {TbAward, TbCurrencyBitcoin,TbPlayerPause} from 'react-icons/tb'
import {BsBriefcase, BsSuitClub,BsCheckCircle,} from 'react-icons/bs'
import {BiDna, BiLogoDribbble, BiCube, BiMicrophone, BiBookmark, BiArrowToLeft, BiArrowToRight,} from 'react-icons/bi'
import {AiOutlineStar, AiOutlineCompass} from 'react-icons/ai'
import {LiaDiscord} from 'react-icons/lia'
import {MdOutlineBrightness5} from 'react-icons/md'
import {SlBookOpen} from 'react-icons/sl'
import {RiBatteryChargeLine, RiBitCoinLine,} from 'react-icons/ri'
import {RxLightningBolt} from 'react-icons/rx'
import {PiBellSimpleRingingBold} from 'react-icons/pi'
import {FaArrowRight} from 'react-icons/fa'

const settings = {
    container: '.tiny-three-item',
    controls: false,
    mouseDrag: true,
    loop: true,
    rewind: true,
    autoplay: true,
    autoplayButtonOutput: false,
    autoplayTimeout: 3000,
    navPosition: "bottom",
    controlsText: ['<i className="mdi mdi-chevron-left "></i>', '<i className="mdi mdi-chevron-right"></i>'],
    speed: 400,
    gutter: 12,
    responsive: {
        992: {
            items: 3
        },

        767: {
            items: 2
        },

        320: {
            items: 1
        },
    },
}

export default function IndexPodcast(){
    useEffect(() => {
        if (typeof window !== "undefined"){
          document.documentElement.setAttribute("dir", "ltr");
          document.documentElement.classList.add('light');
        }
      }, []);
    const [isOpen, setOpen] = useState(false)
    const categoriesData = [
        {
            icon:LuAirplay,
            title:'Art'
        },
        {
            icon:VscMention,
            title:'Comedy'
        },
        {
            icon:TbAward,
            title:'News'
        },
        {
            icon:BsBriefcase,
            title:'Business'
        },
        {
            icon:BiDna,
            title:'Entertainment'
        },
        {
            icon:BiLogoDribbble,
            title:'Education'
        },
        {
            icon:AiOutlineStar,
            title:'Movies'
        },
        {
            icon:LiaDiscord,
            title:'Culture'
        },
        {
            icon:BiCube,
            title:'Relationship'
        },
        {
            icon:AiOutlineCompass,
            title:'Travel'
        },
        {
            icon:BsSuitClub,
            title:'Science'
        },
        {
            icon:BsCheckCircle,
            title:'Corporatert'
        },
        {
            icon:MdOutlineBrightness5,
            title:'Sports'
        },
        {
            icon:SlBookOpen,
            title:'Family & Friends'
        },
        {
            icon:RiBatteryChargeLine,
            title:'Design'
        },
        {
            icon:RxLightningBolt,
            title:'Banking'
        },
        {
            icon:LuAtom,
            title:'Goveronment'
        },
        {
            icon:PiBellSimpleRingingBold,
            title:'Web Development'
        },
        {
            icon:RiBitCoinLine,
            title:'NFT'
        },
        {
            icon:TbCurrencyBitcoin,
            title:'Stock Market'
        },
    ]
    const posdcastData = [
        {
            image:'/images/podcast/p1.jpg',
            title:'Design your apps in your own way',
            desc:'The phrasal sequence of the is now so that many campaign and benefit'
        },
        {
            image:'/images/podcast/p2.jpg',
            title:'How apps is changing the IT world',
            desc:'The phrasal sequence of the is now so that many campaign and benefit'
        },
        {
            image:'/images/podcast/p3.jpg',
            title:'Smartest Applications for Business',
            desc:'The phrasal sequence of the is now so that many campaign and benefit'
        },
        {
            image:'/images/podcast/p4.jpg',
            title:'Design your apps in your own way',
            desc:'The phrasal sequence of the is now so that many campaign and benefit'
        },
        {
            image:'/images/podcast/p5.jpg',
            title:'How apps is changing the IT world',
            desc:'The phrasal sequence of the is now so that many campaign and benefit'
        },
        {
            image:'/images/podcast/p6.jpg',
            title:'Smartest Applications for Business',
            desc:'The phrasal sequence of the is now so that many campaign and benefit'
        },
    ]
    return(
        <>
        <Navbar/>
        <section className="relative table w-full py-36 lg:py-44 bg-gradient-to-br from-red-600/20 to-yellow-500/20 dark:from-red-600/20 dark:to-yellow-500/20">
            <div className="container relative">
                <div className="grid lg:grid-cols-12 md:grid-cols-2 grid-cols-1 items-center mt-10 gap-[30px]">
                    <div className="lg:col-span-7">
                        <div className="me-6">
                            <BiMicrophone className="text-red-600 text-4xl"/>
                            <h4 className="font-bold lg:leading-normal leading-normal text-4xl lg:text-[54px] my-5 text-black dark:text-white">Find and Listen on <br/> your <span className="text-red-600">favorite podcast</span></h4>
                            <p className="text-slate-500 text-lg max-w-xl">Launch your campaign and benefit from our expertise on designing and managing conversion centered Tailwind CSS v3.x html page.</p>
                        
                            <div className="mt-8">
                                <Link href="#!" onClick={() => setOpen(true)}  className="lightbox py-1.5 ps-5 pe-2 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-red-600 hover:bg-red-700 border-red-600 hover:border-red-700 text-white rounded-full">Listen Now <span className="h-8 w-8 inline-flex items-center justify-center rounded-full bg-white border border-white text-red-600 ms-3"><i className="mdi mdi-play"></i></span></Link>
                            </div>
                            <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="S_CGed6E610" onClose={() => setOpen(false)} />
                        </div>
                    </div>

                    <div className="lg:col-span-5 relative">
                        <div className="grid grid-cols-2 items-center md:gap-4 gap-3">
                            <div className="md:space-y-4 space-y-3">
                                <Image src='/images/podcast/h2.jpg' width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto'}} className="border-[3px] border-gray-100 dark:border-gray-800 rounded-lg" alt=""/>
                                <Image src='/images/podcast/h1.jpg' width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto'}}  className="border-[3px] border-gray-100 dark:border-gray-800 rounded-lg" alt=""/>
                            </div>
    
                            <div className="md:space-y-4 space-y-3">
                                <Image src='/images/podcast/h3.jpg' width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto'}}  className="border-[3px] border-gray-100 dark:border-gray-800 rounded-lg" alt=""/>
                                <Image src='/images/podcast/h4.jpg' width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto'}}  className="border-[3px] border-gray-100 dark:border-gray-800 rounded-lg" alt=""/>
                            </div>
                        </div>

                        <span className="w-24 h-24 bg-yellow-500 border-[3px] border-gray-100 dark:border-gray-800 rounded-full absolute bottom-0 -end-4 flex items-center justify-center">
                            <span className="text-white text-xl text-center font-semibold">
                                <CountUp className="counter-value block" start={100} end={551} />
                                <span className="text-white font-semibold text-sm block">Podcasts</span>
                            </span>
                        </span>

                        <div className="absolute top-1/2 -translate-y-1/2 -start-4 py-2 px-3 flex items-center rounded-lg shadow-md dark:shadow-gray-800 bg-white dark:bg-slate-900 w-fit my-3">
                            <BiMicrophone className="text-red-600 text-xl align-middle"/> <span className="font-semibold ms-1">Amazing Conversation</span>
                        </div>

                        <div className="absolute -top-4 start-1/2 -translate-x-1/2 text-center">
                            <Link href="#!" onClick={() => setOpen(true)}  className="lightbox h-20 w-20 rounded-full shadow-md dark:shadow-gyay-700 inline-flex items-center justify-center text-white bg-red-600">
                               <BiMicrophone className="inline-flex items-center justify-center text-2xl"/>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="relative md:py-24 py-16 bg-gray-50 dark:bg-slate-800">
            <div className="container relative">
                <div className="grid md:grid-cols-12 grid-cols-1 items-center md:gap-[30px] gap-12">
                    <div className="md:col-span-5">
                        <div className="relative">
                            <div className="shadow-md dark:shadow-gray-800 rounded-t-full border-8 border-gray-200 dark:border-gray-900">
                                <Image src='/images/podcast/ab.jpg' width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto'}}  className="shadow-md rounded-t-full" alt=""/>
                            </div>

                            <div className="absolute -bottom-6 -end-2">
                                <div className="bg-white dark:bg-slate-800 w- rounded-xl shadow-md dark:shadow-gray-800 w-[300px] border-b border-gray-100 dark:border-gray-600">
                                    <div className="p-6 space-y-6">
                                        <div className="flex items-center space-x-3">
                                            <Image src='/images/logo-icon-30.png' width={30} height={30} alt=""/>
                                            <h5 className="text-xl font-semibold">Techwind Podcast</h5>
                                        </div>
                                        <div className="space-y-2">
                                            <div className="relative">
                                                <div className="bg-gray-100 dark:bg-slate-700 rounded-full overflow-hidden">
                                                    <div className="bg-red-600 w-1/2 h-1.5" role="progressbar" aria-label="music progress"></div>
                                                </div>
                                                <div className="ring-red-600 ring-2 absolute left-1/2 top-1/2 w-4 h-4 -mt-2 -ml-2 flex items-center justify-center bg-white rounded-full shadow">
                                                    <div className="w-1.5 h-1.5 bg-red-600 rounded-full ring-1 ring-inset ring-slate-900/5"></div>
                                                </div>
                                            </div>
                                            <div className="flex justify-between text-sm leading-6 font-medium tabular-nums">
                                                <div className="text-red-600">24:16</div>
                                                <div className="text-slate-400">75:50</div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="bg-gray-50 dark:bg-slate-700 flex items-center rounded-b-xl">
                                        <div className="flex-auto flex items-center justify-evenly">
                                            <button type="button" aria-label="Add to favorites">
                                                <BiBookmark className="text-xl text-slate-400 hover:text-red-600"/>
                                            </button>
                                            <button type="button" className="hidden sm:block lg:hidden xl:block" aria-label="Previous">
                                                <BiArrowToLeft className="text-2xl text-slate-400 hover:text-red-600"/>
                                            </button>
                                        </div>
                                        <button type="button" className="bg-white dark:bg-slate-800 flex-none -my-2 mx-auto w-20 h-20 rounded-full border border-gray-100 dark:border-gray-600 shadow-md flex items-center justify-center" aria-label="Pause">
                                            <TbPlayerPause className="text-4xl text-slate-400 hover:text-red-600"/> 
                                        </button>
                                        <div className="flex-auto flex items-center justify-evenly">
                                            <button type="button" className="hidden sm:block lg:hidden xl:block" aria-label="Next">
                                                <BiArrowToRight className="text-2xl text-slate-400 hover:text-red-600"/>
                                            </button>
                                            <button type="button" className="text-slate-400 hover:text-red-600">1x</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="md:col-span-7">
                        <div className="lg:ms-4">
                            <h4 className="mb-6 md:text-4xl text-3xl lg:leading-normal leading-normal font-bold">Listen podcast anytime <br/> and anyware you want</h4>
                            <p className="text-slate-400 max-w-xl mb-2">Techwind Homes developed a platform for the Real Estate marketplace that allows buyers and sellers to easily execute a transaction on their own.</p>
                            <p className="text-slate-400 max-w-xl">The platform drives efficiency, cost transparency and control into the hands of the consumers. Techwind Homes is Real Estate Redefined.</p>
                            
                            <div className="mt-4">
                                <Link href="" className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-red-600 hover:bg-red-700 border-red-600 hover:border-red-700 text-white rounded-md mt-3">Learn More </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="relative md:py-24 py-16">
            <div className="container relative">
                <div className="grid grid-cols-1 pb-8 text-center">
                    <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Explore Podcast Categories</h3>

                    <p className="text-slate-400 max-w-xl mx-auto">Start working with Tailwind CSS that can provide everything you need to generate awareness, drive traffic, connect.</p>
                </div>

                <div className="flex justify-center items-center text-center mt-8">
                    <ul className="list-none space-x-3 space-y-4">
                        {categoriesData.map((item, index) => {
                            const Icons = item.icon
                            return(
                            <li className="inline-block" key={index}>
                                <Link href="" className="group flex items-center bg-white dark:bg-slate-900 hover:text-red-600 shadow hover:shadow-md dark:shadow-gray-800 hover:dark:shadow-gray-800 border-4 border-double border-gray-100 hover:border-red-600/30 dark:border-gray-800 hover:dark:border-red-600/50 py-1.5 px-4 rounded-full align-middle duration-500">
                                    <Icons className="me-2 text-[18px]"/>
                                    <span className="text-[18px] font-medium">{item.title}</span>
                                </Link>
                            </li>
                            )
                        })}
                    </ul>
                </div>
            </div>

            <div className="container relative md:mt-24 mt-16">
                <div className="grid md:grid-cols-12 grid-cols-1 items-center">
                    <div className="md:col-span-6">
                        <h6 className="text-red-600 text-sm font-bold uppercase mb-2">Podcasts</h6>
                        <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">All Podcasts from <br/> Audio & Video</h3>
                    </div>

                    <div className="md:col-span-6">
                        <p className="text-slate-400 max-w-xl">Start working with Techwind that can provide everything you need to generate awareness, drive traffic, connect.</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 relative mt-8">
                    <div className="tiny-three-item-icon">
                    <TinySlider settings={settings}>
                        {posdcastData.map((item, index)=>{
                            return(
                                <div className="tiny-slide" key={index}>
                                    <div className="group relative rounded-md shadow dark:shadow-gray-800 overflow-hidden m-3">
                                        <div className="relative">
                                            <Image src={item.image} width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto'}}  alt=""/>
        
                                            <Link href="#!" onClick={() => setOpen(true)} className="lightbox h-8 w-8 inline-flex items-center justify-center rounded-full bg-white border border-white text-red-600 absolute top-3 end-3"><i className="mdi mdi-play"></i></Link>
        
                                            <div className="absolute start-0 bottom-0 opacity-0 group-hover:opacity-100 duration-500 ease-in-out">
                                                <div className="pb-4 ps-4 flex items-center">
                                                    <Image src='/images/client/01.jpg' width={0} height={0} className="h-10 w-10 rounded-full shadow-md dark:shadow-gray-800 mx-auto" alt=""/>
                                                    <div className="ms-3">
                                                        <Link href="" className="font-semibold text-white block">Calvin Carlo</Link>
                                                        <span className="text-white/70 text-sm">4k Subscribe</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
        
                                        <div className="content p-6">
                                            <audio controls className="block w-full max-w-md mx-auto mb-3">
                                                {/* <source src="assets/images/audio.mp3" type="audio/mpeg"/> */}
                                            </audio>
        
                                            <Link href="/blog-youtube-post" className="title h5 text-lg font-semibold hover:text-red-600 duration-500 ease-in-out">{item.title}</Link>
                                            <p className="text-slate-400 mt-3">{item.desc}</p>
                                            
                                            <div className="mt-4">
                                                <Link href="/blog-youtube-post" className="relative inline-flex items-center tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:duration-500 font-normal hover:text-red-600 after:bg-red-600 duration-500 ease-in-out">Watch Now <FaArrowRight className='ms-1 text-[10px]'/></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </TinySlider>
                    </div>
                </div>
            </div>

            <div className="container relative md:mt-24 mt-16">
                <div className="grid grid-cols-1 pb-8 text-center">
                    <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Choose Pricing Plan</h3>

                    <p className="text-slate-400 max-w-xl mx-auto">Start working with Techwind that can provide everything you need to generate awareness, drive traffic, connect.</p>
                </div>

                <div className="grid lg:grid-cols-4 md:grid-cols-2 mt-8 gap-[30px]">
                    <div className="group border-b-[3px] dark:border-gray-700 p-6 py-8 hover:border-red-600 dark:hover:border-red-600 duration-500 hover:scale-105 relative overflow-hidden shadow dark:shadow-gray-800 rounded-md bg-gray-50 dark:bg-slate-800 hover:bg-white dark:hover:bg-slate-900 h-fit">
                        <h6 className="font-bold uppercase mb-5 text-red-600">Free</h6>

                        <div className="flex mb-5">
                            <span className="text-xl font-semibold">$</span>
                            <span className="price text-4xl font-semibold mb-0">0</span>
                            <span className="text-xl font-semibold self-end mb-1">/mo</span>
                        </div>

                        <ul className="list-none text-slate-400">
                            <li className="mb-1 flex items-center"><BsCheckCircle className=" text-red-600 text-xl me-2"/> Full Access</li>
                            <li className="mb-1 flex items-center"><BsCheckCircle className=" text-red-600 text-xl me-2"/> Source Files</li>
                        </ul>
                        <Link href="" className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-red-600 hover:bg-red-700 border-red-600 hover:border-red-700 text-white rounded-md mt-5">Signup</Link>
                    </div>

                    <div className="group border-b-[3px] dark:border-gray-700 p-6 py-8 hover:border-red-600 dark:hover:border-red-600 duration-500 hover:scale-105 relative overflow-hidden shadow dark:shadow-gray-800 rounded-md bg-gray-50 dark:bg-slate-800 hover:bg-white dark:hover:bg-slate-900 h-fit">
                        <h6 className="font-bold uppercase mb-5 text-red-600">Starter</h6>

                        <div className="flex mb-5">
                            <span className="text-xl font-semibold">$</span>
                            <span className="price text-4xl font-semibold mb-0">9</span>
                            <span className="text-xl font-semibold self-end mb-1">/mo</span>
                        </div>

                        <ul className="list-none text-slate-400">
                            <li className="mb-1 flex items-center"><BsCheckCircle className=" text-red-600 text-xl me-2"/> Full Access</li>
                            <li className="mb-1 flex items-center"><BsCheckCircle className=" text-red-600 text-xl me-2"/> Source Files</li>
                            <li className="mb-1 flex items-center"><BsCheckCircle className=" text-red-600 text-xl me-2"/>Enhanced Security</li>
                        </ul>
                        <Link href="" className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-red-600 hover:bg-red-700 border-red-600 hover:border-red-700 text-white rounded-md mt-5">Buy Now</Link>
                    </div>

                    <div className="group border-b-[3px] border-red-600 p-6 py-8 duration-500 hover:scale-105 relative overflow-hidden shadow dark:shadow-gray-800 rounded-md bg-white dark:bg-slate-900 h-fit">
                        <span className="absolute -end-11 -top-[10px] ltr:rotate-[45deg] rtl:-rotate-[45deg] w-32 h-16 pt-4 px-2 pb-0 flex items-center justify-center text-white bg-amber-500 font-semibold text-lg">Best</span>
                        <h6 className="font-bold uppercase mb-5 text-red-600">Business</h6>

                        <div className="flex mb-5">
                            <span className="text-xl font-semibold">$</span>
                            <span className="price text-4xl font-semibold mb-0">74</span>
                            <span className="text-xl font-semibold self-end mb-1">/mo</span>
                        </div>

                        <ul className="list-none text-slate-400">
                            <li className="mb-1 flex items-center"><BsCheckCircle className=" text-red-600 text-xl me-2"/> Full Access</li>
                            <li className="mb-1 flex items-center"><BsCheckCircle className=" text-red-600 text-xl me-2"/> Source Files</li>
                            <li className="mb-1 flex items-center"><BsCheckCircle className=" text-red-600 text-xl me-2"/> Free Appointments</li>
                            <li className="mb-1 flex items-center"><BsCheckCircle className=" text-red-600 text-xl me-2"/> Enhanced Security</li>
                        </ul>
                        <Link href="" className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-red-600 hover:bg-red-700 border-red-600 hover:border-red-700 text-white rounded-md mt-5">Try it Now</Link>
                    </div>

                    <div className="group border-b-[3px] dark:border-gray-700 p-6 py-8 hover:border-red-600 dark:hover:border-red-600 duration-500 hover:scale-105 relative overflow-hidden shadow dark:shadow-gray-800 rounded-md bg-gray-50 dark:bg-slate-800 hover:bg-white dark:hover:bg-slate-900 h-fit">
                        <h6 className="font-bold uppercase mb-5 text-red-600">Professional</h6>

                        <div className="flex mb-5">
                            <span className="text-xl font-semibold">$</span>
                            <span className="price text-4xl font-semibold mb-0">99</span>
                            <span className="text-xl font-semibold self-end mb-1">/mo</span>
                        </div>

                        <ul className="list-none text-slate-400">
                            <li className="mb-1 flex items-center"><BsCheckCircle className=" text-red-600 text-xl me-2"/> Full Access</li>
                            <li className="mb-1 flex items-center"><BsCheckCircle className=" text-red-600 text-xl me-2"/> Source Files</li>
                            <li className="mb-1 flex items-center"><BsCheckCircle className=" text-red-600 text-xl me-2"/> Free Appointments</li>
                            <li className="mb-1 flex items-center"><BsCheckCircle className=" text-red-600 text-xl me-2"/> Enhanced Security</li>
                            <li className="mb-1 flex items-center"><BsCheckCircle className=" text-red-600 text-xl me-2"/> Free Installment</li>
                        </ul>
                        <Link href="" className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-red-600 hover:bg-red-700 border-red-600 hover:border-red-700 text-white rounded-md mt-5">Started Now</Link>
                    </div>
                </div>
            </div>

            <div className="relative md:mt-24 mt-16">
                <ClientsOne/>
            </div>
            <div className="container relative md:mt-24 mt-16">
                <GetInTuct/>
            </div>
        </section>
        <Footer/>
        <CookieModal/>
        <Switcher/>
        </>
    )
}