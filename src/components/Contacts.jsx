
import { useContext } from "react"
import { MyContext} from "../App"
import { Link, Route, Routes } from 'react-router-dom';


export default function Contacts(){
    
    const context = useContext(MyContext)
    console.log(context)

    const deleteId = async (person) => {
        console.log(person)
    fetch(`https://boolean-uk-api-server.fly.dev/emazau/contact/${person.id.toString()}`, {
      method: 'DELETE',
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      context.setDeletee(!context.deletee);

    })
    .catch(error => {
      console.error('There was a problem with the fetch operation:', error);
    });

    }

    return <>
    <ul>

    {context.contacts.map( (contact, index) => (
        <>
        <li key={index}>
            <p>{contact.firstName} {contact.lastName} &#160;&#160; &#160;
            <Link to={`/contacts/${contact.id}`}>View</Link> &#160;&#160;&#160;
            <a><span onClick={() => deleteId(contact)}>Delete</span></a> &#160;&#160;&#160;
            <Link to={`/Put/${contact.id}`}>Put</Link>

            </p>
            
        </li>
        </>
    )
    )}
    </ul>
            <Link to={`/Delete`}>DELETE ALL</Link> &#160;&#160;&#160;

    </>
}