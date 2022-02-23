import { Container } from "../components/layouts/layouts"
import { Header, IdentityWidget, Image, KInputNoIcon, KButton } from '../components/components'
import { useNavigate } from "react-router-dom"

const Details = () => {

    const navigate = useNavigate()

    const openFileBrowser = () => {
        console.log('your function for image upload here')
    }

    return (
        <Container>
            <Header />

            <div className='md:px-24'>
                {/* Back button */}
                <div className="flex space-x-1 items-center pt-10 pb-5 text-blue cursor-pointer" onClick={() => navigate(-1)}>
                    <span className="material-icons text-xs">arrow_back_ios</span>
                    <p>Back</p>
                </div>

                <div className='border border-2 rounded-lg kPadding md:kPadding-md space-y-8'>

                    {/* title */}
                    <div>
                        <p className="header2">Change Info</p>
                        <p className="subtitle-sm">Changes will be reflected to every services</p>
                    </div>

                    {/* profile photo */}
                    <div className="flex space-x-6 items-center">
                        <div className="flex items-center justify-center" onClick={openFileBrowser}>
                            <Image type='thumbnail' url='https://images.unsplash.com/photo-1557862921-37829c790f19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60' />
                            <span class="material-icons absolute text-gray-100 cursor-pointer">
                                photo_camera
                            </span>
                        </div>

                        <p className="subtitle-sm">CHANGE PHOTO</p>
                    </div>

                    <form className="space-y-4">

                        {/* name */}
                        <KInputNoIcon placeholder='Enter your name...' label='Name' type='text' />

                        <KInputNoIcon placeholder='Enter your bio...' label='Bio' type='textarea' />

                        {/* phone */}
                        <KInputNoIcon placeholder='Enter your phone...' label='Phone' type='tel' />

                        {/* email */}
                        <KInputNoIcon placeholder='Enter your email...' label='Email' type='email' />

                        {/* password */}
                        <KInputNoIcon placeholder='Enter your password...' label='Password' type='password' />

                        <KButton type='submit' label='Save' classes='px-6' />
                    </form>

                </div>

                <IdentityWidget />
            </div>
        </Container>
    )
}

export default Details