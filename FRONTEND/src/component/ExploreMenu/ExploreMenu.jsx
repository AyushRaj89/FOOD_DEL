import React from "react";
import "./ExploreMenu.css";
import { menu_list } from "../../assets/assets";

export const ExploreMenu = ({category, setCategory}) => {
  return (
    <div className="explore-menu" id="explore-menu">
      <h1>Explore Our Menu</h1>
      <p className="explore-menu-text">
        Choose from a diverse menu featuring a delectable array of dishes
        crafted with the finest ingredients and culinary expertise. Our mission
        is to satisfy your cravings and elevate your dining experience. One
        delicious meal at a time
      </p>
    <div className="explore-menu-list">
        {
            menu_list.map((items, index)=>{
                return(
                    <div onClick={()=>setCategory(prev=>prev===items.menu_name ? "All" : items.menu_name)} key={index} className="explore-menu-list-item">
                        <img className={category===items.menu_name ? "active":""} src={items.menu_image} />
                        <p>{items.menu_name}</p>
                    </div>
                )
            })
        }
    </div>
    <hr />
    </div>
  );
};
