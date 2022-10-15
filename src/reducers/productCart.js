

export function productCartReducer(state = [], action) {
    switch (action.type) {
        case "ADD_TO_CART":
        //if the product is already in the cart, increase the quantity
        if (state.some((product) => product.id === action.payload.id)) {
            return state.map((product) =>
            product.id === action.payload.id
                ? { ...product, quantity: product.quantity + 1 }
                : product
            );

        }else{
            return [...state, { ...action.payload, quantity: 1 }];
        }

        case "REMOVE_FROM_CART":
            return state.filter((product) => product.id !== action.payload.id);
        case "INCREASE_QUANTITY":
            return state.map((product) => {
                
                if (product.id === action.payload.id) {
                    return { ...product, quantity: product.quantity + 1 };
                }
                return product;
            });
        case "DECREASE_QUANTITY":
            return state.map((product) => {
                if (product.id === action.payload.id) {
                    return { ...product, quantity: product.quantity - 1 };
                }
                return product;
            });
            
        default:
        return state;
    }
}


