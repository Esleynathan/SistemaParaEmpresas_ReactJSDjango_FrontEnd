// - Formato padrão de datas no Brasil e na API - dd/mm/yyyy hh:mm -> 01/01/2023 20:00
// - Fomrmato (ISO) e (JS) padrão internacional - yyyy-mm-dd hh:mm -> 2023-01-01 20:00

export const useDate = () => {
    const formatDateForAPI = (value: string) => {  
        //value = yyyy-mm-ddThh:mm -> dd/mm/yyyy hh:mm
        const [year, month, day, time] = value.replace('T', '-').split('-'); // => ['yyyy', 'mm', 'dd', 'hh:mm']

        return `${day}/${month}/${year} ${time}`;
    }

    const formatAPIdate = (value: string) => {  
        //value = yyyy-mm-ddThh:mm:ssZ  -> dd/mm/yyyy hh:mm
        
        const [year, month, day, time] = value.slice(0, -4).replace('T', '-').split('-'); // => ['yyyy', 'mm', 'dd', 'hh:mm']

        return `${day}/${month}/${year} ${time}`;
    }




    return{
        formatDateForAPI,
        formatAPIdate,
    }
}
