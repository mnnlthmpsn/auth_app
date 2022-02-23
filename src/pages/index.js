import { KInput, KButton } from '../components/components';
import { IndexLayout } from '../components/layouts/layouts';
import { useNavigate } from 'react-router-dom';

const Index = () => {

    const navigate = useNavigate()

    const submitRegister = e => {
        e.preventDefault()
        navigate('/home')
    }

    return (
        <IndexLayout>
            <p className="font-bold py-5">Join thousands of learners from around the world</p>
            <p className="pb-5">Master web development by making real-life projects. There are multiple parts for you to choose</p>

            {/* form starts here */}
            <form className='space-y-4' onSubmit={submitRegister}>
                <div className='space-y-3'>
                    <KInput icon={'email'} placeholder={'Email'} type={'email'} />
                    <KInput icon={'lock'} placeholder={'Password'} type={'password'} />
                </div>

                <KButton label={'Start Coding Now'} type={'submit'} classes='w-full' />
            </form>
        </IndexLayout>
    )
}

export default Index