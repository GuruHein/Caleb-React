function Input({name, type, value, handleChange, placeholder, label}) {
    return (
        <div>
                <label htmlFor={name} className="sr-only">{label}</label>
                <input 
                    id={name} 
                    name={name} 
                    type={type}
                    value={value} 
                    className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" 
                    placeholder={placeholder} 
                    onChange={handleChange}
                />
        </div>
    )
}

export default Input;