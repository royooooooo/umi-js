export type LoginRequestParams = { userName: string; password: string }

export const loginApi = (payload: LoginRequestParams) => {
    return fetch("http://localhost:8000/api/users", {
        method: "POST",
        body: JSON.stringify(payload)
    }).then((response: Response) => response.json())
}
