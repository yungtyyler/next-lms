import Script from 'next/script'
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
          </div>
        </form>
      </div>

      <div
        id="g_id_onload"
        data-client_id="<client ID>"
        data-context="signin"
        data-ux_mode="popup"
        data-callback="handleSignInWithGoogle"
        data-nonce=""
        data-auto_select="true"
        data-itp_support="true"
        data-use_fedcm_for_prompt="true"
      ></div>

      <div
        className="g_id_signin"
        data-type="standard"
        data-shape="pill"
        data-theme="outline"
        data-text="signin_with"
        data-size="large"
        data-logo_alignment="left"
      ></div>

      <div className="flex flex-col gap-4 p-4 bg-moonstone-800 border border-gray-600 rounded-xl max-w-[600px] mx-auto">
        <h1 className="text-center text-[2.5em]">Sign Up</h1>
        <form className="flex flex-col gap-6">
          <div className="flex items-center justify-center gap-4">
            <label htmlFor="username">Username:</label>
            <input
              id="username"
              name="username"
              type="text"
              required
            />
          </div>
          <div className="flex items-center justify-center gap-4">
            <label htmlFor="signUpEmail">Email:</label>
            <input
              id="signUpEmail"
              name="signUpEmail"
              type="email"
              required
            />
          </div>
          <div className="flex items-center justify-center gap-4 self-center">
            <label htmlFor="signUpPassword">Password:</label>
            <input
              id="signUpPassword"
              name="signUpPassword"
              type="password"
              required
            />
          </div>
          <div className="flex items-center justify-center gap-4">
            <button
              className="bg-light_cyan-200 hover:brightness-105 hover:shadow-lg text-white uppercase font-thin px-4 py-2 rounded-lg transition ease-in-out duration-200"
              formAction={signup}
            >
              Sign up
            </button>
          </div>
        </form>
      </div>
      <Script
        src="https://accounts.google.com/gsi/client"
        async
      />
    </div>
  )
}
