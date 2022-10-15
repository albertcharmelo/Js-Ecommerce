import React from "react";

export function productReducer(state = [], action) {
    switch (action.type) {
        case "CREATE_PRODUCT":
        return [...state, { ...action.product }];
        default:
        return state;
    }
}

