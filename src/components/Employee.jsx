import EditEmployee from "./EditEmployee";

function Employee({id, name, role, img, updateEmployee}) {
    return (
            <div className="m-2 py-8 px-8 max-w-sm bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
                <img className="object-cover w-[100px] h-[100px] block mx-auto h-24 rounded-full sm:mx-0 sm:shrink-0" src={img} alt="Guru's Face" />
                <div className="text-center space-y-2 sm:text-left">
                    <div className="space-y-0.5">
                    <p className="text-lg text-black font-semibold">
                        {name}
                    </p>
                    <p className="text-slate-500 font-medium">
                        {role}
                    </p>
                    </div>
                    {/* update button */}
                    <EditEmployee 
                        id={id}
                        name={name}
                        role={role}
                        updateEmployee={updateEmployee}
                    /> 
                </div>
            </div>
    )
};

export default Employee;