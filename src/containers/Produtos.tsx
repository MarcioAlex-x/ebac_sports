import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../store'
import Produto from '../components/Produto'
import * as S from './styles'
import { Produto as ProdutoType } from '../App'

type Props = {
  produtos: ProdutoType[]
}

const ProdutosComponent = ({ produtos }: Props) => {
  const favoritos = useSelector((state: RootState) => state.favorites.items)

  const produtoEstaNosFavoritos = (produto: ProdutoType) => {
    return favoritos.some(f => f.id === produto.id)
  }

  return (
    <>
      <S.Produtos>
        {produtos.map((produto) => (
          <Produto
            key={produto.id}
            produto={produto}
            estaNosFavoritos={produtoEstaNosFavoritos(produto)}
          />
        ))}
      </S.Produtos>
    </>
  )
}

export default ProdutosComponent
