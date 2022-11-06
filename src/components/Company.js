import {useContext, useState, useEffect} from 'react';
import {CompanyContext} from '../contexts/CompanyContext';
import { Modal, Button, OverlayTrigger, Tooltip } from 'react-bootstrap';
import EditForm from './EditForm'



const Company = ({company}) => {

    const {deleteCompany} = useContext(CompanyContext)

    const [show, setShow] = useState(false);
    
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    useEffect(() => {
        handleClose()
    }, [company])

    return (
        <>
            <td>{company.name}</td>
            <td>{company.address}</td>
            <td>{company.createdby}</td>
            <td>
                <OverlayTrigger
                    overlay={
                        <Tooltip id={`tooltip-top`}>
                            Edit
                        </Tooltip>
                    }>
                    <button onClick={handleShow}  className="btn text-warning btn-act" data-toggle="modal">Edit</button>
                </OverlayTrigger>
                <OverlayTrigger
                    overlay={
                        <Tooltip id={`tooltip-top`}>
                            Delete
                        </Tooltip>
                    }>
                    <button onClick={() => deleteCompany(company.id)}  className="btn text-danger btn-act" data-toggle="modal">Delete</button>
                </OverlayTrigger>
                
                
            </td>

            <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
            <Modal.Title>
                Edit Company
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <EditForm theCompany={company} />
        </Modal.Body>
        <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close Button
                </Button>
        </Modal.Footer>
    </Modal>
        </>
    )
}

export default Company;