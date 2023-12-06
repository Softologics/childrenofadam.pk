"use client"
import React, {useState,useEffect} from 'react'
import Link from "next/link"
import Image from "next/image"
import dynamic from "next/dynamic"

const Navbar = dynamic(()=>import('../componets/Navbar/navbar'));
const Footer = dynamic(()=>import('../componets/Footer/footer'));
const Switcher = dynamic(()=>import('../componets/switcher'));
const CookieModal = dynamic(()=>import('../componets/cookieModal'));

import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"

import * as Icon from 'react-feather';
import { FaArrowRight, FaRegEnvelope } from 'react-icons/fa'
import {BsPencil} from "react-icons/bs"

import { blogData } from '../Data/data'

export default function IndexBlog(){
    useEffect(() => {
        if (typeof window !== "undefined"){
          document.documentElement.setAttribute("dir", "ltr");
          document.documentElement.classList.add('light');
        }
      }, []);
    const [selectedCategory, setSelectedCategory] = useState(null);

    const data = [
        {
            id:1,
            image:"/images/blog/01.jpg",
            title:'Design your apps in your own way',
            desc:'The phrasal sequence of the is now so that many campaign and benefit',
            category:'business',
        },
        {
            id:2,
            image:"/images/blog/09.jpg",
            title:'Design your apps in your own way',
            desc:'The phrasal sequence of the is now so that many campaign and benefit',
            category:'tech',
        },
        {
            id:3,
            image:"/images/blog/10.jpg",
            title:'Design your apps in your own way',
            desc:'The phrasal sequence of the is now so that many campaign and benefit',
            category:'tech',
        }, 
         {
            id:4,
            image:"/images/blog/11.jpg",
            title:'Design your apps in your own way',
            desc:'The phrasal sequence of the is now so that many campaign and benefit',
            category:'tech',
        },
        {
            id:5,
            image:"/images/blog/12.jpg",
            title:'Design your apps in your own way',
            desc:'The phrasal sequence of the is now so that many campaign and benefit',
            category:'lifestyle',
        },
        {
            id:6,
            image:"/images/food/blog/1.jpg",
            title:'Design your apps in your own way',
            desc:'The phrasal sequence of the is now so that many campaign and benefit',
            category:'food',
        },
        {
            id:7,
            image:"/images/blog/13.jpg",
            title:'Design your apps in your own way',
            desc:'The phrasal sequence of the is now so that many campaign and benefit',
            category:'lifestyle',
        },
        {
            id:8,
            image:"/images/blog/14.jpg",
            title:'Design your apps in your own way',
            desc:'The phrasal sequence of the is now so that many campaign and benefit',
            category:'business',
        },
        {
            id:9,
            image:"/images/food/blog/2.jpg",
            title:'Design your apps in your own way',
            desc:'The phrasal sequence of the is now so that many campaign and benefit',
            category:'food',
        },
    ]
    const matchCategory = (category) => {
        setSelectedCategory(category);
    };

    const filteredData = selectedCategory
        ? data.filter((item) => item.category === selectedCategory)
        : data;
    return(
        <>
        <Navbar navClass="nav-light"/>

        <section className="relative md:pt-60 pt-40 md:pb-64 pb-56 flex items-center bg-center bg-no-repeat bg-cover jarallax bg-fixed" style={{backgroundImage:"url('/images/blog/bg1.jpg')"}}>
            <div className="absolute inset-0 bg-slate-900/40"></div>
            <div className="container relative">
                <div className="md:flex justify-center mt-10">
                    <div className="w-full">
                        <span className="flex items-center">
                            <Image src="/images/client/05.jpg" width={32} height={32} className="h-8 rounded-full shadow dark:shadow-gray-800" alt="" />

                            <span className="ms-1 text-lg"><span className="text-white/80 mx-1">by</span> <Link href="#" className="text-white">Cristino Loly</Link></span>
                            <span className="ms-1 text-lg"><span className="text-white/80 mx-1">in</span> <Link href="#" className="text-white">Business</Link></span>
                        </span>

                        <Link href="#" className="font-bold text-white leading-snug text-[30px] lg:text-[42px] mt-6 block">Establishing that <br /> you have something to say</Link>

                        <div className="mt-8">
                            <Link href="#" className="py-2 px-5 inline-flex items-center font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-red-600 hover:bg-red-700 border-red-600 hover:border-red-700 text-white rounded-md">Read Article <FaArrowRight className="ms-2 text-[10px]"/></Link>
                        </div>
                    </div>
                </div>
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
                <div className="grid grid-cols-1 justify-center">
                    <div className="relative z-2 transition-all duration-500 ease-in-out sm:-mt-[220px] -mt-[200px] m-0">
                        <div className="filters-group-wrap">
                            <div className="filters-group">
                                <ul className="mb-0 list-none container-filter-white filter-options text-center">
                                    <li className={`${selectedCategory === null ? 'active' : ''} inline-block text-lg font-semibold mx-2 mb-3 cursor-pointer relative border-b border-transparent text-white/70 transition duration-500`} data-group="all" onClick={() => matchCategory(null)}>All</li>
                                    <li className={`${selectedCategory === 'business' ? 'active' : ''} inline-block text-lg font-semibold mx-2 mb-3 cursor-pointer relative border-b border-transparent text-white/70 transition duration-500`} data-group="business" onClick={() => matchCategory('business')}>Business</li>
                                    <li className={`${selectedCategory === 'tech' ? 'active' : ''} inline-block text-lg font-semibold mx-2 mb-3 cursor-pointer relative border-b border-transparent text-white/70 transition duration-500`} data-group="tech" onClick={() => matchCategory('tech')}>Technology</li>
                                    <li className={`${selectedCategory === 'lifestyle' ? 'active' : ''} inline-block text-lg font-semibold mx-2 mb-3 cursor-pointer relative border-b border-transparent text-white/70 transition duration-500`} data-group="lifestyle" onClick={() => matchCategory('lifestyle')}>Lifestyle</li>
                                    <li className={`${selectedCategory === 'food' ? 'active' : ''} inline-block text-lg font-semibold mx-2 mb-3 cursor-pointer relative border-b border-transparent text-white/70 transition duration-500`} data-group="food" onClick={() => matchCategory('food')}>Food</li>
                                </ul>
                            </div>
                        </div>
                    <ResponsiveMasonry  columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}} >
                        <Masonry>
                            {filteredData.map((item,index)=>{
                                return(
                                    <div className="p-3 picture-item" data-groups='["business"]' key={index}>
                                    <div className="blog relative rounded-md shadow dark:shadow-gray-800 overflow-hidden">
                                        <Image src={item.image} width={0} height={0} sizes='100vw' style={{width:"100%", height:"auto"}} alt="" />

                                        <div className="content p-6">
                                            <Link href="/blog-detail" className="title h5 text-lg font-medium hover:text-red-600 duration-500 ease-in-out">{item.title}</Link>
                                            <p className="text-slate-400 mt-3">{item.desc}</p>

                                            <div className="mt-4">
                                                <Link href="/blog-detail" className="relative inline-flex items-center font-normal tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:duration-500 hover:text-red-600 after:bg-red-600 duration-500">Read More <FaArrowRight className="ms-2 text-[10px]"/></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                )
                            })}
                        </Masonry>
                    </ResponsiveMasonry>   
                    </div>
                </div>
            </div>

            <div className="container relative mt-16">
                <div className="relative bg-white dark:bg-slate-900 lg:px-8 px-6 py-10 rounded-xl shadow dark:shadow-gray-800 overflow-hidden">
                    <div className="grid md:grid-cols-2 grid-cols-1 items-center gap-[30px]">
                        <div className="md:text-start text-center z-1">
                            <h3 className="md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">Subscribe to Newsletter!</h3>
                            <p className="text-slate-400 max-w-xl mx-auto mt-2">Subscribe to get latest updates and information.</p>
                        </div>

                        <div className="subcribe-form z-1">
                            <form className="relative max-w-xl">
                                <input type="email" id="subcribe" name="email" className="pt-4 pe-40 pb-4 ps-6 w-full h-[50px] outline-none text-black dark:text-white rounded-full bg-white dark:bg-slate-900 shadow dark:shadow-gray-800" placeholder="Your Email Address :" />
                                <button type="submit" className="py-2 px-5 inline-block font-semibold tracking-wide align-middle transition duration-500 ease-in-out text-base text-center absolute top-[2px] end-[3px] h-[46px] bg-red-600 hover:bg-red-700 border border-red-600 hover:border-red-700 text-white rounded-full">Subscribe</button>
                            </form>
                        </div>
                    </div>

                    <div className="absolute -top-5 -start-5">
                        <FaRegEnvelope className="lg:text-[150px] text-7xl text-slate-900/5 dark:text-white/5 -rotate-45"/>
                    </div>

                    <div className="absolute -bottom-5 -end-5">
                        <BsPencil className="lg:text-[150px] text-7xl text-slate-900/5 dark:text-white/5" />
                    </div>
                </div>
            </div>

            <div className="container relative mt-16">
                <div className="grid md:grid-cols-12 grid-cols-1 pb-8 items-end">
                    <div className="lg:col-span-8 md:col-span-6 md:text-start text-center">
                        <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Our Featured News Post</h3>
                        <p className="text-slate-400 max-w-xl">Search your future opportunity with our categories</p>
                    </div>

                    <div className="lg:col-span-4 md:col-span-6 md:text-end hidden md:block">
                        <Link href="#" className="relative inline-flex items-center font-semibold tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:transition-all after:duration-500 text-slate-400 hover:text-red-600 after:bg-red-600 duration-500 ease-in-out">All Categories <FaArrowRight className="ms-2 text-[10px]"/></Link>
                    </div>
                </div>

                <div className="grid md:grid-cols-12 grid-cols-1 mt-8 gap-[30px]">
                    <div className="lg:col-span-8 md:col-span-6">
                        <div className="grid grid-cols-1 gap-[30px]">
                            {blogData.slice(0,7).map((item,index)=>{
                                return(
                                <div key={index} className="blog relative rounded-md shadow dark:shadow-gray-800 overflow-hidden">
                                    <div className="lg:flex relative">
                                        <div className="relative md:shrink-0">
                                            <Image className="h-full w-full object-cover lg:w-52 lg:h-56" src={item.Image} width={0} height={0} sizes='100vw' style={{width:"100%", height:"auto"}} alt="" />
                                        </div>
                                        <div className="p-6 flex flex-col lg:h-56 justify-center">
                                            <Link href={`/blog-detail/${item.id}`} className="title h5 text-lg font-medium hover:text-red-600 duration-500 ease-in-out">Take a break through the countryside</Link>
                                            <div className="my-auto">
                                                <p className="text-slate-400 mt-3">The phrasal sequence of the is now so that many campaign and benefit</p>
                                            </div>

                                            <div className="mt-4">
                                                <Link href={`/blog-detail/${item.id}`} className="relative inline-flex items-center font-normal tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:duration-500 hover:text-red-600 after:bg-red-600 duration-500">Read More <FaArrowRight className="ms-2 text-[10px]"/></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                )
                            })}
                        </div>
                    </div>

                    <div className="lg:col-span-4 md:col-span-6">
                        <div className="sticky top-20">
                            <h5 className="text-lg font-semibold bg-gray-50 dark:bg-slate-800 shadow dark:shadow-gray-800 rounded-md p-2 text-center">Recent post</h5>
                            <div className="flex items-center mt-8">
                                <Image src="/images/blog/06.jpg" width={96} height={64} className="h-16 rounded-md shadow dark:shadow-gray-800" alt="" />

                                <div className="ms-3">
                                    <Link href="#" className="font-semibold hover:text-red-600">Consultant Business</Link>
                                    <p className="text-sm text-slate-400">1st May 2022</p>
                                </div>
                            </div>

                            <div className="flex items-center mt-4">
                                <Image src="/images/blog/07.jpg" width={96} height={64} className="h-16 rounded-md shadow dark:shadow-gray-800" alt="" />

                                <div className="ms-3">
                                    <Link href="#" className="font-semibold hover:text-red-600">Grow Your Business</Link>
                                    <p className="text-sm text-slate-400">1st May 2022</p>
                                </div>
                            </div>

                            <div className="flex items-center mt-4">
                                <Image src="/images/blog/08.jpg" width={96} height={64} className="h-16 rounded-md shadow dark:shadow-gray-800" alt="" />

                                <div className="ms-3">
                                    <Link href="#" className="font-semibold hover:text-red-600">Look On The Glorious Balance</Link>
                                    <p className="text-sm text-slate-400">1st May 2022</p>
                                </div>
                            </div>

                            <h5 className="text-lg font-semibold bg-gray-50 dark:bg-slate-800 shadow dark:shadow-gray-800 rounded-md p-2 text-center mt-8">Social sites</h5>
                            <ul className="list-none text-center mt-8 space-x-1">
                                <li className="inline"><Link href="#" className="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center border border-gray-100 dark:border-gray-800 rounded-md text-slate-400 hover:border-red-600 hover:text-white hover:bg-red-600"><Icon.Facebook className="h-4 w-4"></Icon.Facebook></Link></li>
                                <li className="inline"><Link href="#" className="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center border border-gray-100 dark:border-gray-800 rounded-md text-slate-400 hover:border-red-600 hover:text-white hover:bg-red-600"><Icon.Instagram className="h-4 w-4"></Icon.Instagram></Link></li>
                                <li className="inline"><Link href="#" className="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center border border-gray-100 dark:border-gray-800 rounded-md text-slate-400 hover:border-red-600 hover:text-white hover:bg-red-600"><Icon.Twitter className="h-4 w-4"></Icon.Twitter></Link></li>
                                <li className="inline"><Link href="#" className="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center border border-gray-100 dark:border-gray-800 rounded-md text-slate-400 hover:border-red-600 hover:text-white hover:bg-red-600"><Icon.Linkedin className="h-4 w-4"></Icon.Linkedin></Link></li>
                                <li className="inline"><Link href="#" className="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center border border-gray-100 dark:border-gray-800 rounded-md text-slate-400 hover:border-red-600 hover:text-white hover:bg-red-600"><Icon.GitHub className="h-4 w-4"></Icon.GitHub></Link></li>
                                <li className="inline"><Link href="#" className="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center border border-gray-100 dark:border-gray-800 rounded-md text-slate-400 hover:border-red-600 hover:text-white hover:bg-red-600"><Icon.Youtube className="h-4 w-4"></Icon.Youtube></Link></li>
                                <li className="inline"><Link href="#" className="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center border border-gray-100 dark:border-gray-800 rounded-md text-slate-400 hover:border-red-600 hover:text-white hover:bg-red-600"><Icon.Gitlab className="h-4 w-4"></Icon.Gitlab></Link></li>
                            </ul>

                            <h5 className="text-lg font-semibold bg-gray-50 dark:bg-slate-800 shadow dark:shadow-gray-800 rounded-md p-2 text-center mt-8">Tagscloud</h5>
                            <ul className="list-none text-center mt-8 space-x-1">
                                <li className="inline-block m-2"><Link href="#" className="px-3 py-1 text-slate-400 hover:text-white dark:hover:text-white bg-gray-50 dark:bg-slate-800 text-sm hover:bg-red-600 dark:hover:bg-red-600 rounded-md shadow dark:shadow-gray-800 transition-all duration-500 ease-in-out">Business</Link></li>
                                <li className="inline-block m-2"><Link href="#" className="px-3 py-1 text-slate-400 hover:text-white dark:hover:text-white bg-gray-50 dark:bg-slate-800 text-sm hover:bg-red-600 dark:hover:bg-red-600 rounded-md shadow dark:shadow-gray-800 transition-all duration-500 ease-in-out">Finance</Link></li>
                                <li className="inline-block m-2"><Link href="#" className="px-3 py-1 text-slate-400 hover:text-white dark:hover:text-white bg-gray-50 dark:bg-slate-800 text-sm hover:bg-red-600 dark:hover:bg-red-600 rounded-md shadow dark:shadow-gray-800 transition-all duration-500 ease-in-out">Marketing</Link></li>
                                <li className="inline-block m-2"><Link href="#" className="px-3 py-1 text-slate-400 hover:text-white dark:hover:text-white bg-gray-50 dark:bg-slate-800 text-sm hover:bg-red-600 dark:hover:bg-red-600 rounded-md shadow dark:shadow-gray-800 transition-all duration-500 ease-in-out">Fashion</Link></li>
                                <li className="inline-block m-2"><Link href="#" className="px-3 py-1 text-slate-400 hover:text-white dark:hover:text-white bg-gray-50 dark:bg-slate-800 text-sm hover:bg-red-600 dark:hover:bg-red-600 rounded-md shadow dark:shadow-gray-800 transition-all duration-500 ease-in-out">Bride</Link></li>
                                <li className="inline-block m-2"><Link href="#" className="px-3 py-1 text-slate-400 hover:text-white dark:hover:text-white bg-gray-50 dark:bg-slate-800 text-sm hover:bg-red-600 dark:hover:bg-red-600 rounded-md shadow dark:shadow-gray-800 transition-all duration-500 ease-in-out">Lifestyle</Link></li>
                                <li className="inline-block m-2"><Link href="#" className="px-3 py-1 text-slate-400 hover:text-white dark:hover:text-white bg-gray-50 dark:bg-slate-800 text-sm hover:bg-red-600 dark:hover:bg-red-600 rounded-md shadow dark:shadow-gray-800 transition-all duration-500 ease-in-out">Travel</Link></li>
                                <li className="inline-block m-2"><Link href="#" className="px-3 py-1 text-slate-400 hover:text-white dark:hover:text-white bg-gray-50 dark:bg-slate-800 text-sm hover:bg-red-600 dark:hover:bg-red-600 rounded-md shadow dark:shadow-gray-800 transition-all duration-500 ease-in-out">Beauty</Link></li>
                                <li className="inline-block m-2"><Link href="#" className="px-3 py-1 text-slate-400 hover:text-white dark:hover:text-white bg-gray-50 dark:bg-slate-800 text-sm hover:bg-red-600 dark:hover:bg-red-600 rounded-md shadow dark:shadow-gray-800 transition-all duration-500 ease-in-out">Video</Link></li>
                                <li className="inline-block m-2"><Link href="#" className="px-3 py-1 text-slate-400 hover:text-white dark:hover:text-white bg-gray-50 dark:bg-slate-800 text-sm hover:bg-red-600 dark:hover:bg-red-600 rounded-md shadow dark:shadow-gray-800 transition-all duration-500 ease-in-out">Audio</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container relative md:mt-24 mt-16">
                <div className="grid grid-cols-1 pb-8 text-center">
                    <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Recent Posts</h3>
                    <p className="text-slate-400 max-w-xl mx-auto">Start working with Tailwind CSS that can provide everything you need to generate awareness, drive traffic, connect.</p>
                </div>

                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-8 gap-[30px]">
                    {data.map((item,index)=>{
                        return(
                            <div className="flex items-center" key={index}>
                                <Image src={item.image} width={110} height={80} className="lg:h-20 h-16 rounded-md shadow dark:shadow-gray-800" alt="" />
        
                                <div className="ms-3">
                                    <Link href="#" className="font-semibold hover:text-red-600">{item.title}</Link>
                                    <p className="text-sm text-slate-400 mt-1">1st May 2022</p>
                                </div>
                            </div>
                        )
                    })}
                    
                </div>
            </div>
        </section>

        <Footer/>
        <Switcher/>
        <CookieModal/>
        </>
    )
}