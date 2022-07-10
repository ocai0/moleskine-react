function DeleteModal({ onCancel, onConfirm }) {
    return (
        <>
            <div className="modal">
                <button onClick={onCancel}>Cancel</button>
                <button onClick={onConfirm}>Confirm</button>
            </div>
        </>
    );
}
export default DeleteModal;