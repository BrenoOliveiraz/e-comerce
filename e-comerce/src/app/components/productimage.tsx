

// Componente das imagens consumidas da API
// Configurar, primeiro, o next.config linkando com a API desejada com o seus domains

"use client"
import { useState } from 'react'
import { ProductType } from '@/types/ProductType'
import Image from 'next/image'
import React from 'react'


type ProductImageProps = {
    product: ProductType
    fill?: boolean
}

export default function ProductImage({ product, fill }: ProductImageProps) {
    const [loading, setLoading] = useState(true)
    return fill ? (   //fill é uma condicional booleana, no caso, se a imagem não estiver carregada, ele fará o primeiro bloco pq o state inicial foi definido como true, depois de carregada, o segundo bloco

        <Image
            src={product.image}
            fill
            alt={product.title}
            className={`object-cover ${loading ? 'scale-110 blur-3xl grayscale' : 'scale-100 blur-0 grayscale-0'
                } `}
            onLoadingComplete={() => setLoading(false)} //função do react para avisar quando a imagem foi carregada
        />
    ) : (
        <Image
            src={product.image}
            width={400}
            height={700}
            alt={product.title}
            className={`object-cover ${loading ? 'scale-110 blue-3xl grayscale' : 'scale-100 blue-0 grayscale-0'
                } `}
            onLoadingComplete={() => setLoading(false)}
        />
    )



}
