import "../assets/css/Modal.css"
export function Modal (props){
    return (
        <div className="modal-container ">
            <div className="modal">
                <div className="modal-title">
                    <h1>
                        title
                    </h1>
                </div>
                <div className="modal-body">
                    {
                        props.children
                    }
                </div>
                <div className="modal-footer">
                    <input type="button" value="cancel"/>
                    
                </div>
            </div>
        </div>
    )
}