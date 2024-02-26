import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

function AddItemForm () {

    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [color, setColor] = useState('')

    const navigate = useNavigate()

    function clearForm() {
        setName('')
        setPrice('')
        setColor('')
    }

    async function handleSubmit(event) {
        event.preventDefault() //STOP PAGE REFRESH

        const payload = {
            name,
            data: {
                price,
                color
            }
        }

        try {
            const{data} = await axios.post('https://api.restful-api.dev/objects', payload)
        console.log('ADDED ITEMS', data)

        // navigate to the AllItems page
        navigate('/items')

        }catch (err) {
            console.error(err)
        }
    }

    //console.table({name,price,color})
    return(
        <form onSubmit={handleSubmit}>
            <label>
                Item Name:
                <input value={name} onChange={(e)=> setName(e.target.value)}/>
            </label>
            <label>
                Price:
            <input type="number" min='0' value={price} onChange={(e)=> setPrice(e.target.value)}/>
            </label>
            <label>
                Color:
                <input value={color} onChange={(e)=> setColor(e.target.value)}/>
            </label>
            <button type="button" onClick={clearForm}>Clear</button>

            <button type="submit" >Add Item</button>
        </form>
    )
}
export default AddItemForm