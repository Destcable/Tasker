const apiMethodPost = (endpoint, data) => ({
    url: `http://127.0.0.1:8000/api${endpoint}`,
    method: "POST",
    timeout: 0,
    headers: {
        "Content-Type": "application/json",
    },
    data
});