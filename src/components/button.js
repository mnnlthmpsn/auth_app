const KButton = ({ type, label, onPressed, classes }) => {
    return (
        <button type={type || 'submit'} className={`bg-blue p-2 rounded ${classes}`} onClick={() => type === 'submit' && onPressed}>
            <p className="text-white text-sm">{label}</p>
        </button>
    )
}

export default KButton