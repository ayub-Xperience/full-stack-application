import useAuthStore from '@/lib/store/authStore'
import React from 'react'

export const ProtectedRoute = ({children}) => {
    const {token} = useAuthStore()
    console.log('token', token);
  return children
}
