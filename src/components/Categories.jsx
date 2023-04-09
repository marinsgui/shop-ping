import styled from "styled-components"

import CategoryItem from "./CategoryItem"

import { projectFirestore } from "@/services/firebaseConnection"

import { mobile } from "@/responsive"

import { useState, useEffect } from "react"

const Container = styled.div`
    display: flex;
    padding: 20px;
    justify-content: space-between;

    ${mobile({ flexDirection: 'column', padding: '0' })}
`

export default function Categories() {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        const unsub = projectFirestore.collection('categories').onSnapshot(snapshot => {
            let results = []
            snapshot.docs.forEach(doc => {
                results.push({ id: doc.id, ...doc.data() })
            })
            setCategories(results)
        })

        return () => unsub()
    }, [])

    return (
        <Container>
            {categories.map(item => (
                <CategoryItem key={item.id} item={item} />
            ))}
        </Container>
    )
}