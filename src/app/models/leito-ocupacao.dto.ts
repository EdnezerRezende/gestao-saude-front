import { PacienteDto } from './paciente.dto';

export class LeitoOcupacaoDto {
    id: number;
    numeroLeito: string;
    ala: string;
    setor: string;
    idPaciente: number;
    nome: string;
    sexo: string;
    numeroSES: number;
    textoAlta: string;
}

