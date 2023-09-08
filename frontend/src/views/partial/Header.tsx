export default function Header() {

    return (
        <>
        <div className='flex justify-between items-center px-8 h-12 bg-white drop-shadow-sm'>
            <div>
                <img src="/" alt="" />
                <h1 className="font-black font-serif text-2xl text-gray-800">Silhouette</h1>  
            </div>
            <div>
                <ul className='flex gap-4 font-medium text-gray-800'>
                    <li>Login</li>
                    <li>Signup</li>
                    <li>
                        <span className="material-symbols-outlined">dark_mode</span>
                    </li>
                </ul>
            </div>
        </div>
        </>
    )
}