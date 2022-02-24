import { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Header, Image, IdentityWidget } from '../components/components';
import { Container } from '../components/layouts/layouts';
import { useGraphQL } from '../hooks/hooks'


const Home = () => {

    const navigate = useNavigate()
    const { query } = useGraphQL()
    const [user, setUser] = useState(null)
    
    const getUser = useCallback(async () => {
        const q = '{user { id, email }}'
        const { data } = await query(q)
        setUser(data.user[0])
    }, [query])

    const dummyData = [
        { key: 'photo', value: <Image type='thumbnail' url='https://images.unsplash.com/photo-1557862921-37829c790f19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60' /> },
        { key: 'name', value: 'Xanthe Neal' },
        { key: 'bio', value: 'I am a Software developer and a big fan of devchallenges' },
        { key: 'phone', value: '908249274292' },
        { key: 'email', value: user?.email },
        { key: 'password', value: '**********' }
    ]

    useEffect(() => {
        getUser()
    }, [getUser])

    const toEditDetails = e => navigate('/details')

    return (
        <Container>
            <Header />

            {/* page header title */}
            <div className='flex flex-col space-y-2 py-5 items-center justify-center w-full'>
                <p className='header1'>Personal Info</p>
                <p className='subtitle1'>Basic Info like your name and photo</p>
            </div>

            {/* form */}
            <div className='md:px-24'>
                <div className='border border-2 rounded-lg'>

                    {/* heading */}
                    <div className='border-b kPadding'>
                        <div className='flex items-center justify-between'>
                            <div>
                                <p className='header2'>Profile</p>
                                <p className='subtitle-sm'>Some info may be visible to other people</p>
                            </div>

                            {/* to edit details */}
                            <button className='py-2 px-6 border border-2 rounded-lg hover:bg-gray-100 duration-150' onClick={toEditDetails}>Edit</button>
                        </div>
                    </div>

                    {
                        [...dummyData].map(data => (
                            <GridBuilder title={data.key} value={data.value} key={data.key} />
                        ))
                    }

                </div>

                <IdentityWidget />
            </div>
        </Container>
    )
}

export default Home

// ############ GRID BUILDER ###############
const GridBuilder = ({ title, value }) => {
    return (
        <div className='border-b kPadding'>
            <div className='grid grid-cols-4 items-center'>
                <div className='col-span-1 subtitle-sm uppercase'>{title}</div>
                <div className='col-span-3'>
                    {value}
                </div>
            </div>
        </div>
    )
}