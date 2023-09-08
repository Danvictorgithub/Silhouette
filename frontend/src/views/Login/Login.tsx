export default function Login() {
    return (
    <>
        <div className="flex h-full justify-center items-center ">
            <div className="flex max-h-[600px] max-w-[900px] h-full w-full border-2 rounded-3xl overflow-hidden">
                <div className="w-full bg-black text-white flex justify-center items-center">
                    <h1 className="text-6xl font-bold font-serif pb-12">Silhouette</h1>
                </div>
                <div className="flex w-full max-w-[50%] flex-col justify-start items-center">
                    <div className="w-full p-4">
                        <ul className="flex gap-2">
                            <li className="font-bold underline">Login</li>
                            <li>Signup</li>
                        </ul>
                    </div>
                    <div className="flex justify-center items-center flex-col h-full w-full pb-12">
                        <h1 className="text-4xl font-bold p-12">Sign In</h1>
                        <form className="flex flex-col justify-center items-center w-full gap-2">
                            <label htmlFor="username" className="text-2xl font-medium">Username</label>
                            <input className="border-2 w-[80%] py-3 px-3 rounded-2xl" type="text" placeholder="Username"/>   
                            <label htmlFor="password" className="text-2xl font-medium">Password</label>
                            <input className="border-2 w-[80%] py-3 px-3 rounded-2xl" type="text" placeholder="Password"/>
                            <button className="py-3 px-4 mt-8 rounded-2xl w-[80%] text-white text-xl font-bold bg-black">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}