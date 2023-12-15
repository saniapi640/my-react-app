import React from 'react'
import { Link } from "react-router-dom"
import dayjs from "dayjs"
function PropertyCard(props) {
    const [wholePrice, decimalPrice] = String(props.property.price).split('.');
    return (

        <div className="table-row border-b">
            <div className="border-b table-cell align-top  px-3 py-1 whitespace-nowrap text-sm text-gray-500 text-left">
                {dayjs(props.property.service_date).format("MMM DD, YYYY")}
            </div>
            <div className="border-b table-cell align-top  px-3 py-1 whitespace-nowrap text-sm text-gray-500 text-left">
                <a href="#" className="font-medium hover:text-blue-600">{props.property.client_name}</a>
                <div className="text-slate-500 text-xs w-full">
                    {props.property.address},{props.property.area}
                </div>


                <div className="w-full">



                    <div className=" inline-block py-1 px-2 rounded-full mt-1 text-green-600 bg-green-100 text-center text-xs border border-green-600 cursor-pointer hover:bg-green-600 hover:text-white" >

                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" icon-name="phone-outgoing" data-lucide="phone-outgoing" className="lucide lucide-phone-outgoing inline-block w-3 h-3 mr-2"><polyline points="22 8 22 2 16 2"></polyline><line x1="16" y1="8" x2="22" y2="2"></line><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                        {props.property.client_phone}</div>

                </div>

            </div>





            <div className="border-b table-cell align-top  px-3 py-1 whitespace-nowrap text-sm text-gray-500 text-left">
                {props.property.priority}
            </div>
            <div className="border-b table-cell align-top  px-3 py-1 whitespace-nowrap text-sm text-gray-500 text-left">
                {props.property.service_duration}
            </div>
            <div className="border-b table-cell align-top  px-3 py-1 whitespace-nowrap text-sm text-gray-500 text-left">
                {props.property.behaviour}
            </div>
            <div className="border-b table-cell align-top  px-3 py-1 whitespace-nowrap text-sm text-gray-500 text-left">
                <div class="flex items-center align-top relative">
                    <span class="pt-0 text-xs -mt-1">AED</span>
                    <div class="ml-1 mr-1 text-2xl md:text-3xl font-bold  text-purple-600">
                        <span>{wholePrice}</span>
                    </div>
                    <span class="pt-0 text-xs -mt-1">{decimalPrice}</span>
                    </div>




            </div>


            <div className="border-b table-cell align-top  px-3 py-1 whitespace-nowrap text-sm text-gray-500 text-left">
                <div className='gap-2 flex'>
                    <Link
                        to={`#`}
                        title="Book Now"
                        className="text-xs text-purple-700 hover:text-white border border-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg  px-3 py-2 text-center  dark:border-purple-400 dark:text-purple-400 dark:hover:text-white dark:hover:bg-purple-500 dark:focus:ring-purple-900">
                        
                        Book Now
                    </Link>
                    <Link
                        to={`/properties/${props.property.id}`}
                        className="text-xs text-purple-700 hover:text-white border border-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg  px-3 py-2 text-center  dark:border-purple-400 dark:text-purple-400 dark:hover:text-white dark:hover:bg-purple-500 dark:focus:ring-purple-900">
                        
                            More Dates




                    </Link>



                    <Link
                        to={`/properties/${props.property.id}`}
                        className="text-xs text-purple-700 hover:text-white border border-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg  px-3 py-2 text-center  dark:border-purple-400 dark:text-purple-400 dark:hover:text-white dark:hover:bg-purple-500 dark:focus:ring-purple-900">
                            ERP

                    </Link>
                </div>
            </div>


        </div>



    )
}
export default PropertyCard