"use client";

import { useTranslation } from "react-i18next";

import { z } from "zod";

import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";

import styled from "styled-components";

import { motion, AnimatePresence } from "framer-motion";

import { useState } from "react";

const StyledForm = styled(motion.form)`
  display: flex;
  width: 25.2vw;
  max-width: 480px;
  min-width: 400px;
  gap: 37px;
  flex-direction: column;

  .error {
    border: 2px solid #ff4444 !important;
    animation: shake 0.3s ease-in-out;
  }

  @keyframes shake {
    0%,
    100% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(-5px);
    }
    75% {
      transform: translateX(5px);
    }
  }

  & > label {
    display: flex;
    gap: 0.7em;
    flex-direction: column;
    position: relative;

    & > span:first-of-type {
      font-size: 14px;
      font-weight: 500;
      letter-spacing: 0.3px;
      color: ${({ theme }) => theme.COLORS.SECONDARY};
      text-transform: uppercase;
    }

    & > input {
      width: 100%;
      height: 66px;
      outline: none;
      padding: 0 20px;
      border: 2px solid ${({ theme }) => theme.COLORS.TERTIARY};
      border-radius: 12px;
      font-size: 15px;
      font-weight: 400;
      font-family: "Lexend", sans-serif;
      background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
      color: ${({ theme }) => theme.COLORS.SECONDARY};
      transition: border-color 0.3s cubic-bezier(0.4, 0, 0.2, 1),
        box-shadow 0.3s cubic-bezier(0.4, 0, 0.2, 1),
        transform 0.2s cubic-bezier(0.4, 0, 0.2, 1);

      ::placeholder,
      ::-webkit-input-placeholder {
        color: ${({ theme }) => theme.COLORS.TERTIARY};
        opacity: 0.6;
      }
      :-ms-input-placeholder {
        color: ${({ theme }) => theme.COLORS.TERTIARY};
        opacity: 0.6;
      }

      &:focus {
        border-color: ${({ theme }) => theme.COLORS.PRIMARY};
        box-shadow: 0 0 0 4px rgba(123, 44, 191, 0.12),
          0 8px 20px rgba(123, 44, 191, 0.18),
          inset 0 1px 3px rgba(123, 44, 191, 0.1);
        transform: translateY(-3px);
      }

      &:hover:not(:focus) {
        border-color: ${({ theme }) => theme.COLORS.PRIMARY};
        box-shadow: 0 2px 8px rgba(123, 44, 191, 0.08);
      }
    }

    & > textarea {
      width: 100%;
      height: 161px;
      outline: none;
      padding: 15px 20px;
      resize: none;
      border: 2px solid ${({ theme }) => theme.COLORS.TERTIARY};
      border-radius: 12px;
      font-size: 15px;
      font-weight: 400;
      font-family: "Lexend", sans-serif;
      background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
      color: ${({ theme }) => theme.COLORS.SECONDARY};
      line-height: 1.6;
      transition: border-color 0.3s cubic-bezier(0.4, 0, 0.2, 1),
        box-shadow 0.3s cubic-bezier(0.4, 0, 0.2, 1),
        transform 0.2s cubic-bezier(0.4, 0, 0.2, 1);

      ::placeholder,
      ::-webkit-input-placeholder {
        color: ${({ theme }) => theme.COLORS.TERTIARY};
        opacity: 0.6;
      }
      :-ms-input-placeholder {
        color: ${({ theme }) => theme.COLORS.TERTIARY};
        opacity: 0.6;
      }

      &:focus {
        border-color: ${({ theme }) => theme.COLORS.PRIMARY};
        box-shadow: 0 0 0 4px rgba(123, 44, 191, 0.12),
          0 8px 20px rgba(123, 44, 191, 0.18),
          inset 0 1px 3px rgba(123, 44, 191, 0.1);
        transform: translateY(-3px);
      }

      &:hover:not(:focus) {
        border-color: ${({ theme }) => theme.COLORS.PRIMARY};
        box-shadow: 0 2px 8px rgba(123, 44, 191, 0.08);
      }

      &::-webkit-scrollbar {
        width: 10px;
      }

      &::-webkit-scrollbar-track {
        background: rgba(123, 44, 191, 0.05);
        border-radius: 5px;
      }

      &::-webkit-scrollbar-thumb {
        background: linear-gradient(
          135deg,
          ${({ theme }) => theme.COLORS.PRIMARY} 0%,
          #9333ea 100%
        );
        border-radius: 5px;
        border: 2px solid ${({ theme }) => theme.COLORS.BACKGROUND};
      }

      &::-webkit-scrollbar-thumb:hover {
        background: linear-gradient(135deg, #9333ea 0%, #a855f7 100%);
      }
    }

    & > span:last-of-type {
      font-size: 13px;
      font-weight: 600;
      color: #ff4444;
      display: flex;
      align-items: center;
      gap: 6px;
      margin-top: -5px;

      &::before {
        content: "⚠";
        font-size: 15px;
      }
    }
  }

  @media (max-width: 1280px) {
    max-width: none;
    min-width: 0;
    width: 100%;
  }
`;

