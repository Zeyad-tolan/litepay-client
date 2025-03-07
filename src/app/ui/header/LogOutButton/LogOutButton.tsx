/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { tracking } from '@/src/util/tracking';
import Cookies from 'js-cookie';
import { jwtDecode } from 'jwt-decode';
import { useTranslations } from "next-intl";

export default function LogOutButton() {
  const t = useTranslations("Navbar")
  const login = Cookies.get('token')

  const logout = () => {
    const {user}:any = jwtDecode(login as string);
    tracking('logout',{
      userId:user.id,
      email:user.email
    })
    Cookies.remove('token'); 
    Cookies.remove('id'); 
    Cookies.remove('otp'); 
    Cookies.remove('otpToken'); 
    window.location.reload()
  }
  return (
    login ?
      <p
        className='text-primary cursor-pointer'
        onClick={() => logout()}
      >
        {t("logout")}
      </p> : null
  );
}
