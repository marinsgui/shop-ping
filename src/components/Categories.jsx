import styled from "styled-components"

import CategoryItem from "./CategoryItem"

import { collection, getDocs } from 'firebase/firestore'

import { db } from "@/services/firebaseConnection"

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
        (async () => {
            const colRef = collection(db, 'categories')

            const snapshots = await getDocs(colRef)

            const docs = snapshots.docs.map(doc => {
                const data = doc.data()
                data.id = doc.id
                return data
            })

            setCategories(docs)
        })()
    }, [])

    return (
        <Container>
            {categories.map(item => (
                <CategoryItem key={item.id} item={item} />
            ))}
        </Container>
    )
}