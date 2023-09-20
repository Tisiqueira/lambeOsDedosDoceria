import { Link } from "react-router-dom";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

export function Register(){
  return(
    <>
      <header className="flex flex-col items-center gap-4 text-center">
        <h1 className="text-2xl font-bold text-gray-900 tracking-[-0.1px]">
          Crie sua conta
        </h1>

        <p className="space-x-2">
          <span className="text-gray-700 tracking-[-0.5px]">
            Já Possui uma conta?
          </span>
          <Link to="/register" className="tracking-[-0.5px] font-medium text-red-900">Fazer Login</Link>
        </p>
      </header>

      <form action="" className="mt-[60px] flex flex-col gap-4">
        <Input 
         
          placeholder="Nome"
          name="nome"
          >

        </Input>

        <Input 
          type="email" 
          placeholder="E-mail"
          name="email"
          >

        </Input>
        <Input 
          type="password" 
          placeholder="Senha"
          name="password"
          >

        </Input>

        <Button type="submit" className="mt-2">
          Entrar
        </Button>
      </form>
    </>
  );
}