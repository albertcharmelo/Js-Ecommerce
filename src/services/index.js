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