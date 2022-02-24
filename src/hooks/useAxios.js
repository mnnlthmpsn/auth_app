import { useState } from "react"
import axios from "axios"
import { url } from "./hooks"

const useAxios = () => {    

    const [error, setError] = useState(null)
    const [isPending, setIsPending] = useState(false)

    const executeReq = async (body, path) => {

        setIsPending(true)

        try {
           const res = await axios.post(`${url}/${path}`, body)
            const { data } = res
            return data
        }
        catch (err) {
            console.log(err)
            setError(err)
        } finally { setIsPending(false) }
    }

    return { executeReq, error, isPending }
}
export default useAxios