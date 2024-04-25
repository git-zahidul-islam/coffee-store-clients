import Swal from 'sweetalert2'


const AddCoffee = () => {

    const handleSubmit = (e) => {
        e.preventDefault()
        const form = e.target
        const name = form.name.value;
        const chef = form.chef.value;
        const supplier = form.supplier.value;
        const test = form.test.value;
        const category = form.category.value;
        const details = form.details.value;
        const photoURL = form.photoURL.value;
        const product = { name, chef, supplier, test, category, details, photoURL}
        console.log(product);

        fetch('http://localhost:5000/coffee',{
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(product)
        })
        .then(res => res.json())
        .then(data => {
            if(data){
                Swal.fire({
                    title: 'success',
                    text: 'Do you want to continue',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                })
                
            }
            console.log("client side data", data);
        })
        form.reset()
    }


    return (
        <div className="w-10/12 mx-auto mt-5 bg-zinc-300 p-4">
            <h2 className="text-2xl font-bold text-center">Add Coffee</h2>
            <form onSubmit={handleSubmit} className="space-y-5">
                <div className="md:flex gap-4">
                    <div className="form-control md:w-1/2">
                        <div className="label">
                            <span className="label-text">Name</span>
                        </div>
                        <input type="text" name="name" placeholder="Type here" className="input input-bordered w-full" />
                    </div>
                    <div className="form-control md:w-1/2">
                        <div className="label">
                            <span className="label-text">Chef</span>
                        </div>
                        <input type="text" name="chef" placeholder="Type here" className="input input-bordered w-full" />
                    </div>
                </div>
                <div className="md:flex gap-4">
                    <div className="form-control md:w-1/2">
                        <div className="label">
                            <span className="label-text">Supplier</span>
                        </div>
                        <input type="text" name="supplier" placeholder="Type here" className="input input-bordered w-full" />
                    </div>
                    <div className="form-control md:w-1/2">
                        <div className="label">
                            <span className="label-text">Test</span>
                        </div>
                        <input type="text" name="test" placeholder="Type here" className="input input-bordered w-full" />
                    </div>
                </div>
                <div className="md:flex gap-4">
                    <div className="form-control md:w-1/2">
                        <div className="label">
                            <span className="label-text">Category</span>
                        </div>
                        <input type="text" name="category" placeholder="Type here" className="input input-bordered w-full" />
                    </div>
                    <div className="form-control md:w-1/2">
                        <div className="label">
                            <span className="label-text">Details</span>
                        </div>
                        <input type="text" name="details" placeholder="Type here" className="input input-bordered w-full" />
                    </div>
                </div>
                <div className="md:flex gap-4">
                    <div className="form-control w-full">
                        <div className="label">
                            <span className="label-text">Photo URL</span>
                        </div>
                        <input type="text" name="photoURL" placeholder="Type here" className="input input-bordered w-full" />
                    </div>
                </div>
                <input type="submit" value="ADD COFFEE" className="btn btn-accent w-full" />
            </form>
        </div>

    );
};

export default AddCoffee;