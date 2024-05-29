type PostRequestConfig = [string, RequestInit];

export const methodSettings = { 
    post: (endpoint: string, data: object ): PostRequestConfig => {
        const url = `http://127.0.0.1:8000/api${endpoint}`;

        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const requestOptions: RequestInit = {
            method: "POST",
            headers: myHeaders,
            body: JSON.stringify(data),
            redirect: "follow"
        };

        return [url, requestOptions]
    }
}