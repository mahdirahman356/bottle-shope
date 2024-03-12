import { useEffect } from "react";
import { useState } from "react";
import Bottles from "./Bottles";
import { getDataToStore, getStore } from "./LocalStorage";
import Card from "./Card";


const BottleStore = () => {

    let [bottle,setBottle] = useState([])
    let [button,setButton] = useState([])  
    
    useEffect(()=>{
        fetch ('bottles.json')
        .then(res => res.json())
        .then(data => setBottle(data))
    } ,[])
    useEffect(()=>{
          if(bottle){
          let  store = []
           let storege = getStore() 
            for(let id of storege){
                let storeBottle = bottle.find(bottle => bottle.id === id)
                if(storeBottle){
                    store.push(storeBottle)
                }
            }
            setButton(store)
          }
    },[bottle])
    
    
  let hendelButton = (bottle) => {
    let newButton = [...button,bottle]
    setButton(newButton)
    getDataToStore(bottle.id)
  }
   
    return (
        <div>
            <h1>Bottle Shope</h1>
             <Card button={button}></Card>
            <div className="bottle-container">
            {
                bottle.map((bottle,index )=> <Bottles
                 key={index}
                 bottle={bottle}
                 hendelButton ={hendelButton}
                 ></Bottles>)
            }
            </div>
        </div>
    );
};

export default BottleStore;