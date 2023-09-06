import { Navigate, Outlet } from "react-router-dom";

interface AuthGuardProps {
  isPrivate: boolean;
}


export function AuthGuard({ isPrivate }: AuthGuardProps){
  const signedIn = false;

  if(!signedIn && isPrivate){
    //Redirecionar para /Login
    return <Navigate to='/login' replace />
  }

  if(signedIn && !isPrivate){
    //Redirecionar para / (Dashboard)
    return <Navigate to='/' replace />
  }

  return <Outlet />
}