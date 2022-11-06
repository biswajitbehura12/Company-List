import {createContext, useEffect, useState} from 'react';
import { v4 as uuidv4 } from 'uuid';

export const CompanyContext = createContext()

const CompanyContextProvider  = (props) => {

    const [companys, setCompanys] = useState([
        {id:uuidv4(), name: 'Thomas Hardy10', address: 'Obere Str. 57, Berlin, Germany', createdby: 'jbhjjkgkhvhb'},
        {id:uuidv4(), name: 'Dominique Perrier', address: 'Obere Str. 57, Berlin, Germany', createdby: 'Stream breaker'},
        {id:uuidv4(), name: 'Maria Anders', address: '25, rue Lauriston, Paris, France', createdby: 'ronaldo stack'},
        {id:uuidv4(), name: 'Fran Wilson', address: 'C/ Araquil, 67, Madrid, Spain', createdby: 'John abhahh'},
        {id:uuidv4(), name: 'Martin Blank', address: 'Via Monte Bianco 34, Turin, Italy', createdby: 'Biswajit behura'}
])

useEffect(()=> {
    setCompanys(JSON.parse(localStorage.getItem('companys')))
},[])

useEffect(() => {
    localStorage.setItem('companys', JSON.stringify(companys));
})



const sortedCompanys = companys.sort((a,b)=>(a.name < b.name ? -1 : 1));



const addCompany = (name, address, createdby ) => {
    setCompanys([...companys , {id:uuidv4(), name, address, createdby}])
}

const deleteCompany = (id) => {
    setCompanys(companys.filter(company => company.id !== id))
}

const updateCompany = (id, updatedCompany) => {
    setCompanys(companys.map((company) => company.id === id ? updatedCompany : company))
}

    return (
        <CompanyContext.Provider value={{ sortedCompanys, addCompany, deleteCompany, updateCompany}}>
            {props.children}
        </CompanyContext.Provider>
    )
}

export default CompanyContextProvider;