import React, { useState } from 'react'

const ContactForm = () => {

    const [input, setInput] = useState({
        firstName : "",
        lastName : "",
        email : "",
        phoneNumber : "",
        subject : "Interested in Available Puppy",
        message: "",
    });


    
  return (
    <div className='bg-stone-100 w-full mx-auto h-fit sm:h-[500px] shadow-2xl shadow-stone-900 border border-black'>
        <div className='px-1 py-4 m-auto '>
        <div className='w-[90%] mx-auto'>
            <form name="contact" method="post" className='flex flex-col pt-2 gap-1 sm:gap-4'>
                <input type='hidden' name='form-name' value='contact' />
                <div className='flex flex-row justify-between gap-1 sm:gap-10'>
                    <div className='flex flex-col  w-5/12'>
                        <label className='font-light'>First Name</label>
                        <input name="firstName" className='p-1' autoComplete='off' required value={input.firstName} onChange={(e)=>setInput({...input, firstName: e.target.value})}/>
                    </div>
                    <div className='flex flex-col  w-7/12 sm:w-5/12'>
                        <label className='font-light'>Last Name (Optional)</label>
                        <input name="lastName" className='p-1'  value={input.lastName} onChange={(e)=>setInput({...input, lastName: e.target.value})}/>
                    </div>
                </div>
                <div className='flex flex-row justify-between gap-1 sm:gap-10'>
                    <div className='flex flex-col  w-5/12'>
                        <label className='font-light' >Email</label>
                        <input name="email" className='p-1' autoComplete='off' type="email"  value={input.email} onChange={(e)=>setInput({...input, email: e.target.value})}/>
                    </div>
                    <div className='flex flex-col  w-7/12 sm:w-5/12'>
                        <label className='font-light'>Phone # (XXX-XXX-XXXX)</label>
                        <div className='flex flex-row gap-2'>
                            <input className='p-1 w-[100%]' type="tel" id="phone" name="phone" 
                            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required  value={input.phoneNumber} onChange={(e)=>setInput({...input, phoneNumber: e.target.value})}/>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col w-12/12 sm:w-5/12'>
                    <label className='font-light'>Subject</label>
                    <div className='flex flex-row gap-2'>
                        <select name="subject" className='p-1 w-[100%]' value={input.subject} onChange={(e)=>setInput({...input, subject: e.target.value})}>
                            <option value="Schedule an Estimate">Schedule an Estimate</option>
                            <option value="Phone Consultation">Phone Consultation</option>
                            <option value="General Inquiry">General Inquiry</option>
                        </select>
                    </div>
                </div>
                <div className='flex flex-col w-12/12'>
                        <label className='font-light'>Message</label>
                        <div className='flex flex-row gap-2'>
                            <textarea name="message" className='p-1 w-[100%] min-h-[100px] sm:min-h-[150px] max-h-[175px]' value={input.message} onChange={(e)=>setInput({...input, message: e.target.value})}/>
                        </div>
                        <button type="submit" className='w-1/2 sm:w-1/4 mx-auto mt-[25px] p-2 bg-neutral-800 text-white'>Submit</button>
                </div>
            </form>
            {/* <Form /> */}
        </div>
        </div>
    </div>
  )
}

export default ContactForm