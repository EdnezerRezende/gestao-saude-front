import { SexoEnum } from './Enum/sexo.enum';
import { LeitoDto } from './leito.dto';
import { OrigemDto } from './origem.dto';
import { ComorbidadeDto } from './comorbidade.dto';

export class PacienteNewDto {
    id: number;
    nome: string;
    sexo: SexoEnum;
    dataNascimento: any;
    origem: OrigemDto;
    comorbidades: ComorbidadeDto[];
    numeroSES: number;
}

