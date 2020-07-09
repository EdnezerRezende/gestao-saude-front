import * as moment from 'moment';

export class DataUtil {

    public static DateParaString(data, formato){
        return moment(data).format(formato);
    }
}