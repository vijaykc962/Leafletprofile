// import React from 'react'
import Testcss from './Testcss.css'
import Map from './Map'
import Moment from './Moment';
import React, { useEffect } from 'react';
import {useState} from 'react';
import moment from 'moment'

export default function Display() {
  const[data,setdata]=useState({});
  const[name,setname]=useState('');
  const[username,setusername]=useState('');
  const[pic,setpic]=useState('');
  const[gender,setgender]=useState('');
  const[dob,setdob]=useState('');
  const[number,setnumber]=useState('');
  const[add,setadd]=useState('');
  const[mail,setmail]=useState('');
  const[lat,setlat]=useState('');
  const[long,setlong]=useState('');
       
  function setdetail(){
    console.log( data);
    setusername(data?.login?.username);
    setname(data?.name?.title + " " + data?.name?.first + " " + data?.name?.last);
    setpic(data?.picture?.medium);
    setgender(data?.gender);
    setdob(data?.dob?.date);
    setnumber(data?.cell);
    setadd(data?.location?.street?.name);
    setmail(data?.email);
    setlat(data?.location?.coordinates?.latitude);
    setlong(data?.location?.coordinates?.longitude);
    
  }

  useEffect(() => {
    async function getdata(){
      const url = "https://randomuser.me/api/";
      const response = await fetch(url);
      const json = await response.json();
      console.log(json);
      setdata(json.results[0]);}

      getdata();
    }, []);

      useEffect(setdetail, [data]);
   
   let date=moment(dob).format('D MMM YYYY');
      
  return (
      <>
    <div id="display">
           
        <div id='map'><Map lati={lat} longi={long} add={add}/></div>
        <div className='profile'> <img src={pic} id="image"></img> <div id='name' className='bold'>{name} </div></div>
        <div  className='block'> <div className='bold'>user name: </div> <div id='user'>{username}</div> <button type="button" className="btn btn-primary">Save</button></div>
        <div  className='block'> <div className='bold'>Gender</div> <div id='gender'>{gender}</div>  <button type="button" className="btn btn-primary">Edit</button> </div>
        <div  className='block'> <div className='bold'>Date of Birth</div> <div id='dob'>{date}</div>  <button type="button" className="btn btn-primary">Edit</button> </div>
        <div className='block'> <div className='bold'>Phone number </div> <div id='number' >{number}</div>  <button type="button" className="btn btn-primary">Edit</button> </div>
        <div  className='block'> <div className='bold'>Adress </div> <div id='address'>{add}</div>  <button type="button" className="btn btn-primary">Save</button></div>
        <div  className='block'><div className='bold'>Email </div> <div id='mail'>{mail}</div>  <button type="button" className="btn btn-primary">Edit</button> </div>
    </div>
    </>
  )
}
