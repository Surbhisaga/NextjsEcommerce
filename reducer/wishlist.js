import { ADD_TO_WISHLIST, REMOVE_PRODUCT_FROM_WISHLIST } from "../actions/wishlist"

function wishListReducer(state = [], action) {
    switch (action.type) {
        case ADD_TO_WISHLIST: {
            const { product: productToAddWishlist, quantity = 1 } = action.payload;
            const productInWishlist = [...state];

            let isProductInWishlist = false;
            for (let i = 0; i < productInWishlist.length; i++) {
                const product = productInWishlist[i];

                if (product.id === productToAddWishlist.id) {
                    product.quantity = product.quantity + parseInt(quantity);
                    isProductInWishlist = true;
                    break;
                }
            }

            if (isProductInWishlist) {
                productToAddWishlist.quantity = parseInt(quantity);
                productInWishlist.push(productToAddWishlist)
            }
            return productInWishlist;
        }
        case REMOVE_PRODUCT_FROM_WISHLIST: {
            return state.filter((product) => product.id !== action.payload);
        }
        default:
            return state;
    }
}
export default wishListReducer;