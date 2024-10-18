import { login, signup } from "./actions";
import logo from "@/app/icon.png";

export default function LoginPage() {
  return (
    <form className="flex justify-center h-[500px]">
      <div className="flex flex-col w-[640px] justify-center items-center">
        <div className="flex flex-col w-[75%] mb-4">
          <label
            htmlFor="email"
            className="text-lg font-semibold text-white mb-1"
          >
            Email:
          </label>
          <input
            className="h-[40px] text-zinc-700 border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
            id="email"
            name="email"
            type="email"
            placeholder="Email"
            required
          />
        </div>
        <div className="flex flex-col w-[75%] mb-4">
          <label
            htmlFor="password"
            className="text-lg font-semibold text-white  mb-1"
          >
            Password:
          </label>
          <input
            className="h-[40px] border text-zinc-700 border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
            id="password"
            name="password"
            type="password"
            placeholder="Password"
            required
          />
        </div>
        <div className="flex flex-col items-center">
          <button
            className="bg-blue-500 text-white p-2 rounded-md mt-10 w-[250px] transition duration-300 ease-in-out transform hover:bg-blue-600 hover:scale-105"
            formAction={login}
          >
            Log in
          </button>
          <button
            className="bg-green-500 text-white p-2 rounded-md mt-2 w-[250px] transition duration-300 ease-in-out transform hover:bg-green-600 hover:scale-105"
            formAction={signup}
          >
            Sign up
          </button>
        </div>
      </div>
    </form>
  );
}
