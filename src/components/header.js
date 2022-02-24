import { useNavigate } from "react-router-dom"
import { KDropdown } from "./components"

const Header = () => {

    const navigate = useNavigate()

    const logout = () => {
        sessionStorage.clear()
        navigate('/')
    }

    const menus = [
        { title: 'My Profile', icon: 'account_circle', class: 'text-[#4F4F4F]', onclick: () => logout() },
        { title: 'Group Chat', icon: 'group', class: 'text-[#4F4F4F]', onclick: () => logout()},
        { title: 'Logout', icon: 'logout', class: 'text-[#EB5757]', onclick: () => logout() },
    ]

    return (
        <div className="flex items-center justify-between py-5">
            <p>Logo</p>
            <KDropdown menus={menus}/>
        </div>
    )
}

export default Header