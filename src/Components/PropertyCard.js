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
                        title="Client can't be reached"
                        className="text-xs text-purple-700 hover:text-white border border-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg  px-1 py-1 w-9 text-center  dark:border-purple-400 dark:text-purple-400 dark:hover:text-white dark:hover:bg-purple-500 dark:focus:ring-purple-900">
                    
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" icon-name="phone-off" data-lucide="phone-off" class="lucide lucide-phone-off w-4 h-4 mx-auto"><path d="M10.68 13.31a16 16 0 0 0 3.41 2.6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7 2 2 0 0 1 1.72 2v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.42 19.42 0 0 1-3.33-2.67m-2.67-3.34a19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91"></path><line x1="22" y1="2" x2="2" y2="22"></line></svg>
                    </Link>
                    <Link
                        to={`/properties/${props.property.id}`}
                        title="Call Back"
                        className="text-xs text-purple-700 hover:text-white border border-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg  px-1 py-1 w-9 text-center  dark:border-purple-400 dark:text-purple-400 dark:hover:text-white dark:hover:bg-purple-500 dark:focus:ring-purple-900">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" icon-name="phone-incoming" data-lucide="phone-incoming" class="lucide lucide-phone-incoming w-4 h-4 mx-auto"><polyline points="16 2 16 8 22 8"></polyline><line x1="22" y1="2" x2="16" y2="8"></line><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                  
                    </Link>

                    <Link
                        to={`/properties/${props.property.id}`}
                        title="Send Mail"
                        className="text-xs text-purple-700 hover:text-white border border-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg  px-1 py-1 w-9 text-center  dark:border-purple-400 dark:text-purple-400 dark:hover:text-white dark:hover:bg-purple-500 dark:focus:ring-purple-900">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" icon-name="mail" data-lucide="mail" class="lucide lucide-mail w-4 h-4 mx-auto"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>

                    </Link>
                   

                    <Link
                        to={`/properties/${props.property.id}`}
                        title="Send SMS"
                        className="text-xs text-purple-700 hover:text-white border border-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg  px-1 py-1 w-9 text-center  dark:border-purple-400 dark:text-purple-400 dark:hover:text-white dark:hover:bg-purple-500 dark:focus:ring-purple-900">
                   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" icon-name="message-square" data-lucide="message-square" class="lucide lucide-message-square w-4 h-4 mx-auto"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>

                    </Link>

                    <Link
                        to={`/properties/${props.property.id}`}
                        title="Book New Request"
                        className="text-xs text-purple-700 hover:text-white border border-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg  px-1 py-1 w-9 text-center  dark:border-purple-400 dark:text-purple-400 dark:hover:text-white dark:hover:bg-purple-500 dark:focus:ring-purple-900">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" icon-name="file-plus" data-lucide="file-plus" class="lucide lucide-file-plus w-4 h-4 mx-auto"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="12" y1="18" x2="12" y2="12"></line><line x1="9" y1="15" x2="15" y2="15"></line></svg>
                    </Link>

                    <Link
                        to={`/properties/${props.property.id}`}
                        title="Deactivate Client"
                        className="text-xs text-purple-700 hover:text-white border border-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg  px-1 py-1 w-9 text-center  dark:border-purple-400 dark:text-purple-400 dark:hover:text-white dark:hover:bg-purple-500 dark:focus:ring-purple-900">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" icon-name="thumbs-down" data-lucide="thumbs-down" class="lucide lucide-thumbs-down w-4 h-4 mx-auto"><path d="M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 0 2 2.3zm7-13h2.67A2.31 2.31 0 0 1 22 4v7a2.31 2.31 0 0 1-2.33 2H17"></path></svg>
                    </Link>

                    <Link
                        to={`/properties/${props.property.id}`}
                        title="Remove from List"
                        className="text-xs text-purple-700 hover:text-white border border-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg  px-1 py-1 w-9 text-center  dark:border-purple-400 dark:text-purple-400 dark:hover:text-white dark:hover:bg-purple-500 dark:focus:ring-purple-900">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" icon-name="trash-2" data-lucide="trash-2" class="lucide lucide-trash-2 w-4 h-4 mx-auto"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>
                    </Link>

                    <Link
                        to={`/properties/${props.property.id}`}
                        title="View Details"
                        className="text-xs text-purple-700 hover:text-white border border-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg  px-1 py-1 w-9 text-center  dark:border-purple-400 dark:text-purple-400 dark:hover:text-white dark:hover:bg-purple-500 dark:focus:ring-purple-900">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" icon-name="more-vertical" data-lucide="more-vertical" class="lucide lucide-more-vertical w-4 h-4 mx-auto"><circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="19" r="1"></circle></svg>
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