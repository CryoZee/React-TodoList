export default function List({ items,deleteItem,editItem }) {

    if (items.length === 0) return (
        <p className="text-center fs-3 mt-5">Nothing In My Todo List</p>
    )

    return (
        <ul className="list-group mt-5 rounded-0">
            {items.map((item) => (
                <li className="list-group-item d-flex justify-content-between align-items-center"
                    key={item.id}
                >
                    <span>{item.text}</span>
                    <div>
                        <i
                            className="bi bi-pencil-square text-warning fs-5 pointer me-3"
                            onClick={()=>editItem(item)}
                        ></i>
                        <i
                            className="bi bi-trash text-danger fs-5 pointer"
                            onClick={() => deleteItem(item)}
                        ></i>
                    </div>
                </li>
            ))}
        </ul>
    )
}