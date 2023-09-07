export default function Home() {
    return (
        <>
            <div className="flex-1 font-sans bg-zinc-800 flex justify-center items-center flex-col">
                <h1 className="p-4 font- font-black text-white text-5xl text-center">Silhouette<br/>Lifestyle</h1>
                <div className="flex justify-between shrink-0 h-[550px] w-[1000px] bg-neutral-200">
                    <div className="border-[25px] border-neutral-700 border-r-0 h-full w-full p-12 bg-[url('paperTexture.jpg')]">
                        <div className=" flex justify-start items-center p-2">
                            <p className="[writing-mode:vertical-lr]">2023</p>
                            <img src="whothis.jpg" className="h-12 rounded-full" alt="" />
                            <h2 className="text-xl font-medium p-2">Jelbert Zamora</h2>
                        </div>
                        <h2 className="ml-12 font-bold text-6xl border-b-[5px] pb-2 border-neutral-900">Minimalist <br /> LifeStyle</h2>
                        <h3 className="pl-12 font-medium pt-3 text-3xl ">Better Life, Better Habits</h3>
                        <p className="text-lg bg-neutral-300 py-4 px-6 m-5">
                            I'm Jelbert, a minimalist life style. I'm a 20-year-old  with a passion for minimalism.
                            I'm passionate about minimalism, and I love minimalism.
                        </p>
                    </div>
                    <div className="flex justify-end shrink-0 ">
                        <h1 className="[writing-mode:vertical-rl] pt-4 h-[1000px]z-100 text-right absolute origin-top-left text-stone-800 font-black text-4xl">Dance is an Art</h1>
                        <img src="HeroImage.jpg" alt="Hero Image" className="object-cover w-[380px] h-full"/>
                    </div>
                </div>
            </div>
        </>
    )
}