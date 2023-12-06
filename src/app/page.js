"use client"
import React, { useState, useEffect } from 'react'
import Link from "next/link"
import Image from "next/image"
import dynamic from "next/dynamic"

const Navbar = dynamic(() => import('./componets/Navbar/navbar'));
const Footer = dynamic(() => import('./componets/Footer/footer'));
const Switcher = dynamic(() => import('./componets/switcher'));
const CookieModal = dynamic(() => import('./componets/cookieModal'));

const Blog = dynamic(() => import('./componets/blog'));

import ModalVideo from 'react-modal-video'
import "node_modules/react-modal-video/css/modal-video.css";
import CountUp from 'react-countup';

import * as Icon from 'react-feather';
import { BiDollarCircle } from "react-icons/bi"
import { ourCausesData } from './Data/data'
import { teamData } from './Data/data'

export default function Index() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      document.documentElement.setAttribute("dir", "ltr");
      document.documentElement.classList.add('light');
    }
  }, []);
  const [isOpen, setOpen] = useState(false)

  return (
    <>
      <Navbar navClass="nav-light" />

      <section className="relative lg:py-44 py-36 bg-center bg-cover" style={{ backgroundImage: "url('/images/childrenofadam/hospital.jpeg')" }}>
        <div className="absolute inset-0 bg-slate-900/50"></div>
        <div className="container relative z-1">
          <div className="grid md:grid-cols-12 grid-cols-1 items-center mt-10 gap-[30px]">
            <div className="lg:col-span-7 md:col-span-6">
              <div className="md:me-6">
                <h4 className="font-bold lg:leading-normal leading-normal text-4xl lg:text-5xl mb-5 text-white">Children of Adam Neuropsychiatric Hospital</h4>
                <p className="text-white/75 text-lg max-w-xl">The Neuropsychiatric Hospital will be based in Karachi because
                  the city is home to diverse communities and is accessible to people from all areas,
                  both nationally and internationally, making it an ideal location for the hospital."</p>

                <div className="mt-6">
                  <Link href="#" className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-red-600 hover:bg-red-700 border-red-600 hover:border-red-700 text-white rounded-md">Donate Now</Link>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 md:col-span-6">
              <div className="p-6 rounded-lg border-t-8 border-red-600 bg-white dark:bg-slate-900 shadow-lg dark:shadow-gray-800">
                <div className="mb-6 text-center">
                  <h4 className="font-bold lg:leading-normal leading-normal text-3xl mb-3">Make a Donation</h4>
                  <p className="text-slate-400">Your $40.00 monthly donation can give 12 people clean water every year. 100% funds water projects.</p>
                </div>

                <form>
                  <div className="grid grid-cols-1">
                    <div>
                      <div className="grid md:grid-cols-2 gap-5">
                        <div className="mb-5">
                          <label className="form-label font-medium">Your Name : <span className="text-red-600">*</span></label>
                          <input type="text" className="form-input mt-2 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-red-600 dark:border-gray-800 dark:focus:border-red-600 focus:ring-0" placeholder="Name" name="name" required="" />
                        </div>

                        <div className="mb-5">
                          <label className="form-label font-medium">Your Email : <span className="text-red-600">*</span></label>
                          <input type="email" className="form-input mt-2 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-red-600 dark:border-gray-800 dark:focus:border-red-600 focus:ring-0" placeholder="Email" name="email" required="" />
                        </div>
                      </div>
                    </div>

                    <div className="mb-5">
                      <label className="form-label font-medium">I Want to Donate for</label>
                      <select className="form-select form-input mt-2 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-red-600 dark:border-gray-800 dark:focus:border-red-600 focus:ring-0">
                        <option value="Donate For Food">Donate For Hospital</option>
                        <option value="Food For Orphan">Food For Orphan</option>
                        <option value="Home For Homeless">Home For Homeless</option>
                        <option value="Holyday Gifts In Kind">Holyday Gifts In Kind</option>
                        <option value="For clean Water in Africa">For clean Water in Pakistan</option>
                        <option value="Health and Rights">Health and Rights</option>
                      </select>
                    </div>

                    <div className="mb-5">
                      <label className="form-label font-medium">How much do you want to donate ?</label>
                      <div className="relative mt-2">
                        <span className="absolute top-0.5 start-0.5 w-9 h-9 text-xl bg-gray-100 dark:bg-slate-800 inline-flex justify-center items-center text-dark dark:text-white rounded" id="basic-addon1"><BiDollarCircle className="w-5 h-5" /></span>
                        <input type="number" className="form-input ps-12 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-red-600 dark:border-gray-800 dark:focus:border-red-600 focus:ring-0" min="1" max="1000" placeholder="Enter Amount" id="amount" aria-describedby="inputGroupPrepend" required />
                      </div>
                    </div>

                    <div className="mb-5">
                      <div className="flex items-center w-full mb-0">
                        <input className="form-checkbox rounded border-gray-200 dark:border-gray-800 text-red-600 focus:border-red-300 focus:ring focus:ring-offset-0 focus:ring-red-200 focus:ring-opacity-50 me-2" type="checkbox" value="" id="AcceptT&C" />
                        <label className="form-check-label text-slate-400" htmlFor="AcceptT&C">I Accept <Link href="#" className="text-red-600">Terms And Condition</Link></label>
                      </div>
                    </div>

                    <div className="mb-5">
                      <input type="submit" className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-red-600 hover:bg-red-700 border-red-600 hover:border-red-700 text-white rounded-md w-full" value="Donate Now" />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative bg-red-600 py-12">
        <div className="container relative">
          <div className="relative grid md:grid-cols-4 grid-cols-2 items-center gap-[30px]">
            <div className="counter-box text-center">
              <h1 className="text-4xl font-bold mb-4 text-white"><CountUp className="counter-value" start={1} end={100} />M</h1>
              <h5 className="counter-head text-xs font-semibold text-white">PEOPLE FACING FOOD INSECURITY</h5>
            </div>

            <div className="counter-box text-center">
              <h1 className="text-4xl font-bold mb-4 text-white"><CountUp className="counter-value" start={2} end={152} />M</h1>
              <h5 className="counter-head text-xs font-semibold text-white">PEOPLE WFP AIMS TO REACH IN 2022</h5>
            </div>

            <div className="counter-box text-center">
              <h1 className="text-4xl font-bold mb-4 text-white">$<CountUp className="counter-value" start={0} end={1500} />M</h1>
              <h5 className="counter-head text-xs font-semibold text-white">WFPS FUNDING NEEDS IN 2022</h5>
            </div>

            <div className="counter-box text-center">
              <h1 className="text-4xl font-bold mb-4 text-white"><CountUp className="counter-value" start={0} end={29} />M</h1>
              <h5 className="counter-head text-xs font-semibold text-white">MEALS DISTRIBUTED WORLDWIDE</h5>
            </div>
          </div>
        </div>
      </section>

      <section className="relative md:py-24 py-16">
        <div className="container relative">
          <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-[30px]">
            <div className="md:col-span-6">
              <div className="lg:me-8">
                <Image src="/images/childrenofadam/hospital.jpeg" width={0} height={0} sizes='100vw' style={{ width: "100%", height: "auto" }} className="rounded-full shadow-lg dark:shadow-gray-800" alt="" />
              </div>
            </div>

            <div className="md:col-span-6">
              <div className="lg:ms-8">
                <h6 className="text-red-600 text-sm font-bold uppercase mb-2">Children of Adam</h6>
                <h3 className="mb-3 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Behavioral Health Centre (COABHC)</h3>
                {/* <h3 className="mb-4 text-lg leading-normal font-semibold">Our programs contribute to peace and development through volunteerism worldwide. Take part in changing the lives of young people across the world.</h3> */}

                <p className="text-slate-400 max-w-xl mb-6">Pakistan bears a significant disease burden coupled with a shortage of adequate healthcare
facilities. Among its cities, Karachi stands out as the most populous and severely affected by
mental illness, drawing individuals from other provinces. Additionally, Karachi's status as a
healthcare hub facilitates easy accessibility for healthcare professionals and patients
worldwide.
In response to these critical factors, CoA has made the courageous decision to construct,
manage, and operate a pioneering center in the region. The primary objective is to provide
world-class treatment and care with state-of-the-art facilities. The project has garnered
support from the Sindh Government and the prominent business community, securing
approximately 393,094 sq ft of land.</p>

                <Link href="#" className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-red-600 hover:bg-red-700 border-red-600 hover:border-red-700 text-white rounded-md">Donate Now</Link>
              </div>
            </div>
          </div>
        </div>

        <div className="container relative md:mt-24 mt-16">
          <div className="grid grid-cols-1 pb-8 text-center">
            <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Our Projects-Impact</h3>

            {/* <p className="text-slate-400 max-w-xl mx-auto">Start working with Techwind that can provide everything you need to generate awareness, drive traffic, connect.</p> */}
          </div>

          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-8 gap-[30px]">

            {ourCausesData.map((item, index) => {
              return (
                <div key={index} className="group relative rounded hover:-mt-1 shadow hover:shadow-md dark:shadow-gray-800 overflow-hidden transition-all duration-300">
                  <div className="relative overflow-hidden">
                    <Image src={item.image} width={0} height={0} sizes='100vw' style={{ width: "100%", height: "auto" }} alt="" />

                    <div className="absolute p-4 start-0 end-0 text-center bg-slate-900/80 -bottom-24 group-hover:bottom-0 transition-all duration-300">
                      <Link href="#" className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle transition duration-500 ease-in-out text-base text-center bg-red-600 hover:bg-red-700 border-red-600 hover:border-red-700 text-white rounded-md">Donate Now</Link>
                    </div>
                  </div>

                  <div className="p-6">
                    <Link href="#" className="hover:text-red-600 text-lg font-semibold">{item.title}</Link>
                    <p className="text-slate-400 mt-2">{item.desc}</p>

                    <div className="mt-3">
                      <div className="flex justify-between mb-2">
                        <span className="text-slate-400">Progress</span>
                        <span className="text-slate-400">{item.Progress}</span>
                      </div>
                      <div className="w-full bg-gray-100 dark:bg-gray-800 rounded-full h-[6px]">
                        <div className="bg-red-600 h-[6px] rounded-full" style={{ "width": `${item.Progress}` }}></div>
                      </div>
                      <ul className="flex list-none justify-between mt-3 mb-2">
                        <li className="font-semibold">
                          <span className="text-red-600">Raised: </span>
                          <span>{item.Raised}</span>
                        </li>
                        <li className="text-red-600 font-semibold">
                          <span>Goal: </span>
                          <span>{item.Goal}</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-20 w-full table relative  bg-top bg-no-repeat bg-cover" style={{ backgroundImage: "url('/images/childrenofadam/coapic1.jpg')" }}>
        <div className="absolute inset-0 bg-slate-900/70"></div>
        <div className="container relative">
          <div className="grid grid-cols-1 text-center">
            <h3 className="mb-4 md:text-3xl text-2xl text-white font-medium">Vision and Mission</h3>

            <p className="text-white/80 max-w-xl mx-auto">CoA – Pakistan will follow the success model of CoA – USA in some areas of common interest and also will follow the good practices of other NGO’s / Trusts in Pakistan by collaborating with them on projects of common interest.
OUR VISION:
Imagining a better world where everyone is living spiritually well, physically healthy and socially rich.
OUR MISSION:
To enlighten minds, engage hearts and empower hands through knowledge & research, holistic wellness, and humanitarian service driven by Islamic values.
ZAKAT POLICY:
As a strict policy, 100% of the Zakat received is distributed directly to the beneficiaries in the form of cash and non-cash benefits.</p>

            <Link href="#" onClick={() => setOpen(true)} data-type="youtube" data-id="S_CGed6E610" className="lightbox h-20 w-20 rounded-full shadow-lg dark:shadow-gray-800 inline-flex items-center justify-center bg-white dark:bg-slate-900 text-red-600 mx-auto mt-10">
              <i className="mdi mdi-play inline-flex items-center justify-center text-2xl"></i>
            </Link>
          </div>
        </div>
      </section>
      <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="08CS2tkKoYw" onClose={() => setOpen(false)} />

      <section className="relative md:py-24 py-16">
        <div className="container relative">
          <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-[30px]">
            <div className="md:col-span-6">
              <div className="lg:me-8">
                <Image src="/images/childrenofadam/ceo.png" width={0} height={0} sizes='100vw' style={{ width: "100%", height: "auto" }} className="rounded-full shadow-lg dark:shadow-gray-800" alt="" />
              </div>
            </div>

            <div className="md:col-span-6">
              <div className="lg:ms-8">
                <h6 className="text-red-600 text-sm font-bold uppercase mb-2">Management of CoA Pakistan</h6>
                <h3 className="mb-3 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Mr. Shahzad Sadan <br /> C.E.O (CoA-Pakistan)</h3>

                <p className="text-slate-400 max-w-xl mb-6">Mr. Shahzad Sadan has over 30 years of rich diversified global and local experience with large Multi Nationals, Public Sector and Private sector companies in Pakistan & GCC. He is a strategic leader who has been instrumental in establishing new companies, structuring and restructuring complex organizations, has been deeply involved in strategic business planning and turn around methodologies along with responsibility of P&L in many organizations. He has also worked as President & CEO of the second largest GSM Mobile Company of Pakistan Ufone. Amongst many awards and recognitions he has received in his long career, Govt. of Pakistan considering his excellent performance bestowed him Excellence Award that was presented to him by the President of Pakistan. He also has been recognized and awarded by Government of India – Indira Gandhi Global Achievers award.</p>

                {/* <Link href="#" className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-red-600 hover:bg-red-700 border-red-600 hover:border-red-700 text-white rounded-md">Donate Now</Link> */}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <section className="container relative md:pb-24 pb-16" >
        <Blog />
      </section> */}

      <Footer />
      <Switcher />
      <CookieModal />
    </>
  )
}