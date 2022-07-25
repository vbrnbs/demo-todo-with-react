import { useState } from "react";
import api from "../../api/api";
import SignUp from "./SignUp";
import { FetchState } from "../../hooks";
import { windows } from "../icons";

const Login = ({ dispatch }) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [register, setRegister] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    dispatch({ type: FetchState.FETCH_INIT });
    try {
      await api.createSession(email, password);
      const data = await api.getAccount();
      dispatch({ type: FetchState.FETCH_SUCCESS, payload: data });
      console.log(data)
    } catch (e) {
      dispatch({ type: FetchState.FETCH_FAILURE });
    }
  };

  return register ? (
    <SignUp setRegister={setRegister} dispatch={dispatch} />
  ) : (
    <section className="container h-screen mx-auto flex">
      <div className="flex-grow flex flex-col max-w-xl justify-center p-6">
        <h1 className="text-6xl font-bold">Belépés</h1>
        <p className="mt-6">
          {" "}
          <strong>Nincs még VEG-es Microsoft Fiókod?</strong>
          {" "}<br/>
          <span
            className="cursor-pointer underline"
            onClick={() => setRegister(true)}
          >
            Regisztrálok
          </span>{" "}ideiglenes felhasználó névvel.
        </p>
        <form onSubmit={handleLogin}>
          <label className="block mt-6"> Email</label>
          <input
            className="w-full p-4 placeholder-gray-400 text-gray-700 bg-white text-lg border-0 border-b-2 border-gray-400 focus:ring-0 focus:border-gray-900"
            type="text"
            onChange={(e) => setEmail(e.target.value)}
            name="email"
            autoComplete="email"
          />
          <label className="block mt-6"> Jelszó</label>
          <input
            className="w-full p-4 placeholder-gray-400 text-gray-700 bg-white text-lg border-0 border-b-2 border-gray-400 focus:ring-0 focus:border-gray-900"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            name="password"
            autoComplete="password"
          />
          <div>
          <div
            // type="submit"
            className="w-full p-4 mx-auto mt-4 py-3 lg:py-5 px-10 lg:px-24 text-lg text-center md:text-2xl font-semibold cursor-pointer rounded-lg shadow-md bg-white text-gray-900 border border-gray-900 hover:bg-gray-100 focus:outline-none"
          >
            microsoft{windows(10, "#d84a4a")} belépés
          </div>
          </div>

          <div className="mt-6">
            <button
              type="submit"
              disabled={!email || !password}
              className="mx-auto mt-4 py-4 px-16 font-semibold rounded-lg shadow-md bg-veg-dark text-white border hover:border-gray-900 hover:text-gray-900 hover:bg-white focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Belépés
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Login;
