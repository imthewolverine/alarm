import ToggleSwitch from "./ToggleSwitch";

export function Alarm() {

    return (
        <div className='flex justify-between m-3 p-2 h-24 items-center rounded-2xl bg-white shadow-md shadow-cyan-300/100'>
            <div>
                <p className='text-4xl '>00:41</p>
            </div>
            <div className='flex items-center'>
                <div className='mr-2 text-sm text-blue-500'>
                    <p>Мат 2008</p>
                    <p>Дав, 3-р 2</p>
                </div>
                <ToggleSwitch />
            </div>
        </div>
    )
}