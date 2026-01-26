import { RegisterForm } from '@/components/ui/auth/RegisterForm'
import React from 'react'

export const RegisterPage = () => {
  return (
   <div className="min-h-screen flex flex-col items-center justify-center bg-background">
         <div className="absolute inset-0 bg-gradient-to-br from-secondary to-secondary/20 opacity-50" />
           <div className="z-10 w-full max-w-md px-4">
             <div className="mb-8 text-center">
               <h1 className="text-3xl font-bold text-foreground">Jion us today</h1>
               <p>Create an account in just a few step</p>
             </div>
             {/* registration form  */}
             <RegisterForm />
           </div>
         </div>
  )
}
