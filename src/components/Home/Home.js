import React, { useContext } from "react";
import Menu from './Menu'
import Discover from './Discover'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Mycontext } from "../Context/Createcontext";


const Home = () => {

  const { user, setUser } = useContext(Mycontext);

  React.useEffect(() => {
    if (user) {
      toast.success(`${user.fname.toUpperCase()} Successfully Added`, {
        onClose: () => setUser(null),
      });
    }
  }, [user, setUser]);

  return (
    <div>
       <Menu />
       <Discover />
       <ToastContainer/>
    </div>
  )
}

export default Home