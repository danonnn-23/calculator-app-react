import Button  from "./Button.jsx";

function Keyboard() {
    return (
        <div className="keyboard-container">
            <div className="row">
                <Button label="C" type="function" handleClick={() => {}} />
                <Button label="+/-" type="function" handleClick={() => {}} />
                <Button label="%" type="function" handleClick={() => {}} />
                <Button label="÷" type="operator" handleClick={() => {}} />
            </div>
            <div className="row">
                <Button label="C" type="function" handleClick={() => {}} />
                <Button label="+/-" type="function" handleClick={() => {}} />
                <Button label="%" type="function" handleClick={() => {}} />
                <Button label="÷" type="operator" handleClick={() => {}} />
            </div>
            <div className="row">
                <Button label="C" type="function" handleClick={() => {}} />
                <Button label="+/-" type="function" handleClick={() => {}} />
                <Button label="%" type="function" handleClick={() => {}} />
                <Button label="÷" type="operator" handleClick={() => {}} />
            </div>
        </div>
    )
}

export default Keyboard;