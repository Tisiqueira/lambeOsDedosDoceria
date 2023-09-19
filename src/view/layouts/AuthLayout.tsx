import { Outlet } from 'react-router-dom'
import lambeOsDedos from '../../assets/lambeOsDedos.png.jpg'

export function AuthLayout(){
  return(
    <div className="flex w-full h-full">
      
        <div className="w-full h-full flex items-center justify-center flex-col gap-16 lg:w-1/2">
          
          {/**Logo */}
          <div className='mt-16 w-full max-w-[504px] px-8'>
            <Outlet />
          </div>
        </div>

        <div className="w-1/2 h-full justify-center items-center p-8 relative hidden lg:flex">
          
          <img 
            src={lambeOsDedos} 
            className='object-cover w-full h-full max-w-[656px] max-h-[960px] select-none rounded-[32px]' 
          />

          <div className='max-w-[656px] bottom-0 bg-white p-10 absolute rounded-sm'>
            <p className='text-gray-700'>
            "Em um mundo repleto de sabores mágicos, cada mordida de um cupcake é um doce abraço da felicidade. Na nossa doceria, transformamos o cotidiano em celebração, com uma explosão de cores e sabores que encanta os corações açucarados. Descubra o paraíso dos doces, onde cada doçura é uma história doce por contar."
            </p>
          </div>
        </div>
    </div>
  )
}