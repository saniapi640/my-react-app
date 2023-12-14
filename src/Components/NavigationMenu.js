import React from 'react'
import { Link } from "react-router-dom"
function NavigationMenu(props){
    return (
        <div>
            <div className="font-bold py-3 text-center">
              Filter By
            </div>
            <ul>
                <li>
                    <Link 
                        to="/" 
                        className="text-blue-700 py-3 border-t border-b block text-3xl font-bold text-center hover:text-blue-400"
                        onClick={props.closeMenu}
                    >
                        Area
                    </Link>
                </li>
                <li>
                    <Link 
                        to="/date-wise" 
                        className="text-blue-700 py-3 border-b block text-3xl font-bold text-center hover:text-blue-400"
                        onClick={props.closeMenu}
                    >
                       Service Date
                    </Link>
                </li>
                <li>
                    <Link 
                        to="/client-wise" 
                        className="text-blue-700 py-3 border-b block text-3xl font-bold text-center hover:text-blue-400"
                        onClick={props.closeMenu}
                    >
                       Client
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default NavigationMenu