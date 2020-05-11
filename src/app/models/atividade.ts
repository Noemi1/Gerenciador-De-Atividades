import { Tipo } from './tipo';
import { Modulo } from './modulo';
import { Projetos } from './projetos';
import { Usuario } from './usuario';
import { Clientes } from './clientes';

export class Atividade {
    Id: number;

    projeto_Id: number;
    projeto_Modulo_Id: number;
    atividade_Tipo_Id: number;
    usuario_Id: number;

    horaInicio: string;
    horaFim: string;
    TotalHoras: string;
    Data: string;


}
