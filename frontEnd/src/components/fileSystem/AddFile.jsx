

const AddFile = () => {
    return (
        <div className="flex flex-col justify-center ">
            <h3  className="font-bold text-lg">Create File </h3>
            <p className="py-4">Enter File Name  </p>
            <input
                className="py-2 px-2 rounded-lg border-none outline-none mb-4"
                placeholder="file Name"
                type="text"
            />
            <button className="btn hover:bg-green-700 hover:text-white">Create</button>
        </div>
    );
};

export default AddFile;
