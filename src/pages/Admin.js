import React, { useState, useEffect } from 'react';


const Admin = ({ repair }) => {

  console.log(repair[0].jenis_sepatu)

  return (
    <div className='bg-red-400 w-full'>
      {/* <h1>
        {repair[0].jenis_sepatu}
        {repair[0].keluhan}
        {repair[0].jumlah_sepatu}
      </h1> */}
    </div>
  );
};

export default Admin;
