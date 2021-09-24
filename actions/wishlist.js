export const ADD_TO_WISHLIST = "ADD_TO_WISHLIST";
export const REMOVE_PRODUCT_FROM_WISHLIST = "REMOVE_PRODUCT_FROM_WISHLIST"

export const addToWishlist = (product, quantity = 1) => ({
    type: ADD_TO_WISHLIST,
    payload: { product, quantity },
})

export const deleteProductwishlist = (productId) => ({
    type: REMOVE_PRODUCT_FROM_WISHLIST,
    payload: productId,
});