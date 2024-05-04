import './Popup.css'
import { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
function Popup() {
    let [popuptoggle, setpopup] = useState(true);
    let popupbtn=()=>{
        setpopup(false);
    }
    return (<>
        {popuptoggle && <div className="popup">
            <Row>
            <Col className="popupout" sm={12}>
                <div className="xmarkicon" onClick={popupbtn}>
                    <i className="fa-solid fa-xmark" ></i>
                </div>
               </Col>
               </Row>
        </div>}
    </>
    );
}
export default Popup;