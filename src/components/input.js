export const KInput = props => {
    return (
        <div className="flex flex-wrap items-stretch w-full relative border rounded bg-white ">
            <div className="flex -mr-px justify-center w-15 p-2">
                <span
                    className="flex items-center leading-normal bg-white px-1 border-0 rounded rounded-r-none subtitle1"
                >
                    <span className="material-icons">{props.icon}</span>
                </span>
            </div>
            <input
                {...props}
                autoComplete="off"
                // type={props.type || 'text'}
                className="flex-shrink flex-grow flex-auto leading-normal pl-2 flex-1 outline-none"
                // placeholder={props.placeholder || 'Placeholder'}
            />
        </div>
    )
}

export const KInputNoIcon = props => {
    return (
        <div className="flex flex-col space-y-1">
            <label htmlFor="name text-xs">{props.label}</label>
            {props.type !== 'textarea' && <input autoComplete="off" className={`form-control ${props.classes || 'w-full md:w-1/2'}`} type={props.type} name={props.label} placeholder={props.placeholder} />}
            {props.type === 'textarea' && <textarea rows='3' className={`form-control ${props.classes || 'w-full md:w-1/2'}`} name={props.label} placeholder={props.placeholder} />}
        </div>
    )
}

export default KInput