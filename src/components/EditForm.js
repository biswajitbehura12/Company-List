import { Form, Button } from "react-bootstrap"

import {CompanyContext} from '../contexts/CompanyContext';
import {useContext, useState} from 'react';

const EditForm = ({theCompany}) =>{

    const id = theCompany.id;

    const [name, setName] = useState(theCompany.name);
    const [address, setAddress] = useState(theCompany.address);
    const [createdby, setCreatedby] = useState(theCompany.createdby);


    const {updateCompany} = useContext(CompanyContext);

    const updatedCompany = {id, name, address, createdby}

    const handleSubmit = (e) => {
        e.preventDefault();
        updateCompany(id, updatedCompany)
    }

     return (

        <Form onSubmit={handleSubmit}>
            <Form.Group>
                <Form.Control
                    type="text"
                    placeholder="Name *"
                    name="name"
                    value={name}
                    onChange={(e)=> setName(e.target.value)}
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
                    onChange={(e)=> setAddress(e.target.value)}
                />
            </Form.Group>
            <Form.Group>
                <Form.Control
                    type="text"
                    placeholder="Createdby"
                    name="createdby"
                    value={createdby}
                    onChange={(e)=> setCreatedby(e.target.value)}
                />
            </Form.Group>
            <Button variant="success" type="submit" block>
            Save
            </Button>
        </Form>

     )
}

export default EditForm;