export default async function useReader(URL) {

// Шаг 1: начинаем загрузку fetch, получаем поток для чтения
    let response = await fetch(URL);

    const reader = response.body.getReader();

// Шаг 2: получаем длину содержимого ответа
    const contentLength = +response.headers.get('Content-Length');

// Шаг 3: считываем данные:
    let receivedLength = 0; // количество байт, полученных на данный момент
    let chunks = []; // массив полученных двоичных фрагментов (составляющих тело ответа)
    while (true) {
        const {done, value} = await reader.read();

        if (done) {
            break;
        }

        chunks.push(value);
        receivedLength += value.length;

        console.log(`Получено ${receivedLength} из ${contentLength}`)
    }

}

