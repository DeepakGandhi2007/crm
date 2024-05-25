"use client";
import Image from 'next/image';
import Link from "next/link";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.css';
import styles from '../signup/style.css'
import RootLayout from '../layout';



function LoginPage() {
  const router = useRouter();
  const [user, setUser] = React.useState({
    email: "",
    password: "",
  })
  const [buttonDisabled, SetButtonDisabled] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const onLogin = async (event) => {
    event.preventDefault();
    try {
      setLoading(true);
      const response = await axios.post("/api/users/login", user);
      console.log("login success", response.data);
      router.push("/profile")

    }
    catch (error) {
      console.log(error);

    } finally {
      setLoading(false);
    }
  }
  useEffect(() => {
    if (user.email.length > 0 && user.password.length > 0) {
      SetButtonDisabled(false);
    }
    else {
      SetButtonDisabled(true);

    }
  }, [user])

  return (
    < RootLayout >
      <div style={{ height: '100vh', overflow: 'hidden' }}>
        <div className="d-flex align-items-center justify-content-center bg-blue bg-login">
          <div className="container">



            <div className="my-auto">
              <form>
                <div className="img-div">
                  <Image
                    src="/logo.png"
                    alt="Logo"
                    layout="fill"
                    objectFit="contain"
                    objectPosition="center"
                  />
                </div>
                <b className="text-center d-flex justify-content-center">{loading ? "Your Sales Journey Begin Here" : "Login"}</b>
                <div className="form-group">
                  <label htmlFor="dob">Email</label>
                  <input
                    type="email"
                    id="email"
                    value={user.email}
                    onChange={(e) => setUser({ ...user, email: e.target.value })}
                    className="form-control mt-2 placeholder-bold"
                    placeholder="✉ Enter your email"
                    name="dob"
                  />
                </div>
                <div className="form-group mt-3">
                  <label htmlFor="email">Password</label>
                  <input
                    type="password"
                    id="password"
                    value={user.password}
                    onChange={(e) => setUser({ ...user, password: e.target.value })}
                    className="form-control mt-2 placeholder-bold"
                    placeholder="🔒 Enter your password"
                    name="email"
                  />
                </div>
                <div className="form-group">
                  <button
                    onClick={onLogin}
                    type="submit"
                    className="btn btn-primary w-100 bg-black"
                    disabled={buttonDisabled}
                  >
                    {buttonDisabled ? "No login" : "Login"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </RootLayout>

  )
}

export default LoginPage
