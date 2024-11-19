import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
      const [formValues , setFormValues] = useState({name: "", email:"", message:"",});
      const[errors , setErrors] = useState({});
      const [isSubmitting,setIsSubmitting] = useState(false);
      const[successMessage,setSuccessMessage] = useState("");

      const handleChange = (e) =>{
         const{name , value} = e.target;

         setFormValues({...formValues, [name]:value});
      };
      const validate = () =>{
        const newErrors = {};
        if(!formValues.name.trim()) newErrors.name = 'Name is required';
        if(!formValues.email){
          newErrors.email = 'Email is required';
        }else if(!/\S+@\S+\.\S+/.test(formValues.email)){
          newErrors.email= "Email is invalid"
        }
        if(!formValues.message.trim()) newErrors.message = "Message is reqiured.";
        return newErrors;
      };
      const handleSubmit = async (e) => {
        e.preventDefault();
        const formErrors = validate();
        setErrors(formErrors);

        if(Object.keys(formErrors).length === 0){
          setIsSubmitting(true);
          try{
            await emailjs.send(
              "service_u9tenp9",
              "template_bwpen5n",
              {
                name: formValues.name,
                email:formValues.email,
                message:formValues.message,
              },
              "DNU7YKWf0w1kqXJJP"

            );
            setSuccessMessage("Message sent successfully!");
            setFormValues({name : "" ,email: "" , message:""});

          }catch(error){
            console.error("Error sending message:",error);
            setSuccessMessage("Failed to send the message. Please try again.");
} finally{
  setIsSubmitting(false);
}
}
}

return (
    <div
      id="Contact"
      className="flex justify-around bg-[#465697] text-white  items-center"
    >
      <div className="w-2/4 border-inherit">
        {/* <h1 className="text-2xl md:text-6xl font-bold">Contact</h1> */}
        
        <div name='contact' className='w-full rounded-lg  h-screen bg-transparent flex justify-center items-center p-4'>
        <div className='flex flex-col max-w-[600px] w-3/5'>
            <div className='pb-8 flex flex-col justify-center w-full h-full items-center'>
                <p className='text-4xl font-bold inline border-b-4 border-cyan-500 text-gray-400'>Contact</p>
                <p className='text-gray-300 py-4'>Send me a message</p>
            
            <form className = "flex flex-col max-w-[600px] w-3/4" onSubmit={handleSubmit} noValidate>
            
            <input className=' p-2 border dark:border-secondary-dark dark:text-ternary-light dark:bg-ternary-dark text-primary-dark text-md bg-secondary-light rounded-lg outline-transparent text-black' type="text" placeholder='Name' name='name'  value={formValues.name} onChange={handleChange}/>
            {errors.name && <p className="error">{errors.name}</p>}
            <input className='rounded-lg my-4 p-2 border dark:border-secondary-dark dark:bg-ternary-dark text-primary-dark dark:text-ternary-light outline-transparent text-black' type="email" placeholder='Email' name='email' value= {formValues.email} onChange={handleChange } />
            {errors.email && <p className="error">{errors.email}</p>}
            <textarea className='p-1 rounded-lg outline-transparent text-black' name="message" rows="10" placeholder='Message' value= {formValues.message} onChange={handleChange }></textarea>
            {errors.message && <p className="error">{errors.message}</p>}
            <button type="submit"  disabled={isSubmitting} className='text-white rounded-lg border-2 outline-transparent hover:bg-cyan-500 hover:border-cyan-500 px-4 py-3 my-8 mx-auto flex items-center'>{isSubmitting ? "Sending..." : "Send Message"} Send Request</button>
            {successMessage && <p>{successMessage}</p>}
            </form>
            </div>
        </div>
        </div>
        {/* <h3 className="text-sm md:text-2xl font-normal">
          Feel Free To reach out!
        </h3> */}
      </div>
       
      
      <ul className="text-sm md:text-xl">
     
        
        <li className="flex gap-1 items-center ">
          <MdOutlineEmail size={20} />
         priyanka.kakde2821@gmail.com
        </li>
        <li className="flex gap-1 items-center">
          <CiLinkedin />
          <a href="www.linkedin.com/in/priyanka-kakade" target = "_blank">Linkedin</a>
        </li>
        <li className="flex gap-1 items-center">
          <FaGithub />
          
          <a href = " https://github.com/codewithpiyu" target="_blank">@codewithpiyu</a>
          
        </li>
      </ul>
      
    </div>
  );
};

export default  Contact;