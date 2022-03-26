
export default function Navbar() {
    function back() {
        var main = document.getElementById("alarmMain");
        var set = document.getElementById("alarmSet");
        main.classList.remove("hidden");
        set.classList.add("hidden");
        var mainNavbar = document.getElementById("alarmMainNavbar");
        var setNavbar = document.getElementById("alarmSetNavbar");
        mainNavbar.classList.remove("hidden");
        setNavbar.classList.add("hidden");
        var mainFooter = document.getElementById("alarmMainFooter");
        var setFooter = document.getElementById("alarmSetFooter");
        mainFooter.classList.remove("hidden");
        setFooter.classList.add("hidden");
    }
    return(
        <nav className="bg-cyan-100 text-blue-800">
            <div className='flex items-center justify-between px-2 py-3'>
                <div className='p-1' onClick={back}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                </div>
                <p className='text-3xl -mt-1'>Alarm</p>
                <div className='flex'>
                    <div className='p-1'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                        </svg>
                    </div>
                </div>
            </div>
            <div className='px-5 h-full'>
                <div className="" id="alarmMainNavbar">
                    <p className=''>Your alarm in</p>
                    <p className=' text-xl'>13 hours 17 minutes</p>
                </div>
                <p className="hidden text-2xl h-1/5" id="alarmSetNavbar">Set Your Alarm</p>
            </div>
        </nav>
    )
}

export function NavbarForSet() {
    return(
        <nav className="bg-cyan-100 text-blue-800">
            <div className='flex items-center justify-between px-2 py-3'>
                <div className='p-1'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                </div>
                <p className='text-3xl -mt-1'>Alarm</p>
                <div className='flex'>
                    <div className='p-1'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                        </svg>
                    </div>
                </div>
            </div>
            <div className='px-5'>
                <p className='hidden'>Your alarm in</p>
                <p className='hidden text-xl'>13 hours 17 minutes</p>
                <p className="text-3xl">Set Your Alarm</p>
            </div>
        </nav>
    )
}