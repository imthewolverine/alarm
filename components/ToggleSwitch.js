export default function ToggleSwitch() {
    return(
        <label className="flex items-center">
                    <input type="checkbox" id="check" className="sr-only peer"/>
                    <div className='bg-blue-200 w-10 h-5 rounded-full peer-checked:bg-blue-600 transition-all duration-500 '></div>
                    <div className="w-6 h-6 rounded-full absolute bg-gray-200 peer-checked:ml-4 transition-all duration-500" ></div>
        </label>
    )
}