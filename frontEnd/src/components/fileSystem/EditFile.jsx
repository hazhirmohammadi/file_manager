
const EditFile = () => {
    return (
        <div className="flex flex-col justify-center ">
            <h3  className="font-bold text-lg">Edit File </h3>
            <p className="py-4">Enter input  </p>
            <input
                value="sipmle"
                className="py-2 px-2 rounded-lg border-none outline-none mb-4"
                placeholder="file Name"
                type="text"
            />
            <button className="btn hover:bg-green-700 hover:text-white">Submit</button>
        </div>
    );
};

export default EditFile;
