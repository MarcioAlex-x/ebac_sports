import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../store'
import cesta from '../../assets/cesta.png'
import { paraReal } from '../Produto'
import * as S from './styles'

const Header = () => {
  const itensNoCarrinho = useSelector((state: RootState) => state.cart.items)
  const favoritos = useSelector((state: RootState) => state.favorites.items)

  const valorTotal = itensNoCarrinho.reduce((acc, item) => {
    acc += item.preco
    return acc
  }, 0)

  return (
    <S.Header>
      <h1>EBAC Sports</h1>
      <div>
        <span>{favoritos.length} favoritos</span>
        <img src={cesta} alt="Cesta de Compras" />
        <span>
          {itensNoCarrinho.length} itens, valor total: {paraReal(valorTotal)}
        </span>
      </div>
    </S.Header>
  )
}

export default Header
