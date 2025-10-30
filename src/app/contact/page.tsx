"use client";

import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

import { Layout } from "@/components/layout";
import { Form } from "@/components/form";
import { Container } from "./style";
import { FadeIn } from "@/components/animations";

export default function Contact() {
  const { t } = useTranslation();

  const textVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const formVariants = {
    hidden: { opacity: 0, x: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: { duration: 0.7, delay: 0.3, ease: [0.25, 0.4, 0.25, 1] },
    },
  };

  return (
    <Layout>
      <Container>
        <section>
          <motion.div
            variants={textVariants}
            initial="hidden"
            animate="visible"
          >
            <FadeIn direction="down" duration={0.6}>
              <h1>{t("contact.title")}</h1>
            </FadeIn>
            <FadeIn direction="up" duration={0.6} delay={0.2}>
              <p dangerouslySetInnerHTML={{ __html: t("contact.text") }} />
            </FadeIn>
          </motion.div>

          <motion.div
            variants={formVariants}
            initial="hidden"
            animate="visible"
          >
            <Form />
          </motion.div>
        </section>
      </Container>
    </Layout>
  );
}
