import React from 'react'
import DataTable from 'react-data-table-component'

const Dashboard = ({pesanan , columns ,  }) => {
  
  return (
    <div className='w-full'>
         <DataTable columns={columns} data={pesanan} selectableRows fixedHeader pagination/>

    </div>
      
    
  )
}

export default Dashboard
