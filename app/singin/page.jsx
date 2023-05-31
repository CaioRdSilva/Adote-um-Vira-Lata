import Head from 'next/head'
import bcrypt, { genSaltSync } from 'bcrypt'
import { redirect } from 'next/navigation';

export default function singIn() {
  async function handleSubmit(formData = FormData) {
    "use server";
    const email = formData.get('email');
    const senha = formData.get('password');
    const confirPass= formData.get('Repetpassword');

    const saltRounds = 10;
    const salt = genSaltSync(saltRounds)
    if(senha == confirPass){
    const hashedPassword = bcrypt.hashSync(senha, salt);
    redirect('/')
    }else {
      return
    }

  }

  return (
    <div>
        <Head>
          <meta charSet="utf-8" />
          <meta name="robots" content="index, follow" />
          <meta
            name="viewport"
            content="inittial-scale=1.0, width=device-width"
          />
          <title>Home</title>
        </Head>
        <div className='flex justify-center'>
        <form action={handleSubmit} className='grid content-center'>
          <label className='font-poppins font-bold text-md'>
            Email:
            <input type="email" name="email" className='block border-solid border-2 rounded-full mb-2 pl-2 focus:outline-none required:border-orange-500 valid:border-green-900' required/>
          </label>
          <label className='font-poppins font-bold text-md'>
            Senha:
            <input type="password" name="password" className=' block border-solid border-2 rounded-full mb-2 pl-2 focus:outline-none required:border-orange-500 valid:border-green-900' required/>
          </label>
          <label className='font-poppins font-bold text-md'>
            Repetir senha:
            <input type="password" name="Repetpassword" className=' block border-solid border-2 rounded-full mb-4 pl-2 focus:outline-none required:border-orange-500 valid:border-green-900' required/>
          </label>
          <button type="submit" className='font-poppins font-bold text-md border-solid border-2 rounded-full border-green-900 hover:bg-green-900 hover:text-white'>Submit</button>
        </form>
      </div>
    </div>
  );
}
