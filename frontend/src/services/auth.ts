import { methodSettings } from "../api/methodSettings";

export const auth = { 
    login: (email: string, password: string) => { 
        const [url, requestOptions] = methodSettings.post('/login', { email, password }) as [string, RequestInit];
        return fetch(url, requestOptions)
            .then(response => response.text())
                .then(result => result)
                .catch(error => error);
    },
}