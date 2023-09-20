import { ComponentProps} from "react"

interface ButtonProps extends ComponentProps <'button'>{}

export function Button ( props: ButtonProps){
  return (
   <button 
    {...props} 
    className="bg-rose-600 hover:bg-rose-500 disabled:bg-rose-100 px-6 h-12
    rounded-2xl font-medium text-white disabled:text-gray-400 transition-all"
   />
  )
}