import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";


const Body = () => {

  const [listOfRestaurant, setListOfRestaurant] = useState(resList);
  
    return (
      <div className="body">
        <div className="filter">
          <button className="filter-btn" onClick={()=>{
            let filteredList = listOfRestaurant.filter((res)=> res.info.avgRating>=4.5)
            
            setListOfRestaurant(filteredList);
          }}>Tope rated Restaurant</button>
        </div>
        <div className="res-container">
          {listOfRestaurant.map((item) => {
            return <RestaurantCard key={item.info.id} resData={item} />;
          })}
        </div>
      </div>
    );
  };
  export default Body;