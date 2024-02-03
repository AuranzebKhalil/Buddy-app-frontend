import React from 'react'


const loader = () => {
  return (
    <div style={{width:'100%', background:'rgb(142 145 142)', height:'99vh' , position:'absolute', zIndex:'6', display:'flex', alignItems:'center', justifyContent:'center'}}>
        <div style={{width:"50%", display:'flex', alignItems:'center',borderRadius:"100px", background:"#545a5d", justifyContent:"center",height:"70vh"}}>
        <img src="https://cdn.cssauthor.com/wp-content/uploads/2018/06/Infinite-Preloader.gif?strip=all&lossy=1&resize=400%2C300&ssl=1" style={{position:'relative', borderRadius:"100px"}} alt='' width={500}  height={400}/>
        </div>
    </div>
  )
}

export default loader