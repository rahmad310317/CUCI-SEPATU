  import Header from "./components/Header";
  import Homepage from "./pages/Homepage";
  import Footer from "./components/Footer";
  import SidebarAdmin from './components/SidebarAdmin'
  import {
    BrowserRouter,
    createBrowserRouter,
    Outlet,
    RouterProvider,
    Routes,
    ScrollRestoration,
  } from "react-router-dom";
  import { dataService } from "./Api/Api";
  import SingleService from "./components/SingleService";
  import Pembayaran from "./pages/Pembayaran";
  import React, { useEffect, useState } from "react";
  import Pesanan from "./pages/Pesanan";
  import Login from "./pages/Login";
  import { AuthContextProvider } from "./context/AuthContext";
  import Client from "./pages/Client";
  import Admin from "./pages/Admin";
  import Dashboard from "./components/Dashboard";
  import Transaksi from "./components/Transaksi";
  import supabase from "./config/supabaseClient";
  // import ProfileAdmin from "./components/ProfileAdmin";








  const ClientLayout = () => {
    return (
      <div>
        <Header />
        <ScrollRestoration />
        <Outlet />
        <Footer />
      </div>
    );
  };

  const AdminLayout = () => {


  return (
    <div className="flex" >
      <SidebarAdmin  />
      <Outlet/>
    </div>
  )
  }

  function App() {
    const [repair, setRepair] = useState([])
    const [fullService, setFullService] = useState([])
    const [cleaning, setCleaning] = useState([])

    useEffect(() => {
       getRepair(); 
    },[])
    useEffect(() => {
      getFullService(); 
    },[])
   useEffect(() => {
    getCleaning(); 
    },[])


//  requset data dari repair
    async function getRepair(){
      try{
        const {data, error} = await supabase
         .from("repair")
         .select("*")
         .limit(10)
         if(error) throw error;
         if(data != null){
          setRepair(data);
         }
      }catch(error){
        alert(error.message);
      }
    }
    //  requset data dari full service
    async function getFullService(){
      try{
        const {data, error} = await supabase
         .from("full_service")
         .select("*")
         .limit(10)
         if(error) throw error;
         if(data != null){
          setFullService(data);
         }
      }catch(error){
        alert(error.message);
      }
    }
    // request data dari cleaning
    async function getCleaning(){
      try{
        const {data, error} = await supabase
         .from("cleaning")
         .select("*")
         .limit(10)
         if(error) throw error;
         if(data != null){
          setCleaning(data);
         }
      }catch(error){
        alert(error.message);
      }
    }
    console.log(repair)
    console.log(fullService)
    console.log(cleaning)

    async function createFullService() {
      try{
        const {data, error} = await supabase
         .from("full_service")
         .insert({
          jenis_sepatu: 'jenisSepatu',
          keluhan: 'keluhan',
          jumlah_sepatu: 'jumlahSepatu ',
         })
         .single()
         if(error) throw error;
        window.location.reload()
      }catch(error){
        alert(error.message);
      }
    }



    const columns = [
      {
        name : 'No',
        selector : row => row.id
      },
      {
        name : 'Jenis',
        selector : row => row.jenis
      },
      {
        name : 'Catatan',
        selector : row => row.catatan
      },
      {
        name : 'Total Baju',
        selector : row => row.totalBaju,
      
      },
      
    ]

    // const [pesanan, setPesanan] = useState([
    //   {
    //     id: 1,
    
    //     jenis: "Pantopel",
    //     catatan: "",
    //     totalBaju: 1,
    //     select: true,
    //   },
    //   {
    //     id: 2,
        
    //     catatan: "",
    //     jenis: "Sneakers",
    //     totalBaju: 3,
    //     select: false,
    //   },
    //   {
    //     id: 3,
        
    //     jenis: "Running Shoues",
    //     catatan: "",
    //     totalBaju: 4,
    //     select: true,
    //   },
    // ]);

  

    const hapusPesanan = (id) => {
      setRepair(repair.filter((repair) => repair.id !== id));
    };


    

    const router = createBrowserRouter([
      {
        path: "/",
        element: <ClientLayout />,
        children: [
          {
            path: "/beranda",
            element: <Homepage />,
            
          },
          {
            path: "/layanan/:id",
            element: <SingleService repair={repair} fullService={fullService} cleaning={cleaning} createFullService={createFullService}/>,
          },
          {
            path: "/pesanan",
            element: <Pesanan repair={repair} fullService={fullService} cleaning={cleaning} onDelete={hapusPesanan} />,
          },

          {
            path: "/pembayaran",
            element: <Pembayaran />,
          },
          {
            path: "/login",
            element: <Login />,
          },
          
          {
            path: "/client",
            element: <Client />,
          },
        ],
      },
      {
        path: "/",
        element: <AdminLayout />,
        children: [
          {
            path:'/admin',
            element:<Admin  repair={repair} />
          },
          {
            path:'/admin/dashboard',
            element:<Dashboard columns={columns}   />
          },
          {
            path:'/admin/transaksi',
            element:<Transaksi />
          },{
            path:'/admin/login',
            element:<Login />
          }
          
          // {
          //   path:'/admin/profile',
          //   element:<ProfileAdmin />
          // }
    
    
        ],
      },
    ]);

  return (
    <div>
      <AuthContextProvider>
      <RouterProvider router={router} />
      </AuthContextProvider>
    </div>
  );
}

  export default App;
