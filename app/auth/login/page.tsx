"use client"
import React, { useState } from 'react'
import { IoMdArrowRoundBack } from "react-icons/io";
import { FaSpinner } from "react-icons/fa"; 
import Link from 'next/link';
import axios from "axios";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

function Login() {

  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false); 

  async function getLogin(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true); 

    try {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/accounts/login/`,
        {
          email: email,
          password: password
        }
      );

      const data = res.data;

      // 🔥 MUHIM: SKILLS BILAN MOS
      localStorage.setItem("access", data.access);
      localStorage.setItem("refresh", data.refresh);

      toast.success("Tizimga muvaffaqiyatli kirildi ✅");

      router.push("/auth/crut/skills");

    } catch (error: any) {
      if (error.response) {
        const err = error.response.data;

        if (err.email) {
          toast.error("Email noto‘g‘ri ❌");
        } else if (err.password) {
          toast.error("Parol noto‘g‘ri ❌");
        } else if (err.detail) {
          toast.error("Email yoki parol xato ❌");
        } else {
          toast.error("Xatolik yuz berdi ❌");
        }

      } else {
        toast.error("Server bilan muammo ❌");
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="divlogin flex items-center justify-center px-[20px]">
      
      <div className="logindivcart">

        <Link href="/" className="link-back">
          <IoMdArrowRoundBack />
          Back to portfolio
        </Link>

        <form onSubmit={getLogin} className='w-full flex flex-col'>
          
          <h1 className="text-[35px] mt-[30px] text-center font-bold">
            Welcome back!
          </h1>

          <p className="text-white text-sm text-center">
            Please enter your email and password to continue
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
                disabled={loading} 
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
                disabled={loading} 
              />
            </label>

          </div>

          <button 
            className="login-btn flex justify-center items-center gap-2" 
            type="submit" 
            disabled={loading}
          >
            {loading && <FaSpinner className="animate-spin" />}
            {loading ? "Please wait..." : "Login"}
          </button>
        </form>

        <div className='signup'>
          Are you new member? 
          <a href="/auth/register" className="signup-link">Sign Up</a>
        </div>

      </div>

    </div>
  )
}

export default Login