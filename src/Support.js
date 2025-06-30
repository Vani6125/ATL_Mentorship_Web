
function Support(){
    return(
        <>
        <div className="flex flex-col justify-center items-center pt-20 text-center">
            <img src="Images/support.png" alt="Support Image" className="w-80 h-auto"></img>
            <div className="pt-10 text-center text-xl font-bold">
                <h4 className="pt-10">For Any Feedback/Queries Contact Below:</h4>

            <div className="flex pt-10 gap-4 items-center font-bold">
                <img src="Images/Email_Icon.png" alt="Email Icon"></img>
                <span><a href="mailto:atl-support@gmail.com" 
                className="text-blue-600 underline hover:text-blue-800">Contact-atl-support@gmail.com </a></span>
                </div>
            </div>
        </div>

</>
    )
}
export default Support;