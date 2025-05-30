import {IMG_URL} from '../utils/constains'
const RestCard = (props)=>{
  const {resData} =props
  const {cloudinaryImageId,name,avgRating,cuisines,costForTwo
  } = resData.info;
  console.log("ratigs",avgRating);
  
    return(
        <div className="restCard">
          <img
          className="rest-img"
          src={IMG_URL+cloudinaryImageId}
          />
          <h3>{name}</h3>
          {/* <h3>{areaName}</h3> */}
          <h3>{cuisines.join(",")}</h3>
           <h4>{avgRating}</h4> 
           <h4>{costForTwo}</h4> 

        </div>
    )
}
export default RestCard;