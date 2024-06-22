import { FcGoogle } from "react-icons/fc";
import { UserAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import Admin from "./Admin"; 
import Homepage from "./Homepage";
import { useState , useEffect } from "react";
import Dashboard from "../components/Dashboard";

const Login = () => {
  const { googleSignIn, user } = UserAuth();
  const navigate = useNavigate();

 

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };

  const [admin, setAdmin] = useState(false)


  useEffect(() => {
    // Set admin to true if user.displayName is truthy
    setAdmin(!user?.displayName);
  }, [user?.displayName]);
  
  
  useEffect(() => {
      if (user?.displayName === true && admin === true) {
        navigate("/admin/dashboard");
      } else if(user?.displayName === true && admin === false) {
        navigate("/beranda");
      }
    
  }, [user?.displayName, admin, navigate]);
  

  return (
    //   <GoogleLogin
    //     onSuccess={(credentialResponse) => {
    //       console.log(credentialResponse);
    //     }}
    //     onError={() => {
    //       console.log("Login Failed");
    //     }}
    //   />
    // );
    <div>

      
{user?.displayName ? (
        admin ? (
          <Admin />
        ) : (
          <Homepage />
        )
      ) : (
        <div className="h-screen flex flex-col items-center align-middle gap-4  pt-20">
          <div
            className=" rounded-xl flex
      flex-col items-center h-[40vh] w-[50vh] gap-5 pt-20 "
          >
            <div className="flex items-center  flex-col gap-2">
              <div className="font-titleFont text-4xl pb-10 ">Masuk</div>
             

              <button
                onClick={handleGoogleSignIn}
                className="relative border-2 border-gray-800 bg-transparent py-2.5 px-5  text-gray-800 transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:bg-gray-800 before:transition-transform before:duration-300 before:content-[''] hover:text-white before:hover:scale-x-100 flex gap-2 items-center "
              >
                Masuk dengan Google <FcGoogle />
              </button>

              
            </div>
          </div>
        </div>
      )}  
    </div>
  );
};

export default Login;