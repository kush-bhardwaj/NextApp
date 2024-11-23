'use client'
import { useRouter } from "next/navigation"
import styles from '../../page.module.css'
import { useState } from "react"
import { Signup } from "@/app/Api/Api"
import SetStorage from "@/app/storage/Storage"
export default function SignupForm(){
    const [formData , setFormData] = useState()
    const router = useRouter()
    const handleChange = (event) => {
      setFormData({...formData,[event.target.name]:event.target.value})
    }
    const formHandle =async(event)=>{
      event.preventDefault();
      const res = await Signup(formData)
      if(res.status ==='success'){
         alert(res.message)
         router.push('/form/login')
      }
  
    }
    return (
        <>
        <div className={styles.form_coontainer}>
        <form autoComplete="off" onSubmit={formHandle} className={styles.signup_form}>
           <input type="text" placeholder="name" name="name" onChange={handleChange}></input>
           <input type="text" placeholder="email" name="email" onChange={handleChange}></input>
           <input type="text" placeholder="password" name="password" onChange={handleChange}></input>
           <input type="text" placeholder="phone" name="phone" onChange={handleChange}></input>
           <input type="submit" value="submit"></input>
         </form>
        </div>
       </>
    )
}