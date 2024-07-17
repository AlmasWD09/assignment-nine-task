
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const Register = () => {
    const axiosSecure = useAxiosSecure()
    const { register, handleSubmit, formState: { errors }, } = useForm()
    const onSubmit = async (data) => {

      
        const userInfo = {
            name: data.name,
            email: data.email,
            pin: data.pin,
            phone: data.phone,
            status: 'pending',
        }

        const res = await axiosSecure.post('/user/api/create', userInfo)
        console.log('client site---------->', res.data);

    }
    return (
        <div className="min-h-[calc(100vh-204px)] flex justify-center items-center">
            <div className="w-full max-w-lg p-6 m-auto mx-auto bg-white rounded-lg shadow-md dark:bg-gray-800">
                <div className="flex justify-center mx-auto">
                    <h1 className="text-3xl font-bold text-gray-700 py-4">Please Register</h1>
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    {/* user name */}
                    <div>
                        <label htmlFor="username" className="block text-sm text-gray-800 dark:text-gray-200">
                            Name
                        </label>
                        <input
                            type="text"
                            name="name"
                            {...register("name", { required: true })}
                            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                        {errors.name && <span className="text-red-400">name field is required</span>}
                    </div>

                    {/* user email */}
                    <div className="mt-4">
                        <label htmlFor="username" className="block text-sm text-gray-800 dark:text-gray-200">
                            Email
                        </label>
                        <input
                            type="email"
                            name="email"
                            {...register("email", { required: true })}
                            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                        {errors.email && <span className="text-red-400">email field is required</span>}
                    </div>
                    {/* user pin number */}
                    <div className="mt-4">
                        <label htmlFor="username" className="block text-sm text-gray-800 dark:text-gray-200">
                            PIN CODE
                        </label>
                        <input
                            type="number"
                            name="pin"
                            {...register("pin", { required: true })}
                            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                        {errors.pin && <span className="text-red-400">pin field is required</span>}
                    </div>
                    {/* user phone number */}
                    <div className="mt-4">
                        <label htmlFor="username" className="block text-sm text-gray-800 dark:text-gray-200">
                            Phone Number
                        </label>
                        <input
                            type="number"
                            name="phone"
                            {...register("phone", { required: true })}
                            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                        {errors.phone && <span className="text-red-400">phone number field is required</span>}
                    </div>

                    <div className="mt-6">
                        <button type="submit" className="w-full px-6 py-2.5 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-primary rounded-lg hover:bg-primaryGray focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50">
                            Register
                        </button>
                    </div>
                    <p>Alredy have an account? <Link to={'/login'} className="text-primary font-bold">Login</Link></p>
                </form>
            </div>
        </div>
    );
};

export default Register;