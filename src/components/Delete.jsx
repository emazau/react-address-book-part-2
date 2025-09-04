
import { useContext, useState} from "react"
import { MyContext } from "../App"
import { useNavigate, useParams } from "react-router-dom"

export default function Form(){
    const context = useContext(MyContext)
    const { id } = useParams();


    const handleChange =  (e) => {
        const { name, value } = e.target
        setPerson({
          ...person,
          [name]: value,
        })
        localStorage.setItem(name, value) //How does this work excactly
    }


    return (<>
            <form onSubmit={handleSubmit}>
            <label>
              First Name:
              <input type="text" name="firstName" onChange={handleChange} value={person.firstName}></input>
            </label>
            <br/>
            <label>
              Last Name:
              <input type="text" name="lastName" onChange={handleChange} value={person.lastName}></input>
            </label>
            <br/>
                        <label>
              Street:
              <input type="text" name="street" onChange={handleChange} value={person.street}></input>
            </label>
            <br/>
                        <label>
              City:
              <input type="text" name="city" onChange={handleChange} value={person.city}></input>
            </label>
            <br/>

            <input type="submit" value="Post!"></input>
        </form>
    </>);
}