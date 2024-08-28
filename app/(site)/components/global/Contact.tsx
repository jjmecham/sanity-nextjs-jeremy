export default function Contact(){
return (
    <div className="container">
        <h1>Contact</h1>
        <form target="_blank" action="https://formsubmit.co/gleamgraphics@gmail.com" method="POST">
        <input type="hidden" name="_next" value="/about" />
        <input type="text" name="_honey" className="hidden"></input>
        <div className="form-group form-group grid grid-cols-1 gap-4">
            <div className="form-row">
                {/* <div className="col">
                    <input type="text" name="name" className="form-control m-1 rounded-sm p-1 w-full my-2 input input-bordered input-primary " placeholder="Full Name" required />
                </div> */}
                <label className="input input-bordered input-primary flex items-center gap-2 mb-2">
                    <input type="text" name="name" className="form-control grow w-full" placeholder="Full Name" required/>
                </label>
                {/* <div className="col">
                    <input type="email" name="email" className="form-control m-1 rounded-sm p-1 w-full my-2 input input-bordered input-primary" placeholder="Email Address" required />
                </div> */}
                <label className="input input-bordered input-primary flex items-center gap-2 mb-2">
                    <input type="email" name="email" className="form-control grow w-full" placeholder="Email" required/>
                </label>
                <textarea placeholder="Type Here" className="form-control grow w-full textarea textarea-bordered textarea-primary" name="message" required></textarea>
            </div>

        </div>
        <div className="flex justify-center">
        <button type="submit" className="btn btn-outline btn-secondary cursor-pointer mt-2">Submit Form</button>
        </div>
        </form>
    </div>
);
}
