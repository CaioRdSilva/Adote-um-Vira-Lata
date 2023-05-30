import Head from 'next/head'

export default function singIn() {
  async function handleSubmit(formData = FormData) {
    "use server";
    const email = formData.get("email");

    console.log(email);
  }

  return (
    <div>
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
        <form action={handleSubmit}>
          <label>
            Email:
            <input type="text" name="email" />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
}
