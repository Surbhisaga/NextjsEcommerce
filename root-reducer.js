import { combineReducers } from "redux";
import ourTeamReducer from "./components/OurTeam/OurTeam.reducer";
import ShopCategoriesReducer from "./components/ShopCategories/ShopCategories.reducer";
import cartReducer from "./reducer/cart";
import productListReducer from "./reducer/productList.reducer";
import productReducer from "./reducer/products.reducer";
import wishListReducer from "./reducer/wishlist";

export const rootReducer = combineReducers({
    teamMembers: ourTeamReducer,
    shopCategories: ShopCategoriesReducer,
    cart: cartReducer,
    products: productReducer,
    productList:productListReducer,
    wishList:wishListReducer,
})