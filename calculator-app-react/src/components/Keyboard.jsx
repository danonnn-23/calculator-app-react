
function Keyboard() {

    const svgClrPrimary = "hsl(0, 0%, 90%)";
    const svgClrSecondary = "hsl(0, 0%, 0%)";
    const svgClrTertiary = "hsl(0, 0%, 90%)";
    const svgClrQuaternary = "hsl(0, 0%, 100%)";

    return (
        <> 
            <div className="btn-row1">
                <div className="other-functions-btn">
                    <button className="btn">(</button>
                    <button className="btn">)</button>
                    <button className="btn">x<sup>2</sup></button>
                </div>
                <div className="secondary-functions-btn">
                    <button className="btn">AC</button>
                    <button className="btn"><svg viewBox="0 0 24 24" width="20" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M11.7071 15.2938C11.3166 14.9033 11.3166 14.2701 11.7071 13.8796L13.5839 12.0027L11.7079 10.1267C11.3174 9.73617 11.3174 9.103 11.7079 8.71248C12.0984 8.32195 12.7316 8.32195 13.1221 8.71248L14.9982 10.5885L16.8796 8.70702C17.2702 8.3165 17.9033 8.3165 18.2938 8.70702C18.6844 9.09755 18.6844 9.73071 18.2938 10.1212L16.4124 12.0027L18.293 13.8833C18.6835 14.2739 18.6835 14.907 18.293 15.2975C17.9025 15.6881 17.2693 15.6881 16.8788 15.2975L14.9982 13.4169L13.1213 15.2938C12.7308 15.6843 12.0976 15.6843 11.7071 15.2938Z" fill={svgClrSecondary}></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M5.6131 5.14653C6.18186 4.42266 7.05148 4 7.97206 4H20C21.6568 4 23 5.34315 23 7V17C23 18.6569 21.6568 20 20 20H7.97206C7.05148 20 6.18186 19.5773 5.6131 18.8535L1.68453 13.8535C0.829805 12.7656 0.829807 11.2344 1.68453 10.1465L5.6131 5.14653ZM7.97206 6C7.6652 6 7.37533 6.14089 7.18574 6.38218L3.25717 11.3822C2.97226 11.7448 2.97226 12.2552 3.25717 12.6178L7.18574 17.6178C7.37533 17.8591 7.6652 18 7.97206 18H20C20.5523 18 21 17.5523 21 17V7C21 6.44772 20.5523 6 20 6H7.97206Z" fill={svgClrSecondary}></path> </g></svg></button>
                    <button className="btn">%</button>
                </div>
                <div className="primary-functions-btn">
                    <button className="btn"><svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M6.34277 12L17.6565 12" stroke={svgClrPrimary} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <circle cx="12" cy="16.9498" r="1.5" transform="rotate(45 12 16.9498)" fill={svgClrPrimary}></circle> <circle cx="12" cy="7.05024" r="1.5" transform="rotate(45 12 7.05024)" fill={svgClrPrimary}></circle> </g></svg></button>
                </div>
            </div>
            <div className="btn-row2">
                <div className="other-functions-btn">
                    <button className="btn">(</button>
                    <button className="btn">)</button>
                    <button className="btn">x<sup>2</sup></button>
                </div>
                <div className="numbers-btn">
                    <button className="btn">7</button>
                    <button className="btn">8</button>
                    <button className="btn">9</button>
                </div>
                <div className="primary-functions-btn">
                    <button className="btn"><svg fill={svgClrPrimary}viewBox="-3.5 0 19 19" xmlns="http://www.w3.org/2000/svg" class="cf-icon-svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M11.383 13.644A1.03 1.03 0 0 1 9.928 15.1L6 11.172 2.072 15.1a1.03 1.03 0 1 1-1.455-1.456l3.928-3.928L.617 5.79a1.03 1.03 0 1 1 1.455-1.456L6 8.261l3.928-3.928a1.03 1.03 0 0 1 1.455 1.456L7.455 9.716z"></path></g></svg></button>
                </div>
            </div>
            <div className="btn-row3">
                <div className="other-functions-btn">
                    <button className="btn">(</button>
                    <button className="btn">)</button>
                    <button className="btn">x<sup>2</sup></button>
                </div>
                <div className="numbers-btn">
                    <button className="btn">4</button>
                    <button className="btn">5</button>
                    <button className="btn">6</button>
                </div>
                <div className="primary-functions-btn">
                    <button className="btn"><svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M6 12L18 12" stroke={svgClrPrimary} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg></button>
                </div>
            </div>
            <div className="btn-row4">
                <div className="other-functions-btn">
                    <button className="btn">(</button>
                    <button className="btn">)</button>
                    <button className="btn">x<sup>2</sup></button>
                </div>
                <div className="numbers-btn">
                    <button className="btn">1</button>
                    <button className="btn">2</button>
                    <button className="btn">3</button>
                </div>
                <div className="primary-functions-btn">
                    <button className="btn"><svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M6 12H18M12 6V18" stroke={svgClrPrimary} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg></button>
                </div>
            </div>
            <div className="btn-row5">
                <div className="other-functions-btn">
                    <button className="btn"><sup>2</sup>&radic;x</button>
                    <button className="btn"><sup>3</sup>&radic;x</button>
                    <button className="btn"><sup>y</sup>&radic;x</button>
                    <button className="btn"><svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M14.2893 5.70708C13.8988 5.31655 13.2657 5.31655 12.8751 5.70708L7.98768 10.5993C7.20729 11.3805 7.2076 12.6463 7.98837 13.427L12.8787 18.3174C13.2693 18.7079 13.9024 18.7079 14.293 18.3174C14.6835 17.9269 14.6835 17.2937 14.293 16.9032L10.1073 12.7175C9.71678 12.327 9.71678 11.6939 10.1073 11.3033L14.2893 7.12129C14.6799 6.73077 14.6799 6.0976 14.2893 5.70708Z" fill={svgClrQuaternary}></path> </g></svg></button>
                </div>
                <div className="numbers-btn">
                    <button className="btn">0</button>
                    <button className="btn">.</button>
                </div>
                <div className="primary-functions-btn">
                    <button className="btn"><svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M20.75 7a1.25 1.25 0 1 1 0 2.5H3.25a1.25 1.25 0 0 1 0-2.5h17.5zM20.75 15.5a1.25 1.25 0 1 1 0 2.5H3.25a1.25 1.25 0 1 1 0-2.5h17.5z" fill={svgClrPrimary}></path></g></svg></button>
                </div>
            </div>
        </>
    )
}

export default Keyboard;