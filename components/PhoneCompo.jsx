import React, { useState } from 'react'
import Image from 'next/image'
import ReactPhoneInput from "react-phone-input-2";
import 'react-phone-input-2/lib/style.css'



function PhoneCompo() {
    const [phone, setPhone] = useState('')

    return (
        <div className='bg-gradient-to-tr from-[#0B1121] to-[#0D2337] w-[100vw] h-[100vh] flex items-center justify-center '>
            <div className='mx-auto font-bold font-mono shadow-lg active:shadow-slate-600'>
            <ReactPhoneInput
                inputExtraProps={{
                    name: "phone",
                    required: true,
                    autoFocus: true
                }}
                defaultCountry={"in"}
                value={phone}
                placeholder="Phone number"                
            />
            </div>
        </div>
    )
}

export default PhoneCompo