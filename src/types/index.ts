export interface IUser {
    id: number;
    accessNivel: number;
    name: string;
    blocked: boolean;
    cpf: string;
    dateOfBirth: string;
    email: string;
    sessionId: string;
}

export interface IProduct {
    ID: number;
    NOME: string;
    IMGPATH: string;
    VALOR: string;
    DESCONTO: string;
    DESCRICAO: string;
    MARCA: EMarcasNome;
    COR: EColors;
}

export interface IAvaliation {
    usuario: string;
    produto: string;
    nota: number;
    comentario: string;
    qualidade_produto: string;
    imagem: string;
}

export enum EUserAccessNivel {
    ADMIN = 1,
    WORKER = 2,
    USER = 3
}

export enum EColors {
    ROXO = 1,
    VERMELHO = 3
}

export enum EMarcasNome {
    RAYBAN = 1,
}

export const EColorsNames: Record<EColors, string> = {
    [EColors.ROXO]: 'Roxo',
    [EColors.VERMELHO]: 'Vermelho',
}

export const EMarcas: Record<EMarcasNome, string> = {
    [EMarcasNome.RAYBAN]: 'RayBan',
}

export interface IAddress {
    id: string | number;
    street: string;
    number: string;
    city: string;
    complement: string;
    cep: string;
}

export interface ICartItem {
    id: number;
    name: string;
    price: string;
    description: string;
}