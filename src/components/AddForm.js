import { Form, Button } from "react-bootstrap"

import {CompanyContext} from '../contexts/CompanyContext';
import {useContext, useState} from 'react';



const AddForm = () =>{

    const {addCompany} = useContext(CompanyContext);

    const [newCompany, setNewCompany] = useState({
        name:"", createdby:"", address:""
    });

    const onInputChange = (e) => {
        setNewCompany({...newCompany,[e.target.name]: e.target.value})
    }

    const {name, createdby, address} = newCompany;

    const handleSubmit = (e) => {
        e.preventDefault();
        addCompany(name, createdby, address);
    }

     return (

        <Form onSubmit={handleSubmit}>
            <Form.Group>
                <Form.Control
                    type="text"
                    placeholder="Company Name *"
                    name="name"
                    value={name}
                    onChange = { (e) => onInputChange(e)}
                    required
                />
            </Form.Group>
            <Form.Group>
                <Form.Control
                    as="textarea"
                    placeholder="Address"
                    rows={3}
                    name="address"
                    value={address}
                    onChange = { (e) => onInputChange(e)}
                />
            </Form.Group>
            <Form.Group>
                <Form.Control
                    type="text"
                    placeholder="Created By"
                    name="createdby"
                    value={createdby}
                    onChange = { (e) => onInputChange(e)}
                />
            </Form.Group>
            <Button variant="success" type="submit" block>
                Save 
            </Button>
        </Form>

     )
}

export default AddForm;