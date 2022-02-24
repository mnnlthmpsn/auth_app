import { KInput, KButton } from '../components/components';
import { IndexLayout } from '../components/layouts/layouts';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useAxios } from '../hooks/hooks';
import { setJWTInStorage } from '../controllers/controllers';

const Login = () => {

    const navigate = useNavigate()
    const [user, setUser] = useState({ email: '', password: '' })
    const { executeReq, isPending } = useAxios()

    const setEmail = e => setUser({ ...user, email: e.target.value })
    const setPassword = e => setUser({ ...user, password: e.target.value, password2: e.target.value })

    const submitLogin = async e => {
        e.preventDefault()
        const { token } = await executeReq(user, 'rest/login')
        
        setJWTInStorage(token)
        
        navigate('/home')
    }

    return (
        <IndexLayout>
            <p className="py-5">Login</p>

            {/* form starts here */}
            <form className='space-y-4' onSubmit={submitLogin}>
                <div className='space-y-3'>
                    <KInput icon={'email'} placeholder='email' type='email' value={user.email} onChange={setEmail} />
                    <KInput icon={'lock'} placeholder='Password' type='password' value={user.password} onChange={setPassword} />
                </div>

                <KButton label={'Login'} type={'submit'} classes='w-full' isLoading={isPending} />
            </form>
        </IndexLayout>
    )
}

export default Login