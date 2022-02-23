import { KDropdown } from "./components"

const Header = () => {

    const menus = [
        { title: 'My Profile', icon: 'account_circle', class: 'text-[#4F4F4F]' },
        { title: 'Group Chat', icon: 'group', class: 'text-[#4F4F4F]' },
        { title: 'Logout', icon: 'logout', class: 'text-[#EB5757]' },
    ]

    return (
        <div className="flex items-center justify-between py-5">
            <p>Logo</p>
            <KDropdown menus={menus}/>
        </div>
    )
}

export default Header