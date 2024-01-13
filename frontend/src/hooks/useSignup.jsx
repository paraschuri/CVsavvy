import { useState } from "react";
import { useAuthContext } from './useAuthContext'

export const useSignup = () => {
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(null)
    const { dispatch } = useAuthContext()

    const signup = async (name, email, password, isUser) => {
        setIsLoading(true)
        setError(null)
        const response = await fetch(`/api/signup/${isUser ? "user" : "recruiter"}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, email, password })
        })

        const json = await response.json()
        json.user = isUser

        if (!response.ok) {
            setIsLoading(false)
            setError(json.error)
        }
        else {
            //saving to local storage
            localStorage.setItem("data", JSON.stringify(json))

            dispatch({ type: 'LOGIN', payload: json })

            setIsLoading(false)
        }
    }
    return { signup, isLoading, error, setError }
}