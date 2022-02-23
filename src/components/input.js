export const KInput = ({ icon, placeholder, type }) => {
    return (
        <div className="flex flex-wrap items-stretch w-full relative border rounded bg-white ">
            <div className="flex -mr-px justify-center w-15 p-2">
                <span
                    className="flex items-center leading-normal bg-white px-1 border-0 rounded rounded-r-none subtitle1"
                >
                    <span className="material-icons">{icon}</span>
                </span>
            </div>
            <input
                autoComplete="off"
                type={type || 'text'}
                className="flex-shrink flex-grow flex-auto leading-normal pl-2 flex-1 outline-none"
                placeholder={placeholder || 'Placeholder'}
            />
        </div>
    )
}

export const KInputNoIcon = ({ placeholder, type, label, classes }) => {
    return (
        <div className="flex flex-col space-y-1">
            <label htmlFor="name text-xs">{label}</label>
            {type !== 'textarea' && <input autoComplete="off" className={`form-control ${classes || 'w-full md:w-1/2'}`} type={type} name={label} placeholder={placeholder} />}
            {type === 'textarea' && <textarea rows='3' className={`form-control ${classes || 'w-full md:w-1/2'}`} name={label} placeholder={placeholder} />}
        </div>
    )
}

export default KInput