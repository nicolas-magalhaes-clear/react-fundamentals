import React from 'react'
import produtos from '../../data/produtos'
import './TabelaProdutos.css'
export default props => {

    const trItems = produtos.map(produto => {
        return (
            <tr key={produto.id}>
                <td>{produto.id}</td>
                <td>{produto.nomeProduto}</td>
                <td>{produto.preco}</td>
            </tr>
        );
    })

    return (
        <table class="demTable">
            
            <thead>
                <tr>
                    <th>id</th>
                    <th>nomeProduto</th>
                    <th>Preço</th>
                </tr>
            </thead>
            <tbody>
                {trItems}
            </tbody>
        </table>
    )

}