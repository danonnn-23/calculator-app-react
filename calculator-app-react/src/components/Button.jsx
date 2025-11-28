function Button (props) {

    const { label, type, handleClick } = props;

    return (
        <button 
            className={`btn ${type}`}
            onClick={() => handleClick(label)}
        >
            {label} 
        </button>
    )
}

export default Button;