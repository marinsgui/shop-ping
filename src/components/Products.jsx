import Product from './Product'

import styled from "styled-components"

import { projectFirestore } from '@/services/firebaseConnection'

import { useState, useEffect } from 'react'

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`

export default function Products() {
    const [products, setProducts] = useState([])

    useEffect(() => {
        const unsub = projectFirestore.collection('products').onSnapshot(snapshot => {
            let results = []
            snapshot.docs.forEach(doc => {
                results.push({ id: doc.id, ...doc.data() })
            })
            setProducts(results)
        })

        return () => unsub()
    }, [])

    return (
        <Container>
            {products.map(item => (
                <Product key={item.id} item={item} />
            ))}
        </Container>
    )
}