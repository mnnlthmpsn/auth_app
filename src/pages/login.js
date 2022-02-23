import { KInput, KButton } from '../components/components';
import { IndexLayout } from '../components/layouts/layouts';
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const navigate = useNavigate()

    const submitLogin = e => {
        e.preventDefault()
        navigate('/home')
    }

    return (
        <IndexLayout>
            <p className="py-5">Login</p>

            {/* form starts here */}
            <form className='space-y-4' onSubmit={submitLogin}>
                <div className='space-y-3'>
                    <KInput icon={'email'} placeholder={'Email'} type={'email'} />
                    <KInput icon={'lock'} placeholder={'Password'} type={'password'} />
                </div>

                <KButton label={'Login'} type={'submit'} classes='w-full' />
            </form>
        </IndexLayout>
    )
}

export default Login