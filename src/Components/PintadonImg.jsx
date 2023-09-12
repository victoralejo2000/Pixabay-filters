import React, { useEffect, useState } from 'react'
import { getApi } from '../helpers/ConsumeApi'
import { ImgItems } from './ImgItems';




export const PintadonImg = ({valor}) => {
const[infoApi,setInfoApi]=useState([]);

useEffect(()=>{
    getApi(valor).then((newImages)=>setInfoApi(newImages.hits))
},[valor])


  return (
    <div className="row" style={{padding:'30px'}}>
    {infoApi.map((img) => (
      <div className=" col-md -4 col-lg-3  col-sm-6 col-xs-12" key={img.id}>
        <ImgItems {...img} />
      </div>
    ))}
  </div>    
  )
}
