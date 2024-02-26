const DeleteFile = () => {
    return (
        <div className="flex flex-col justify-center ">
            <h3 className="font-bold text-lg">Deleted </h3>
            <p className="py-4">Confirm Deleted!! </p>
            <div className="flex flex-row mb-4 w-full bg-gray-700 p-1 rounded">
                <div className="mr-2">name File:</div>
                <div className="text-yellow-300 underline-offset-1">[Simple]</div>
            </div>
            <button className="btn hover:bg-green-700 hover:text-white">OK</button>
        </div>
    );
};

export default DeleteFile;
