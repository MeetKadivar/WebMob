import React,{useEffect,useState} from 'react';
import logo from './logo.svg';
import axios from 'axios';
import { valueToNode } from '@babel/types';



const App = () => {
  
  const [data1,setData1] =  useState() 
  useEffect(() => {
    (async()=>{
      const data= await axios.get('https://api.jsonbin.io/b/5efdf1000bab551d2b6ab1c9/1')
      console.log(data.data.data);
      setData1(data.data.data);
      // data1.purchased_services.map((v)=>{console.log(v);})
     
    }
    )()
    
  }, [])
    

  
  
    
    return(
      <div >
        {/* {this.state.loading ? <div>loading...</div>:<div>person..</div>} */}
        <div className="main">
        {(()=>{
        {data1.purchased_services.map((v)=>(<p>{v.id}</p>))}
        })()}
        </div>
      </div>
    );
  }


export default App;
