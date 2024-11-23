'use client'
import Image from "next/image";
import styles from "./page.module.css"
import { useReducer, useState } from "react";
import { useRouter } from 'next/navigation'
import SignupForm from "./form/signup/page";
import { Api_Base_Url } from "./config/Constant";
// import {Api_base_Url} from '../app/config/Constant'
export default function Home() {
  const x =process.env.NODE_ENV
  return (
  // <SignupForm />
  <>
  {process.env.NODE_ENV=='development'?<h1>you are on development mode</h1>:<h1>you are no production mode</h1>}
  {Api_Base_Url}
  </>

  
  )
}