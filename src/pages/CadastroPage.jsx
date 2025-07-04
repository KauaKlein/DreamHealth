import React, { useState } from "react";
import { Link } from "react-router-dom";
import { z } from "zod";
import { registerSchema } from "../schema/acesso";

export const CadastroPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      registerSchema.parse({ nome, email, password, confirmPassword });
      setErrors({});
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
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-bg)] p-4">
      <div className="w-full max-w-md bg-[var(--color-bg-secondary)] rounded-2xl shadow-2xl p-8 space-y-6">
        <div className="text-center">
          <Link to="/">
            <h1 className="text-4xl font-bold text-[var(--color-text-secondary)]">Dream<span className="text-[var(--color-text)]">Health</span></h1>
          </Link>
          <h2 className="text-2xl font-bold text-[var(--color-text)] mt-4">Cadastre-se</h2>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6" noValidate>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-[var(--color-text)]"
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
              className="mt-1 block w-full px-4 py-3 bg-[var(--color-input)] text-[var(--color-text-secondary)] rounded-md shadow-sm placeholder-[var(--color-text-input)] focus:outline-none focus:ring-1 focus:ring-[var(--color-text)]"
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-500">{errors.email}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-[var(--color-text)]"
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
              className="mt-1 block w-full px-4 py-3 bg-[var(--color-input)] text-[var(--color-text-secondary)] rounded-md shadow-sm placeholder-[var(--color-text-input)] focus:outline-none focus:ring-1 focus:ring-[var(--color-text)]"
            />
            {errors.password && (
              <p className="mt-1 text-sm text-red-500">{errors.password}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="confirmPassword"
              className="block text-sm font-medium text-[var(--color-text)]"
            >
              Confirmar Senha
            </label>
            <input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              required
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="*******"
              className="mt-1 block w-full px-4 py-3 bg-[var(--color-input)] text-[var(--color-text-secondary)] rounded-md shadow-sm placeholder-[var(--color-text-input)] focus:outline-none focus:ring-1 focus:ring-[var(--color-text)]"
            />
            {errors.confirmPassword && (
              <p className="mt-1 text-sm text-red-500">
                {errors.confirmPassword}
              </p>
            )}
          </div>

          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-lg font-medium text-white bg-[var(--color-primary)] hover:bg-[var(--color-hover)] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors"
            >
              Cadastrar
            </button>
          </div>
        </form>

        <p className="text-center text-sm text-[var(--color-text-secondary)]">
          Já possui uma conta?{" "}
          <Link
            to="/login"
            className="font-bold text-[var(--color-primary)] hover:text-[var(--color-hover)] hover:underline"
          >
            Faça Login
          </Link>
        </p>
      </div>
    </div>
  );
};
