"use client";

import Image from "next/image";
import Link from "next/link";

import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

import { Layout } from "@/components/layout";
import { PrimaryButton } from "@/components/button";
import { IconArrowRight } from "@/components/icons";
import { iconsData } from "@/utils/iconsData";

import image_home from "../../../public/images/image-home.png";

import { Container } from "./style";

export default function Home() {
  const { t } = useTranslation();

  // Variants para textos
  const textVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (delay: number) => ({
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, delay, ease: [0.25, 0.4, 0.25, 1] },
    }),
  };

  // Variants para icons
  const iconsVariants = (index: number) => ({
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        delay: 0.8 + index * 0.1,
        ease: [0.34, 1.56, 0.64, 1],
      },
    },
  });

  // Variant para botão
  const buttonVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        delay: 0.8 + iconsData.length * 0.1,
        ease: [0.34, 1.56, 0.64, 1],
      },
    },
  };

  // Variant para imagem flutuante
  const floatVariants = {
    animate: {
      y: [0, -15, 0],
      transition: { duration: 4, ease: "easeInOut", repeat: Infinity },
    },
  };

  return (
    <Layout>
      <Container>
        <section className="content">
          <motion.div className="left-content">
            <motion.div
              variants={textVariants}
              custom={0.2}
              initial="hidden"
              animate="visible"
            >
              <p>{t("home.intro")}</p>
            </motion.div>
            <motion.div
              variants={textVariants}
              custom={0.4}
              initial="hidden"
              animate="visible"
            >
              <h1>{t("home.name")}</h1>
            </motion.div>
            <motion.div
              variants={textVariants}
              custom={0.6}
              initial="hidden"
              animate="visible"
            >
              <h2>{t("home.subtitle")}</h2>
            </motion.div>
            <div className="icons-content">
              {iconsData.map((icon, index) => (
                <motion.div
                  key={icon.id}
                  variants={iconsVariants(index)}
                  initial="hidden"
                  animate="visible"
                  whileHover={{
                    scale: 1.2,
                    rotate: [0, -5, 5, -5, 0],
                    transition: { duration: 0.4 },
                  }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Link
                    href={icon.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {icon.icon}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                variants={buttonVariants}
                initial="hidden"
                animate="visible"
              >
                <PrimaryButton>
                  <a
                    href="/mfelipesilva-cv.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {t("home.button")}
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{
                        duration: 1.5,
                        ease: "easeInOut",
                        repeat: Infinity,
                      }}
                    >
                      <IconArrowRight />
                    </motion.div>
                  </a>
                </PrimaryButton>
              </motion.div>
            </div>
          </motion.div>
          <motion.div
            className="right-content"
            variants={floatVariants}
            animate="animate"
          >
            <Image src={image_home} alt="Home Image" priority />
          </motion.div>
        </section>
      </Container>
    </Layout>
  );
}
