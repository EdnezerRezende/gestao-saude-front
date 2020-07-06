import { PacienteDto } from './paciente.dto';

export class LeitoDto {
    id: number;
    numeroLeito: string;
    ala: string;
    setor: string;
    emUso: boolean;
    dataUtilizacaoInicial: Date;
    dataUtilizacaoFinal: Date;
    paciente: PacienteDto;
}

