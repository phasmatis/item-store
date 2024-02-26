//Goal of this component is just to focus on how to display an Item



function Item({item}) {

    async function deleteItem() {
        try {

            const {data} = await axios.delete(`https://api.restful-api.dev/objects/${id}`)
            
            console.log('DELETING', data)
        } catch(err) {
            console.err(err)
        }
    }
    return(
         <div key={item.id} className="item-card">
                <h3>{item.name}</h3>
                <button>DELETE</button>
            </div>    
    )
}

export default Item