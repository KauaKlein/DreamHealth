
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { z } from "zod"; 
import { loginSchema } from "../schema/acesso";

export const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      loginSchema.parse({ email, password });

    } catch (validationError) {
      const newErrors = {};
      if (validationError instanceof z.ZodError) { 
        validationError.errors.forEach((error) => {
          newErrors[error.path[0]] = error.message;
        });
      }
      setErrors(newErrors);
      console.error("Erros de validação:", newErrors);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-900 to-gray-900 p-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-8 space-y-6">
        <div className="text-center">
          <Link to="/">
            <h1 className="text-4xl font-bold text-indigo-600">DreamHealth</h1>
          </Link>
          <h2 className="text-2xl font-bold text-gray-800 mt-4">
            Entre em sua conta
          </h2>
          <p className="text-gray-500 mt-2">Seja bem-vindo(a) de volta!</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6" noValidate>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="clinica@gmail.com"
              
              className={`mt-1 block w-full px-4 py-3 bg-gray-50 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 ${
                  errors.email ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-indigo-500 focus:border-indigo-500'
              }`}
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-500">{errors.email}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Senha
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="*******"
              // Adicione a classe condicional para borda vermelha em caso de erro
              className={`mt-1 block w-full px-4 py-3 bg-gray-50 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 ${
                  errors.password ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-indigo-500 focus:border-indigo-500'
              }`}
            />
            {errors.password && (
              <p className="mt-1 text-sm text-red-500">{errors.password}</p>
            )}
          </div>

          {errors.api && (
            <p className="mt-1 text-sm text-red-500 text-center">{errors.api}</p>
          )}

          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-lg font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors"
            >
              Login
            </button>
          </div>
        </form>

        <p className="text-center text-sm text-gray-600">
          Não tem uma conta?{" "}
          <Link
            to="/cadastro"
            className="font-medium text-indigo-600 hover:text-indigo-500 hover:underline"
          >
            Cadastre-se
          </Link>
        </p>
      </div>
    </div>
  );
};