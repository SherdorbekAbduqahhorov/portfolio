"use client"
import React, { useState } from 'react';
import { IoMdArrowRoundBack } from "react-icons/io";
import Link from 'next/link';
import axios from "axios";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

export default function Register() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  async function handleRegister(e: React.FormEvent) {
    e.preventDefault();

    if(password !== confirmPassword){
      toast.error("Parollar mos kelmaydi ❌");
      return;
    }

    try {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/accounts/register/`,
        {
          email: email,
          password: password
        }
      );

      toast.success("Ro‘yxatdan muvaffaqiyatli o‘tdingiz ✅");

      // Agar API access token qaytaradigan bo‘lsa
      if(res.data.access) localStorage.setItem("access", res.data.access);
      if(res.data.refresh) localStorage.setItem("refresh", res.data.refresh);

      setTimeout(() => {
        router.push("/auth/crut/crutpage");
      }, 1000);

    } catch (error: any) {
      if(error.response){
        const err = error.response.data;
        if(err.email){
          toast.error("Email noto‘g‘ri yoki band ❌");
        } else if(err.password){
          toast.error("Parol noto‘g‘ri ❌");
        } else if(err.detail){
          toast.error(err.detail);
        } else {
          toast.error("Xatolik yuz berdi ❌");
        }
      } else {
        toast.error("Server bilan muammo ❌");
      }
    }
  }

  return (
    <div className="divlogin flex items-center justify-center px-[20px]">
      <div className="logindivcart">

        <Link href="/" className="link-back">
          <IoMdArrowRoundBack />
          Back to portfolio
        </Link>

        <form onSubmit={handleRegister} className='w-full flex flex-col'>
          <h1 className="text-[35px] mt-[30px] text-center font-bold">
            Register
          </h1>

          <p className="text-white text-sm text-center">
            Enter your email and password to create account
          </p>

          <div>
            <label>
              <p className='p1'>Email address</p>
              <input 
                className='inputs' 
                type="email" 
                placeholder='Email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </label>

            <label>
              <p>Password</p>
              <input 
                className='inputs' 
                type="password" 
                placeholder='********'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </label>

            <label>
              <p>Confirm Password</p>
              <input 
                className='inputs' 
                type="password" 
                placeholder='********'
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </label>
          </div>

          <button className="login-btn">Register</button>
        </form>

        <div className='signup'>
          Already have an account? <a href="/auth/login" className="signup-link">Login</a>
        </div>

      </div>
    </div>
  )
}