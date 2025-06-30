function HomePage(){
    return(
        <div className="flex-col justify-center items-center pt-10 text-center">
            <h1 className="text-7xl font-bold ">
                What is ATL Mentorship?
            </h1>
            <div className="text-2xl font-normal text-center pt-5">
                <p className="pt-10">Atal Innovation Mission (AIM) is Government of India’s flagship initiative to create and </p>
               <p> promote a culture of innovation and entrepreneurship across the length and breadth of</p>
               <p> our country. AIM’s objective is to develop new programmes and policies for fostering</p>
               <p> innovation in different sectors of the economy, provide platforms and collaboration</p>
               <p> opportunities for different stakeholders, and create an umbrella structure to oversee the</p>
               <p> innovation & entrepreneurship ecosystem of the country.</p>
            </div>
            <div className="pt-10 pl-10 pr-10 flex justify-evenly">
            <div className=" border-2 border-black w-64 h-40"></div>
            <div className=" border-2 border-black w-64 h-40"></div>
            <div className=" border-2 border-black w-64 h-40"></div>
            </div>
        </div>
        
    );
}
export default HomePage;