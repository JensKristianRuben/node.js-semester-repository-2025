async function fetchGet() {
    try {
        const response = await fetch(url, {
            credentials: 'include'
    });
    return await response.json();
    } catch (error) {
        console.log(error);
        
    }
}

function fetchPost(url, body) {
    return fetch(url, {
        method: "POST",
        credentials: "include",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
    })
    .then((response) => response.json())
    .then((result) => result.data)
    .catch((error) => {
        console.error("Error in fetchPost:", error);
    });
}