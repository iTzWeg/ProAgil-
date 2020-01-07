export interface Lote {
    id: number;
    nome: string;
    preco: number;
    DataInicio?: Date;
    DataFim?: Date;
    quantidade: number;
    EventoId: number;
}
