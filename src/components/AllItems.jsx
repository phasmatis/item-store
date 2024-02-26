import { useState, useEffect } from "react"
import axios from "axios"
import Item from './Item'

function AllItems () {

    const [items, setItems] = useState([])

    useEffect(() => {
  
      async function fetchItem() {
        // Object Destructuring
        const { data } = await axios.get('https://api.restful-api.dev/objects')
        setItems(data)
      }
  
      fetchItem()
  
    }, [])
  
    console.log(items)
    if ( items.length ===0) {
        return <h1>Loading items...</h1>
    }

    return(
        <section className="all-items">
            {items.map(item => <Item key={item.id} item={item} /> )}
        </section> 
    )
}
export default AllItems