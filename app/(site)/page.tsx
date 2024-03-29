import Image from "next/image";
import AuthForm from './components/AuthForm';

const Home = () => {
  return (
    <div className="flex flex-col justify-center min-h-full py-12 sm:px-6 lg:px-8 bg-gray-100">
      <div className="sm:mx-auto sm:w-full sm:max-w-full">
        <Image
          src="/images/logo.png"
          alt='logo'
          height="48"
          width="48"
          className="mx-auto w-auto"
        />
        <h4 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
          Sign in to your account
        </h4>
        <AuthForm />
      </div>
    </div>
  )
}

export default Home;