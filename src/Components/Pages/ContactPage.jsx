import React from 'react'
import contact_img_bg from '../../Images/contact_img_bg.jpg'
import {motion } from 'framer-motion'
import { pageAnim } from '../AnimUtility'
import ContactForm from '../ContactForm'
//import { gql, useMutation } from '@apollo/client';

/**
const ADD_INQUIRY = gql`
  mutation CreateCustomerInquiry(
    $customerName: String!,
    $emailAddress: String!,
    $message: String!
  ) {
    createCustomerInquiry(data: { customerName: $customerName, emailAddress: $emailAddress, message: $message }){
      id,
      customerName,
      emailAddress,
      message
    }
  }`;
   */
  //mutation AddTodo($type: String!) {
  //  createCustomerInquiry(data: {customerName: "", emailAddress: "", message: ""})
  //}

const ContactPage = () => {

  /**
  const [info, setInfo] = useState({
    name: "",
    email: "",
    message: "",
  })

  
  const [addInquiry] = useMutation(ADD_INQUIRY, {variables: {
    customerName: info.name,
    emailAddress: info.email,
    message: info.message,
  }});


   {variables: {
    customerName: info.name,
    emailAddress: info.email,
    message: info.message
  }}


  function handleFormSubmit(event){
    event.preventDefault();
    console.log(info);
    if(info.name !== "" && info.email !== "" && info.message !== ""){
    addInquiry();
    setInfo({name:"", email:"", message:""});
    }
  }
  */




  return (
    <motion.div className='flex flex-col pb-[0px]'
    variants={pageAnim} initial="initial" animate="animate">
      <div id="contact_header_img" className='mt-[50px] pb-[50px] h-[1000px] flex flex-col border-black border-b justify-start items-center'
        style={{backgroundImage: `url(${contact_img_bg})`}}>

        <div id="contact_page_header" className='mx-auto sm:text-7xl text-6xl font-semibold pt-[50px] mt-10 text-white'>
        Contact Us
        </div>
        <div id='' className='mx-auto text-center sm:text-3xl text-2xl superlight_txt pt-2 text-white'>
        Any questions, concerns, and job inquiries are welcome
        </div>

        <div className='w-[90%] sm:w-[50%] mt-10'> 
          <ContactForm />
        </div>
      
    
      </div>

    </motion.div>
  )
  
}

/**
 * <div className='mt-12 pfd text-4xl text-white text-center'>
        Want to Call Instead?
        </div>
 *         <div id="contact_form" className='border-black border bg-stone-100 sm:w-[50%] w-10/12 h-[350px] mt-8'>
          <form className='flex flex-col w-[90%] mx-auto mt-8' onSubmit={e => handleFormSubmit(e)} autocomplete="off">
            <div className='flex flex-row justify-center'>
              <div className='w-[100%]'>
                <input className='w-[90%] p-1' required id="name_field" type="text" name="name" placeholder="Name" value={info.name} onChange={e=>setInfo({...info, name: e.target.value})}/><div className="inline text-red-600">*</div>
              </div>
              <div  className='w-[100%]'>
                <input className='w-[90%] p-1' type="email" name="email" placeholder="Email address" value={info.email} onChange={e=>setInfo({...info, email: e.target.value})}/>
              </div>
            </div>
              <div className='mt-4'>
                <textarea className='w-[95%] p-1 h-[150px] max-h-[200px]' required name="message" placeholder="Message" value={info.message} onChange={e=>setInfo({...info, message: e.target.value})}/>
              </div>
            <div className='flex flex-row justify-center mt-4 mb-4'>
              <input type='submit' name='submit' value="Submit" className='pfd bg-black px-6 py-1 text-white text-lg'/>
            </div>
          </form>
        </div>
 */

export default ContactPage