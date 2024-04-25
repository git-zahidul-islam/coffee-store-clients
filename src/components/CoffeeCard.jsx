import { Link } from 'react-router-dom';
import Swal from 'sweetalert2'


const CoffeeCard = ({ coffee, setCoffees, coffees }) => {
    const { _id, name, chef, supplier, test, category, details, photoURL } = coffee;

    const handleDelete = (id) => {
        console.log(id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                console.log("delete the items", id);
                fetch(`http://localhost:5000/coffee/${_id}`,{
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                        const remaining = coffees.filter(aCoffee => aCoffee._id !== _id)
                        setCoffees(remaining)
                    })
            }
        });
    }

    return (
        <div>
            <div className="card card-side bg-base-100 shadow-xl">
                <figure><img src={photoURL} alt="Movie" /></figure>
                <div className="card-body flex flex-row justify-between items-center">
                    <div>
                        <h2 className="card-title">{name}</h2>
                        <p>{chef}</p>
                        <p>{category}</p>
                        <p>{supplier}</p>
                    </div>
                    <div className="card-actions justify-end">
                        <div className="join join-vertical space-y-2">
                            <button className="btn join-item">View</button>
                            <Link className="btn join-item" to={`/updateCoffee/${_id}`}>
                            <button>Edit</button>
                            </Link>
                            <button
                                onClick={() => handleDelete(_id)}
                                className="btn join-item bg-red-600">DELETE</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;