import React,{useState,useCallback,useEffect} from 'react';
import Icon from './Components/Icon';
import {BsFillPersonFill}from "react-icons/bs"
import {MdEmail} from "react-icons/md"
import {BsFillCalendarCheckFill} from "react-icons/bs"
import {FaLocationArrow} from "react-icons/fa"
import {MdLocalPhone} from "react-icons/md"
import {RiLockPasswordFill} from "react-icons/ri"

function App() {
    const[infos,setInfos]=useState({});
    const [myData,setMyData]=useState({});
    const [isLoading,setIsLoading]=useState(false);
    const infoHandler=(info)=>{
              setInfos(info);
    }


      const fectDataHandler=useCallback( async()=>{
                     setIsLoading(true);
                  try{
                     const id=Math.floor(Math.random()*(12))+1;
                     const response= await fetch("https://dummyjson.com/users/"+id);
                     const data=await response.json();
                     setMyData(data);
                     setInfos({
                      title:"name",
                      secondTitle:data.firstName+""+data.lastName,
                     })
                  }catch(error){
                    alert(error.message)
                  }
                  setIsLoading(false);
      },[]);

      useEffect(()=>{
        fectDataHandler()
      },[fectDataHandler])


  return (
    <React.Fragment>
            <div className='flex flex-col items-center'>
              <div className='h-60 w-full bg-slate-400 relative'></div>
            <div className='w-3/5 rounded-md bg-slate-50 shadow-xl absolute top-40 flex flex-col items-center gap-6'>
                     <div className='h-28 border-b border-gray-300 w-full relative'></div>
                     <img src={myData.image} alt='person' className='rounded-full w-32 h-32 border-4 border-blue-400 object-cover absolute top-5'/>
                     <div className='flex flex-col items-center gap-2 py-8'>
                         <h1 className='text-lg text-gray-400'>My {infos.title} is</h1>
                         <h2 className='text-2xl text-gray-600'>{infos.secondTitle}</h2>
                         <div className='flex flex-row items-center gap-8 py-3'>
                          <Icon icon={<BsFillPersonFill size={40} className="text-gray-500 hover:text-blue-500"/>} handler={infoHandler} field={myData.firstName+"  "+myData.lastName} type="name" />
                          <Icon icon={<MdEmail size={40} className="text-gray-500 hover:text-blue-500"/>} handler={infoHandler} field={myData.email} type="email" />
                          <Icon icon={<BsFillCalendarCheckFill size={30} className="text-gray-500 hover:text-blue-500"/>} handler={infoHandler} field={myData.age+" ans"} type="age"/>
                          <Icon icon={<FaLocationArrow size={30} className="text-gray-500 hover:text-blue-500"/>}handler={infoHandler}  type="address" field={myData.address.address}/>
                          <Icon icon={<MdLocalPhone size={40} className="text-gray-500 hover:text-blue-500"/>}handler={infoHandler} field={myData.phone} type="phone number"/>
                          <Icon icon={<RiLockPasswordFill size={40} className="text-gray-500 hover:text-blue-500"/>}handler={infoHandler} type="password" field={myData.password}/>
                          </div>
                          <button onClick={fectDataHandler}className='text-white px-8 py-2 bg-blue-600 rounded-md'>{isLoading?"Loading...":"Random"}</button>
                     </div>
              </div>
            </div>
    </React.Fragment>
  );
}

export default App;
