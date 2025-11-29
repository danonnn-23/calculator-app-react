function Button (props) {

    const { label, handleClick } = props;

    return (
        <button 
            className={`btn`}
            onClick={() => handleClick(label)}
        >
            {label} 
        </button>
    )
}

export default Button;