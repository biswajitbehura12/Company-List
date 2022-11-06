import { Modal, Button, Alert} from 'react-bootstrap';
import {useContext, useEffect, useState } from 'react';
import {CompanyContext} from '../contexts/CompanyContext';
import Company from './Company';
import AddForm from './AddForm';
import Pagination from './Pagination';

const CompanyList = () => {

    const {sortedCompanys} = useContext(CompanyContext);

    const [showAlert, setShowAlert] = useState(false);

    const [show, setShow] = useState(false);
    
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);
    //const handleShowAlert = () =>setShowAlert(true);

    const [currentPage, setCurrentPage] = useState(1);
    const [companysPerPage] = useState(2)

    const handleShowAlert = () => {
        setShowAlert(true);
        setTimeout(()=> {
            setShowAlert(false);
        }, 2000)
    }

    useEffect(() => {
        handleClose();

        return () => {
            handleShowAlert();
        }
    }, [sortedCompanys])

    const indexOfLastCompany = currentPage * companysPerPage;
    const indexOfFirstCompany = indexOfLastCompany - companysPerPage;
    const currentCompanys = sortedCompanys.slice(indexOfFirstCompany, indexOfLastCompany);
    const totalPagesNum = Math.ceil(sortedCompanys.length / companysPerPage);


    return (
    <>
    <div className="table-title">
        <div className="row">
            <div className="col-sm-6">
                <h2>Manage <b>Comapany</b></h2>
            </div>
            <div className="col-sm-6">
                <Button onClick={handleShow} className="btn btn-success" data-toggle="modal"> <span>Add New Company</span></Button>					
            </div>
        </div>
    </div>

    <Alert show={showAlert} variant="success">
        Comapany List Updated Succefully!
    </Alert>

    <table className="table table-striped table-hover">
        <thead>
            <tr>
                <th> Company Name</th>
                <th> Company Address</th>
                <th>Createdby</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>

                {
                  currentCompanys.map(company => (
                      <tr key={company.id}>
                        <Company company={company} />
                    </tr>
                  ))  
                }
                

        </tbody>
    </table>

    <Pagination pages = {totalPagesNum}
                setCurrentPage={setCurrentPage}
                currentCompanys ={currentCompanys}
                sortedCompanys = {sortedCompanys} />

    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
            <Modal.Title>
                Add Company
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <AddForm />
        </Modal.Body>
        <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Cancel
                </Button>
        </Modal.Footer>
    </Modal>
    </>
    )
}

export default CompanyList;