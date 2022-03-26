import ToggleSwitch from "./ToggleSwitch";

export function Set() {

    return (
        <div className="h-full m-3 px-6 items-center rounded-2xl bg-white shadow-md shadow-cyan-300/100 divide-y">
            {/*alarm iin tsag n*/}
            <div className="flex justify-evenly text-5xl py-4">
                {/*ehnii hour heseg n*/}
                <div className="w-14">
                    <div className="mx-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
                        </svg>
                    </div>
                    <div className="flex justify-center">
                        <p className="">6</p>
                    </div>
                    <div className="mx-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                    </div>
                </div>
                <div className="pt-9">
                    <p>:</p>
                </div>
                {/*ehnii minute heseg n*/}
                <div className="w-14">
                    <div className="mx-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
                        </svg>
                    </div>
                    <div className="flex justify-center">
                        <p className="">00</p>
                    </div>
                    <div className="mx-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                    </div>
                </div>
            </div>
            {/*garagiin udruud n*/}
            <div className="flex justify-between py-2">
                <p>Today-Sat, Mar 19</p>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
            </div>
            <div className="flex justify-between text-xl py-2 font-semibold">
                <p>M</p>
                <p>T</p>
                <p>W</p>
                <p>T</p>
                <p>F</p>
                <p className="text-red-500">S</p>
                <p className="text-red-500">S</p>
            </div>
            {/*test heden oniih heseg n*/}
            <div className="flex justify-evenly text-5xl py-4">
                {/*ehnii hicheel heseg n*/}
                <div className="w-14">
                    <div className="mx-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
                        </svg>
                    </div>
                    <div className="flex justify-center">
                        <p className="">Mat</p>
                    </div>
                    <div className="mx-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                    </div>
                </div>
                <div className="pt-9">
                    <p>:</p>
                </div>
                {/*ehnii on heseg n*/}
                <div className="w-14">
                    <div className="mx-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
                        </svg>
                    </div>
                    <div className="flex justify-center">
                        <p className="">2008</p>
                    </div>
                    <div className="mx-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                    </div>
                </div>
            </div>
            <div className="flex flex-col space-y-2 py-2 divide-y text-xl">
                <div className="flex justify-between">
                    <p>Set Alarm Sound</p>
                </div>
                <div className="flex justify-between pt-2">
                    <p>Set Vibration type</p>
                </div>
                <div className="flex justify-between pt-2">
                    <p>Snooze</p>
                </div>
                <div className="flex justify-between py-2">
                    <p>Tests</p>
                </div>
            </div>
        </div>
    )
}