"use client"
import React from 'react'
import Link from 'next/link';
import Image from 'next/image';

import * as Icon from 'react-feather';

import {FaRegEnvelope,FaDribbble,FaLinkedin, FaFacebookF, FaInstagram, FaTwitter,FaRegFile,FaBehance} from 'react-icons/fa';
import {PiShoppingCart} from "react-icons/pi"
import {MdKeyboardArrowRight} from "react-icons/md"

export default function Footer() {
    const footerLinks = [
        {
            liClass: '',
            route: '/',
            title: 'Terms of Services',

        },
        {
            liClass: 'mt-[10px]',
            route: '/',
            title: 'Privacy Policy',

        }
    ];
    const footerCompany = [
        {
            liClass: '',
            route: '/page-aboutus',
            title: 'About us',
        },
        {
            liClass: 'mt-[10px]',
            route: '/contact-one',
            title: 'Contact Us',

        },
        {
            route: '/blog',
            title: 'Projects',
            liClass: 'mt-[10px]',

        }

    ]
    return (
        <div>
            <footer className="footer bg-dark-footer relative text-gray-200 dark:text-gray-200">
                <div className="container relative">
                    <div className="grid grid-cols-12">
                        <div className="col-span-12">
                            <div className="py-[60px] px-0">
                                <div className="grid md:grid-cols-12 grid-cols-1 gap-[30px]">
                                    <div className="lg:col-span-4 md:col-span-12">
                                        <Link href="/#" className="text-[22px] focus:outline-none">
                                            <Image src="/images/childrenofadam/logo.png" width={138} height={24} alt="" />
                                        </Link>
                                        <p className="mt-6 text-gray-300">CoA Pakistan has been established with the complete assistance of Bani Adam/CoA USA, however, in future for executing above projects it will need support of other donors. All projects of CoA have active involvement of community.

</p>
                                        <ul className="list-none mt-5 space-x-1 space-y-1">
                                            <li className="inline"><Link href="#" target="_blank" className="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center border border-gray-800 rounded-md hover:border-red-600 dark:hover:border-red-600 hover:bg-red-600 dark:hover:bg-red-600"><PiShoppingCart className='text-sm'/></Link></li>
                                            <li className="inline"><Link href="#" target="_blank" className="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center border border-gray-800 rounded-md hover:border-red-600 dark:hover:border-red-600 hover:bg-red-600 dark:hover:bg-red-600"><FaBehance className='text-sm'/></Link></li>
                                            <li className="inline"><Link href="#" target="_blank" className="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center border border-gray-800 rounded-md hover:border-red-600 dark:hover:border-red-600 hover:bg-red-600 dark:hover:bg-red-600"><FaDribbble className='text-sm'/></Link></li>
                                            <li className="inline"><Link href="#" target="_blank" className="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center border border-gray-800 rounded-md hover:border-red-600 dark:hover:border-red-600 hover:bg-red-600 dark:hover:bg-red-600"><FaLinkedin className='text-sm'/></Link></li>
                                            <li className="inline"><Link href="#" target="_blank" className="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center border border-gray-800 rounded-md hover:border-red-600 dark:hover:border-red-600 hover:bg-red-600 dark:hover:bg-red-600"><FaFacebookF className='text-sm'/></Link></li>
                                            <li className="inline"><Link href="#" target="_blank" className="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center border border-gray-800 rounded-md hover:border-red-600 dark:hover:border-red-600 hover:bg-red-600 dark:hover:bg-red-600"><FaInstagram className='text-sm'/></Link></li>
                                            <li className="inline"><Link href="#" target="_blank" className="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center border border-gray-800 rounded-md hover:border-red-600 dark:hover:border-red-600 hover:bg-red-600 dark:hover:bg-red-600"><FaTwitter className='text-sm'/></Link></li>
                                        </ul>
                                    </div>

                                    <div className="lg:col-span-2 md:col-span-4">
                                        <h5 className="tracking-[1px] text-gray-100 font-semibold">Company</h5>
                                        <ul className="list-none footer-list mt-6">
                                            {footerCompany.map((data, index) => (
                                                <li key={index} className={data.liClass}><Link href={data.route} className="text-gray-300 hover:text-gray-400 duration-500 ease-in-out flex items-center"><MdKeyboardArrowRight className="text-xl me-1"/> {data.title}</Link></li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="lg:col-span-3 md:col-span-4">
                                        <h5 className="tracking-[1px] text-gray-100 font-semibold">Usefull Links</h5>
                                        <ul className="list-none footer-list mt-6">
                                            {footerLinks.map((data, index) => (
                                                <li key={index} className={data.liClass}><Link href={data.route} className="text-gray-300 hover:text-gray-400 duration-500 ease-in-out flex items-center"><MdKeyboardArrowRight className="text-xl me-1"/> {data.title}</Link></li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="lg:col-span-3 md:col-span-4">
                                        <h5 className="tracking-[1px] text-gray-100 font-semibold">Newsletter</h5>
                                        <p className="mt-6">Sign up and receive the latest tips via email.</p>
                                        <form>
                                            <div className="grid grid-cols-1">
                                                <div className="foot-subscribe my-3">
                                                    <label className="form-label">Write your email <span className="text-red-600">*</span></label>
                                                    <div className="form-icon relative mt-2">
                                                        <Icon.Mail className="w-4 h-4 absolute top-3 start-4" />
                                                        <input type="email" className="form-input ps-12 rounded w-full py-2 px-3 h-10 bg-gray-800 border-0 text-gray-100 focus:shadow-none focus:ring-0" placeholder="Email" name="email" required="" />
                                                    </div>
                                                </div>

                                                <button type="submit" id="submitsubscribe" name="send" className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-red-600 hover:bg-red-700 border-red-600 hover:border-red-700 text-white rounded-md">Subscribe</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="py-[30px] px-0 border-t border-slate-800">
                    <div className="container relative text-center">
                        <div className="grid md:grid-cols-2 items-center">
                            <div className="md:text-start text-center">
                                <p className="mb-0">© {new Date().getFullYear()} Children of Adam. Design & Develop by <Link href="/https://shreethemes.in/" target="_blank" className="text-reset">Plug Orange</Link>.</p>
                            </div>

                            <ul className="list-none md:text-end text-center space-x-1 mt-6 md:mt-0">
                                <li className="inline"><Link href="#"><Image width={35} height={24} src="/images/payments/american-ex.png" className="max-h-6 inline" title="American Express" alt="" /></Link></li>
                                <li className="inline"><Link href="#"><Image width={35} height={24} src="/images/payments/discover.png" className="max-h-6 inline" title="Discover" alt="" /></Link></li>
                                <li className="inline"><Link href="#"><Image width={35} height={24} src="/images/payments/master-card.png" className="max-h-6 inline" title="Master Card" alt="" /></Link></li>
                                <li className="inline"><Link href="#"><Image width={35} height={24} src="/images/payments/paypal.png" className="max-h-6 inline" title="Paypal" alt="" /></Link></li>
                                <li className="inline"><Link href="#"><Image width={35} height={24} src="/images/payments/visa.png" className="max-h-6 inline" title="Visa" alt="" /></Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>

        </div>
    )
}