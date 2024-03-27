import React from 'react'
import { Link } from "react-router-dom"
import dayjs from "dayjs"
function PropertyCard(props) {
    const [wholePrice, decimalPrice] = String(props.property.price).split('.');
    return (

        <div className="table-row border-b">
            <div className="border-b table-cell align-top  px-3 py-1 whitespace-nowrap text-sm text-gray-500 text-left">
                
                <div className="text-sm font-bold">
                {dayjs(props.property.service_date).format("DD")}
                </div>
                         
                         <div className="text-sm  font-thin">{dayjs(props.property.service_date).format("MMM")}</div>
                         <div className="text-sm font-bold"> 
                         {dayjs(props.property.service_date).format("YYYY")}
                         </div>




            </div>
            <div className="border-b table-cell align-top  px-3 py-1  text-sm text-gray-500 text-left">
                <a href="#" className="font-medium hover:text-blue-600 whitespace-nowrap">{props.property.client_name}</a>
                <div className="text-slate-500 text-xs w-full">
                    {props.property.address}
                </div>
                {props.property.phone && 
                <div className="w-full mt-1"><span className=" inline-block bg-purple-100 text-purple-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full  border border-purple-400 dark:bg-purple-900 dark:text-purple-300">
                {props.property.phone}
                    </span></div>
}


              

            </div>





            <div className="border-b capitalize table-cell align-top  px-3 py-1 whitespace-nowrap text-sm text-gray-500 text-left">
                {props.property.priority}
            </div>
            <div className="border-b capitalize table-cell align-top  px-3 py-1 whitespace-nowrap text-sm text-gray-500 text-left">
                {props.property.service_duration}
            </div>
            <div className="border-b capitalize table-cell align-top  px-3 py-1 whitespace-nowrap text-sm text-gray-500 text-left">
                {props.property.behaviour}
            </div>
            <div className="border-b table-cell align-top  px-3 py-1 whitespace-nowrap text-sm text-gray-500 text-left">
                <div className="flex items-center align-top relative">
                    <span className="pt-0 text-xs -mt-1">AED</span>
                    <div className="ml-1 mr-1 text-2xl md:text-3xl font-bold  text-purple-600">
                        <span>{wholePrice}</span>
                    </div>
                    <span className="pt-0 text-xs -mt-1">{decimalPrice}</span>
                    </div>




            </div>


            <div className="border-b table-cell align-top  px-3 py-1 whitespace-nowrap text-sm text-gray-500 text-left">
                <div className='gap-2 flex'>
                    <Link
                        to={`/properties/${props.property.id}`}
                        title="Book Now"
                        className="text-xs text-purple-700 hover:text-white border border-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg  px-3 py-2 text-center  dark:border-purple-400 dark:text-purple-400 dark:hover:text-white dark:hover:bg-purple-500 dark:focus:ring-purple-900">
                        
                        Book Now
                    </Link>
                   {/*  <Link
                        to={`/properties/${props.property.id}`}
                        className="text-xs text-purple-700 hover:text-white border border-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg  px-3 py-2 text-center  dark:border-purple-400 dark:text-purple-400 dark:hover:text-white dark:hover:bg-purple-500 dark:focus:ring-purple-900">
                        
                            More Dates




                    </Link>



                    <Link
                        to={`/properties/${props.property.id}`}
                        className="text-xs text-purple-700 hover:text-white border border-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg  px-3 py-2 text-center  dark:border-purple-400 dark:text-purple-400 dark:hover:text-white dark:hover:bg-purple-500 dark:focus:ring-purple-900">
                            ERP

                    </Link> */}
                </div>
            </div>


        </div>



    )
}
export default PropertyCard