const Image = ({ url, type }) => {

    const imageTypes = {
        'thumbnail': 'rounded w-16 h-16 object-cover object-top',
        'small': 'rounded w-8 h-8 object-cover object-top',
    }

    return <img src={url} alt={imageTypes[type]} className={imageTypes[type]} />
}

export default Image