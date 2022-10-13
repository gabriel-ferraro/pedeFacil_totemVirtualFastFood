export interface Produto {
    id: number;
    qtde: number;
    nome: string;
    preco: number;
    desconto: number;
    descricao: string;
    foto: string;
    categoria: string;
}

//put produto
export interface RequestProduto {
    id: string;
    qtde: number;
    nome: string;
    preco: number;
    desconto: number;
    descricao: string;
    foto: string;
    categoria: string;
}

export interface ResponseProduto {
    id: string;
    qtde: number;
    nome: string;
    preco: number;
    desconto: number;
    descricao: string;
    foto: string;
    categoria: string;
}
