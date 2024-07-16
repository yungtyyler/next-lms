import { login, signup } from './actions'

export default function LoginPage() {
  return (
    <div className="page__container">
      <div className="flex flex-col gap-4 p-4 bg-moonstone-800 border border-gray-600 rounded-xl max-w-[600px] mx-auto">
        <h1 className="text-center text-[2.5em]">Log in</h1>
        <form className="flex flex-col gap-6">
          <div className="flex items-center justify-center gap-4">
            <label htmlFor="email">Email:</label>
            <input
              id="email"
              name="email"
              type="email"
              required
            />
          </div>
          <div className="flex items-center justify-center gap-4 self-center">
            <label htmlFor="password">Password:</label>
            <input
              id="password"
              name="password"
              type="password"
              required
            />
          </div>
          <div className="flex items-center justify-center gap-4">
            <button
              className="bg-dark_green hover:brightness-105 hover:shadow-lg text-white uppercase font-thin px-4 py-2 rounded-lg transition ease-in-out duration-200"
              formAction={login}
            >
              Log in
            </button>
            <button
              className="bg-light_cyan-200 hover:brightness-105 hover:shadow-lg text-white uppercase font-thin px-4 py-2 rounded-lg transition ease-in-out duration-200"
              formAction={signup}
            >
              Sign up
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
