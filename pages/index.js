import Head from 'next/head'
import { Alarm } from '../components/Alarm'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { Set } from '../components/Set'

export default function Home() {
    return (
        <div className='h-screen bg-cyan-100 text-blue-700'>
            <div className="h-1/6">
                <Navbar />
            </div>
            <div className="h-4/6 overflow-y-auto relative">
                <div className='' id="alarmMain">
                    <Alarm />
                    <Alarm />
                    <Alarm />
                    <Alarm />
                    <Alarm />
                    <Alarm />
                    <Alarm />
                    <Alarm />
                </div>
                <div className='hidden' id="alarmSet">
                    <Set />
                </div>
            </div>
            <div className="h-1/6">
                <Footer />
            </div>
        </div>
  )
}
