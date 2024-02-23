import React from 'react'
import { Link } from 'react-router-dom'

const  Header = () => {
  return (
    <div className='border-b-2 border-b-red-500 py-6'>
         <div className='container mx-auto flex items-center justify-between'>
            <Link 
            to="/"
            className="text-3xl font-bold tracking-tight text-red-500">
                  HUFD
            </Link>

         </div>
    </div>
  );
};
 export default Header;
