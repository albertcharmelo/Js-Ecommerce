import { supabase } from "./supabase.js"

export const getProducts = async () => {
    let { data: products, error } = await supabase
  .from('products')
  .select(`
    *,
    product_images (
        *
    )
  `)
  return {error, products}
}



export const getOrder = async (id) => {
    let { data: order, error } = await supabase
  .from('orders')
  .select(`
    *,
    order_products (
        *,
        products (
            *,
            product_images (
                *
            )
        )
    )
  `)
  .eq('id', id)
  return {error, order}
}

