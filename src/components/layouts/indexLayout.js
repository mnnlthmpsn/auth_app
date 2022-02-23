import { SocialWidget, IdentityWidget } from '../components';
import { useNavigate, useLocation } from 'react-router-dom';
import { Fragment } from 'react';


const IndexLayout = ({ children }) => {

    const navigate = useNavigate()
    const { pathname } = useLocation()

    return (
        <div className="h-screen w-full flex flex-col items-center justify-center">
            <div className="h-auto w-96">
                <div className='border border-0 md:border-2 rounded-2xl p-8 md:p-10 flex flex-col'>
                    {/* logo */}
                    <p className='pb-3'>Logo here</p>

                    {children}

                    <SocialWidget />

                    <p className='subtitle-sm pt-5 text-center'>
                        {
                            pathname === '/'
                                ? <Fragment>Already a member? <span className='text-blue cursor-pointer' onClick={() => navigate('/login')}>Login</span></Fragment>
                                : <Fragment>Don't have an account yet? <span className='text-blue cursor-pointer' onClick={() => navigate('/')}>Register</span></Fragment>
                        }
                    </p>

                </div>

                {/* created by */}
                <IdentityWidget />
            </div>
        </div>
    )
}

export default IndexLayout