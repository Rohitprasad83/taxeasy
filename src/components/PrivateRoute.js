import React from 'react'
import { Outlet, Navigate, useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'

export function PrivateRoute() {
  const { token } = useSelector(state => state.auth)

  const location = useLocation()
  return token ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  )
}
