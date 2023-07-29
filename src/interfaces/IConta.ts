export interface IConta {
    id: number,
    saldo: number,
    nome: string,
    desc: string,
    dono: string,
    banco: string | null
}