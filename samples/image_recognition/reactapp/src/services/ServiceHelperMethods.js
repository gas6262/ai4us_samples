
export const get = async (path) => {
    const response = await fetch(`${process.env.REACT_APP_PUBLIC_API_URL}/${path}`, {
        method: 'GET'
    })
    return response
}

export const getJson = async (path) => {
    
    const response = await fetch(`${process.env.REACT_APP_PUBLIC_API_URL}/${path}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    })
    const data = await response.json()
    return data
}

export const putJson = async (path, body, baseUrl = process.env.REACT_APP_PUBLIC_API_URL, additionalHeaders = {}) => {

    const response = await fetch(`${baseUrl}/${path}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body)
    })
    const data = await response.json()
    return data
}

export const deleteJson = async (path, body, baseUrl = process.env.REACT_APP_PUBLIC_API_URL, additionalHeaders = {}) => {

    const response = await fetch(`${baseUrl}/${path}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
        body: body ? JSON.stringify(body) : undefined
    })
    const data = await response.json()
    return data
}

export const postRaw = async (path, body, baseUrl = process.env.REACT_APP_PUBLIC_API_URL, additionalHeaders = {}) => {

    const response = await fetch(`${baseUrl}/${path}`, {
        method: 'POST',
        body: body
    })
    const data = await response.json()
    return data
}