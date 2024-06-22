import React from 'react';
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import { Link , useNavigate} from 'react-router-dom';

import { UserAuth } from "../context/AuthContext";
import Login from '../pages/Login';
import Admin from '../pages/Admin';


const SidebarAdmin = ( ) => {
  

    const { user, logOut } = UserAuth();
  
  const navigate = useNavigate();
  const handleSignOut = async () => {
    try {
      await logOut();
      // Clear user data and navigate to login page
      // Assuming logOut() already clears user data, you might not need this step
      // Uncomment the line below if needed
      // setUser(null);

      // Navigate to login page 
      navigate('/beranda');
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      {
        user?.displayName? 
      <Sidebar className='h-[100dvh]'> 
        <div className='flex text-center justify-center bg-gray-400/25 p-4  gap-2 items-center'>
        <img
             className=" rounded-full h-[40px] hover:opacity-25 border-black border-[1px]"
             alt="img-user"
             src={user.photoURL}
            />
          <h1>{user?.displayName}</h1>         

        </div>
       <Menu className=''>
         <Link className='bg-red-400 h-full' to="/admin/dashboard">
           <MenuItem >
             Dashboard
           </MenuItem>
         </Link>
         <Link className='bg-green-400 w' to="/admin/transaksi">
           <MenuItem>
             Transaksi
           </MenuItem>
         </Link>
         <button onClick={ handleSignOut} className='bg-gray-400/25  w-full h-[50px] hover:text-white duration-700 hover:bg-gray-600'>Keluar</button>
       </Menu>
     </Sidebar> 
      :
      <Login/>
        
      }
         
      
    
      
   
    </div>
  );
};

export default SidebarAdmin;
