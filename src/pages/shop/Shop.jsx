import React from 'react'
import { Grid } from '@mui/material'
import Product from './Product'


const products = [
    {id: 1, name: 'shoes', description: 'Running shoes', price: '$70'},
    {id: 2, name: 'wallet', description: 'leather wallet', price: '$12'},
    {id: 3, name: 'bra', description: 'wonder bra', price: '$20'},
    {id: 4, name: 'pants', description: 'chino pants', price: '$35'},
    {id: 5, name: 'jacket', description: 'thermoball jacket', price: '$170'},
    {id: 6, name: 'cap', description: 'B2F cap', price: '$25'},
]
const Shop = () => {
  return (
    <main>
        <Grid container justify="center" spacing={4}>
            {products.map((product)=>(
                <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                    <Product product={product}/>
                </Grid>
            ))}
        </Grid>
    </main>
  )
}

export default Shop