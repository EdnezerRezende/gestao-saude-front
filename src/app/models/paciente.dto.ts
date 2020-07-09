import { SexoEnum } from './Enum/sexo.enum';
import { LeitoDto } from './leito.dto';
import { OrigemDto } from './origem.dto';
import { ComorbidadeDto } from './comorbidade.dto';

export class PacienteDto {
    id: number;
    nome: string;
    sexo: SexoEnum;
    dataNascimento: Date;
    leitos: LeitoDto[];
    origem: OrigemDto;
    comorbidades: ComorbidadeDto[];
    dataAdmissaoHCMG: Date;
    dataAlta: Date;
    numeroSES: number;
    textoAlta: string;
}

