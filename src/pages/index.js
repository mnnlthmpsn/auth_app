import { KInput, KButton } from '../components/components';
import { useState } from 'react';
import { IndexLayout } from '../components/layouts/layouts';
import { useNavigate } from 'react-router-dom';
import { useAxios } from '../hooks/hooks';
import { setJWTInStorage } from '../controllers/controllers';

const Index = () => {

    const navigate = useNavigate()

    const { executeReq, isPending } = useAxios()
    const [user, setUser] = useState({ email: '', password: '', password2: '' })

    const setEmail = e => setUser({ ...user, email: e.target.value })
    const setPassword = e => setUser({ ...user, password: e.target.value, password2: e.target.value })

    const submitRegister = async e => {
        e.preventDefault()
        const { token } = await executeReq(user, 'rest/register')

        setJWTInStorage(token)

        !!token && navigate('/home')
    }

    return (
        <IndexLayout>
            <p className="font-bold py-5">Join thousands of learners from around the world</p>
            <p className="pb-5">Master web development by making real-life projects. There are multiple parts for you to choose</p>

            {/* form starts here */}
            <form className='space-y-4' onSubmit={submitRegister}>
                <div className='space-y-3'>
                    <KInput icon={'email'} placeholder='Email' type='email' value={user.email} onChange={setEmail} />
                    <KInput icon={'lock'} placeholder='Password' type='password' value={user.password} onChange={setPassword} />
                </div>

                <KButton label={'Start Coding Now'} type={'submit'} classes='w-full' isLoading={isPending} />
            </form>
        </IndexLayout>
    )
}

export default Index