const SubmitButton = styled(motion.button)`
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 68px;
  border: none;
  outline: none;
  color: #ffffff;
  cursor: pointer;
  font-size: 16px;
  font-weight: 700;
  letter-spacing: 1.2px;
  border-radius: 12px;
  background: linear-gradient(135deg, #7b2cbf 0%, #9333ea 50%, #a855f7 100%);
  font-family: "Lexend", sans-serif;
  text-transform: uppercase;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1),
    box-shadow 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 10px 30px rgba(123, 44, 191, 0.35),
    0 4px 15px rgba(123, 44, 191, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.15);

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      135deg,
      rgba(255, 255, 255, 0.25) 0%,
      rgba(255, 255, 255, 0) 100%
    );
    transition: left 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  }

  &::after {
    content: "";
    position: absolute;
    top: -3px;
    left: -3px;
    right: -3px;
    bottom: -3px;
    border-radius: 14px;
    background: linear-gradient(135deg, #7b2cbf 0%, #f85e9f 100%);
    z-index: -1;
    opacity: 0;
    filter: blur(12px);
    transition: opacity 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  }

  & > span {
    position: relative;
    z-index: 1;
  }

  &:hover:not(:disabled) {
    transform: translateY(-4px);
    box-shadow: 0 15px 40px rgba(123, 44, 191, 0.45),
      0 6px 20px rgba(123, 44, 191, 0.35),
      inset 0 1px 0 rgba(255, 255, 255, 0.2);
    background: linear-gradient(135deg, #8b3ccf 0%, #a343fa 50%, #b865ff 100%);

    &::before {
      left: 0;
    }

    &::after {
      opacity: 1;
    }
  }

  &:active:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: 0 10px 30px rgba(123, 44, 191, 0.4),
      0 4px 15px rgba(123, 44, 191, 0.3),
      inset 0 1px 0 rgba(255, 255, 255, 0.15);
  }

  &:disabled {
    opacity: 0.65;
    cursor: not-allowed;
    transform: none;
    box-shadow: 0 5px 15px rgba(123, 44, 191, 0.2);
    filter: grayscale(0.2);
  }
`;

const SuccessMessage = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  padding: 22px 24px;
  border-radius: 12px;
  background: linear-gradient(
    135deg,
    rgba(34, 197, 94, 0.15) 0%,
    rgba(34, 197, 94, 0.08) 100%
  );
  border: 2px solid #22c55e;
  color: #22c55e;
  font-weight: 700;
  font-size: 15px;
  letter-spacing: 0.3px;
  box-shadow: 0 8px 20px rgba(34, 197, 94, 0.15),
    0 2px 8px rgba(34, 197, 94, 0.1);

  &::before {
    content: "✓";
    font-size: 26px;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background: #22c55e;
    color: #ffffff;
    box-shadow: 0 2px 8px rgba(34, 197, 94, 0.3);
  }
`;

export const Form = () => {
  const { t } = useTranslation();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const createFormSchema = z.object({
    name: z.string().min(3, t("contact.form.errors.name")),
    email: z
      .string()
      .min(1, t("contact.form.errors.minEmail"))
      .email(t("contact.form.errors.errorEmail")),
    message: z.string().min(6, t("contact.form.errors.message")),
  });

  type CreateFormData = z.infer<typeof createFormSchema>;

  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateFormData>({
    resolver: zodResolver(createFormSchema),
  });

  const sendForm = async (data: CreateFormData) => {
    setIsSubmitting(true);
    try {
      await fetch("https://formspree.io/f/meqylyna", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });

      setShowSuccess(true);
      reset();

      setTimeout(() => {
        setShowSuccess(false);
      }, 5000);
    } catch (error) {
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: custom * 0.1,
        ease: [0.25, 0.4, 0.25, 1],
      },
    }),
  };

  return (
    <StyledForm
      onSubmit={handleSubmit(sendForm)}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <AnimatePresence>
        {showSuccess && (
          <SuccessMessage
            initial={{ opacity: 0, y: -20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.9 }}
            transition={{ duration: 0.4, ease: [0.34, 1.56, 0.64, 1] }}
          >
            {t("contact.form.success")}
          </SuccessMessage>
        )}
      </AnimatePresence>

      <motion.label
        variants={inputVariants}
        initial="hidden"
        animate="visible"
        custom={0}
      >
        <input
          type="text"
          placeholder={t("contact.form.name")}
          {...register("name")}
          className={errors && errors.name === undefined ? "" : "error"}
        />
        <AnimatePresence>
          {errors.name && (
            <motion.span
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              {errors.name.message}
            </motion.span>
          )}
        </AnimatePresence>
      </motion.label>

      <motion.label
        variants={inputVariants}
        initial="hidden"
        animate="visible"
        custom={1}
      >
        <input
          type="email"
          placeholder={t("contact.form.email")}
          {...register("email")}
          className={errors && errors.email === undefined ? "" : "error"}
        />
        <AnimatePresence>
          {errors.email && (
            <motion.span
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              {errors.email.message}
            </motion.span>
          )}
        </AnimatePresence>
      </motion.label>

      <motion.label
        variants={inputVariants}
        initial="hidden"
        animate="visible"
        custom={2}
      >
        <textarea
          placeholder={t("contact.form.message")}
          {...register("message")}
          className={errors && errors.message === undefined ? "" : "error"}
        />
        <AnimatePresence>
          {errors.message && (
            <motion.span
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              {errors.message.message}
            </motion.span>
          )}
        </AnimatePresence>
      </motion.label>

      <SubmitButton
        type="submit"
        disabled={isSubmitting}
        whileTap={{ scale: 0.97 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <span>
          {isSubmitting
            ? t("contact.form.button.sending")
            : t("contact.form.button.submit")}
        </span>
      </SubmitButton>
    </StyledForm>
  );
};
