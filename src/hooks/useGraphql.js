import axios from 'axios'
import { useState } from 'react'
import { url } from './hooks'

const useGraphQL = () => {

    const [error, setError] = useState(null)

    const query = async q => {
        const token = JSON.parse(sessionStorage.getItem('qqrv'))
        try {
            const { data } = await axios.post(`${url}/graphql`,
                {
                    'query': q
                },
                {
                    headers: { 'Authorization': `Bearer ${token}` }
                })
            console.log(data)
            return data
        } catch (err) {
            console.log(err)
            setError(err)
        }
    }

    return { query, error }
}

export default useGraphQL