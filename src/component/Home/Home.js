import React, { useEffect, useState } from 'react';
// import Info from '../Info/Info';
// import Countries from '../JSON/countries.json';
import info from '../JSON/info.json';
import Middle from '../Card/Middle';

const Home = () => {
    const [user,setUser]=useState([]);
    useEffect(()=>{
       setUser(info)
    },[])
    console.log(user);
    return (
        <div>
            {
                user.map(user=><Middle user={user}></Middle>)
            }
        </div>
    );
};

export default Home;