import { useEffect, useState } from "react";

const RestauranstMenu = ()=>{
    const [restinfo, setrestinfo] = useState();


    useEffect(()=>{
      fetchRest()
    },[])

    const fetchRest = async ()=>{
        const promise = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.4364341&lng=78.4415705&restaurantId=23707&catalog_qa=undefined&submitAction=ENTER")
        
        const data = await promise.json();
        console.log("dat@",data.data)
        setrestinfo(data.data)
    }
   
    // const {name,category,imageId,price,    } = restinfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card?.card?.itemCards?.card?.info.name;

    
           
    return (
        <>
        <div>
        <h1>Burgar King: {restinfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card?.card?.itemCards?.card?.info.name}</h1>
        {/* <h3>titile{category}</h3> */}
        {/* <h3>price {price}</h3> */}
        <h3>ratings </h3>
        {/* <h3> descriptions  {description}</h3> */}

        
        </div>        
        </>
    )
}

export default RestauranstMenu;