import { Tema } from "./Tema"
import { Usuario } from "./Usuario"


export class Postagem{
    public id: number
    public titulo: string
    public descricaoPostagem: string
    public data: Date
    public usuario: Usuario
    public tema: Tema
    public linkVideo: string
    public linkExercicio: string
    public texto: string
	
	
}