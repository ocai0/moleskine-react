function Backdrop({ onClick, children }) {
    return (
        <div className="backdrop" onClick={onClick}>
            { children }
        </div>
    )
}
export default Backdrop;