import { Menu, Transition } from '@headlessui/react'
import { Image } from './components'
import { Fragment, useCallback, useEffect, useState } from 'react'
import { useGraphQL } from '../hooks/hooks'

const KDropdown = ({ menus }) => {

    const { query } = useGraphQL()
    const [user, setUser] = useState(null)

    const getUser = useCallback(async () => {
        const q = '{user { id, email }}'
        const { data } = await query(q)
        setUser(data.user[0])
    }, [query])

    useEffect(() => getUser(), [getUser])
    return (
        <Menu as="div" className="relative inline-block text-left">
            <div>
                <Menu.Button className="flex space-x-2 items-center text-xs">
                    <Image type='small' url='https://images.unsplash.com/photo-1557862921-37829c790f19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60' />
                    <p className='font-bold'>{user?.email}</p>
                    <span className="material-icons text-xs">
                        expand_less
                    </span>
                </Menu.Button>
            </div>
            <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <Menu.Items className="absolute right-0 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="p-2">
                        {
                            menus.map(menu => (
                                <Menu.Item key={menu.icon}>
                                    {({ active }) => (
                                        <button
                                            onClick={menu.onclick}
                                            className={`${active ? 'bg-gray-100' : null
                                                } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                                        >
                                            <span className={`material-icons pr-2 text-base ${menu.class}`}>
                                                {menu.icon}
                                            </span>
                                            <p className={menu.class}>{menu.title}</p>
                                        </button>
                                    )}
                                </Menu.Item>
                            ))
                        }
                    </div>
                </Menu.Items>
            </Transition>
        </Menu>
    )
}

export default KDropdown