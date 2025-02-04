import React, {useContext, useState} from 'react'
import Header from '../components/Header/Header';
import { login } from '../http/userAPI';
import { observer } from 'mobx-react-lite';
import { Context } from '..';
import {NavLink,useNavigate, useLocation, redirect} from "react-router-dom";


const SignIn = observer(() => {

  const {user} = useContext(Context)
  const  [email_user, setEmail] = useState('')
  const  [password_user, setPassword] = useState('')
 

  const navigate = useNavigate();


  const signIn = async () => {
    try {
      let data;
      data = await login(email_user, password_user)
      console.log(data)
      user.setUser(user)
      user.setIsAuth(true)
      if (user._isAuth = true) {
        navigate("/user")
      }
    } catch (e: any) {
      alert(e.response.data.message)
    }
  }

  return (
    <div className="bg-purple-600">

    <section>
    <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8 lg:grid lg:min-h-screen lg:grid-cols-12">
      <aside
        className="relative block h-12 lg:order-last lg:col-span-5 lg:h-full xl:col-span-6 hidden lg:block"
      >
        <img
          alt="Cover for 'SIGN IN' page"
          src="/img/gallery3.jpg"
          className="absolute inset-0 h-full w-full object-cover border"
        />
      </aside>
  
      <main
        aria-label="Main"
        className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:py-12 lg:px-16 xl:col-span-6"
      >
        <div className="max-w-xl lg:max-w-3xl"> 
          <h1
            className="mt-6 text-2xl font-bold text-white sm:text-3xl md:text-4xl"
          >
           Войти
          </h1>
  
          <p className="mt-4 leading-relaxed text-white dark:text-gray-400">
           Окунись в мир спорта.
          </p>
  
          <form action="#" className="mt-8 grid grid-cols-6 gap-6">
            <div className="col-span-6">
              <label
                htmlFor="e-mail"
                className="block text-sm font-medium text-white dark:text-gray-200"
              >
                E-mail
              </label>
  
              <input
                type="text"
                id="Email"
                name="e-mail"
                value={email_user}
                placeholder='Введите e-mail...'
                onChange={e => setEmail(e.target.value)}
                className="p-1 mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-black shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200"
              />
            </div>
  
           
  
            <div className="col-span-6">
              <label
                htmlFor="Password"
                className="block text-sm font-medium text-white dark:text-gray-200"
              >
                Пароль
              </label>
  
              <input
                value={password_user}
                onChange={e => setPassword(e.target.value)}
                type="password"
                id="Password"
                name="password"
                placeholder='Введите пароль...'
                className="p-1 mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-black shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200"
              />
            </div>
  
  
  
            <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
              <button
              onClick={signIn}
                className="inline-block shrink-0 rounded-md border border-white bg-white text-purple-600 px-12 py-3 text-sm font-medium text-purple-700 transition hover:bg-purple-600 hover:text-white focus:outline-none focus:ring "
              >
                Войти
              </button>
  
              <p className="mt-4 text-sm text-gray-300 dark:text-gray-400 sm:mt-0">
                Еще нет аккаунта?
                <a href="/registration" className="text-white underline dark:text-gray-200"
                  >Зарегистрироваться</a>.
              </p>
            </div>
          </form>
        </div>
      </main>
    </div>
  </section>
  </div>
)})

export default SignIn;
