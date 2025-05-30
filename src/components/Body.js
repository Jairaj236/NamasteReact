import RestCard from './RestCard';
import litsofRest from "../utils/mockData"
import { useState, useEffect } from "react"
import ShimarCard from './ShimarCard';
const Body = ()=>{

    const [listResturent,setlistResturent] = useState([])
    const [filterReasturants, setfilterReasturants] = useState([])
    const [searchText,  setsearchText ] = useState(listResturent)
    useEffect(()=>{
        fetchApi();
        console.log("usefe")
    },[])
    console.log("body")

   const fetchApi = async() =>{
      const data = await fetch("https://www.swiggy.com/mapi/restaurants/list/v5?offset=0&is-seo-homepage-enabled=true&lat=17.4364341&lng=78.4415705&carousel=true&third_party_vendor=1")
       const response = await data.json();
    // console.log("##",response);
     
        // setlistResturent(response)
        setlistResturent(response?.data?.cards[4].card?.card?.gridElements?.infoWithStyle?.restaurants);
        setfilterReasturants(response?.data?.cards[4].card?.card?.gridElements?.infoWithStyle?.restaurants)
    }
    console.log("@@",listResturent);
    if(listResturent.length === 0){
        return <ShimarCard/>
    }
return(
    <div className="body-container">
       <div className="filter">
               <div className='search'>
                <input type='text' className='search-box' value={searchText} onChange={(e)=>{setsearchText(e.target.value)}}/>
                <button
                onClick={()=>{
                    const searchProducts = listResturent.filter((data)=>data.info.name.toLowerCase().includes(searchText.toLowerCase()))
                    setfilterReasturants(searchProducts)
                }}
                >search</button>

               </div>


              <button className="filter-btn" onClick={()=>{
               const filteredList = listResturent.filter((res)=>res.info.avgRating >= 4.3)  
               setlistResturent(filteredList)
              }}>
                Top rated restaurant
                </button>
       </div>
       <div className="rest-container">
           {
            filterReasturants.map((data, index)=>(<RestCard key={index} resData={data}/>))
           }
       </div>
    </div>
)
}
export default Body;