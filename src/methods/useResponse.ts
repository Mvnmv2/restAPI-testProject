export default async function useResponse({URL, method, headers, body}) {
    try {
        const response = await fetch(URL, {
            method,
            headers,
            body
        });

        let data = await response.json();
        let status = response.status;

        return {data, status};

    } catch (error) {
        return error
    }
}