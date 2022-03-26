
export default function Footer() {
    function setAlarm() {
        var mainFooter = document.getElementById("alarmMainFooter");
        var setFooter = document.getElementById("alarmSetFooter");
        if(setFooter.classList.contains("hidden")) {
            mainFooter.classList.add("hidden");
            setFooter.classList.remove("hidden");
            var main = document.getElementById("alarmMain");
            var set = document.getElementById("alarmSet");
            main.classList.add("hidden");
            set.classList.remove("hidden");
            var mainNavbar = document.getElementById("alarmMainNavbar");
            var setNavbar = document.getElementById("alarmSetNavbar");
            mainNavbar.classList.add("hidden");
            setNavbar.classList.remove("hidden");
        } else {
            mainFooter.classList.remove("hidden");
            setFooter.classList.add("hidden");
            var main = document.getElementById("alarmMain");
            var set = document.getElementById("alarmSet");
            main.classList.remove("hidden");
            set.classList.add("hidden");
            var mainNavbar = document.getElementById("alarmMainNavbar");
            var setNavbar = document.getElementById("alarmSetNavbar");
            mainNavbar.classList.remove("hidden");
            setNavbar.classList.add("hidden");
        }
    }
    return(
        <div className='fixed bottom-0 inset-x-0 flex justify-center p-10 bg-gradient-to-t from-cyan-300 to-cyan-100 '>
            <button className="p-3 bg-blue-600 rounded-full text-white shadow-md shadow-blue-600/60" onClick={setAlarm}>
                <svg id="alarmMainFooter" xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                </svg>
                <p className="hidden text-2xl px-2" id="alarmSetFooter">Save</p>
            </button>
        </div>
    )
}