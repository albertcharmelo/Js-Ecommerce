import React from 'react'
import './../../styles/categories.css'
import Category from './Category'
const Categories = () => {
  return (
    <div className='categories__box p-5'>
        <h1 className='text-center h2 categories__title mb-5'>Categorias de Productos </h1>
        <div className='row d-flex justify-center'>
            <Category title={'Lacteos'} mount={20} img={"/img/lacteos.png"} />
            <Category title={'Viveres'} mount={60} img={"/img/pasta.png"} />
            <Category title={'Higiene'} mount={15} img={"/img/higiene.png"} />
            <Category title={'Limpieza'} mount={8} img={"/img/limpieza.png"} />



        </div>
    </div>
  )
}

export default Categories