"use client";

import Image from "next/image";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

import { Layout } from "@/components/layout";
import { Container, MotionSection, MotionList, MotionListItem } from "./style";
import { FadeIn, ScaleIn } from "@/components/animations";
import { TechnologyCard } from "@/components/technology-card";

import my_photo from "../../../public/images/my-photo.png";
import { experiences } from "@/utils/experiencesData";

import { ExperienceType } from "@/types/experiencesType";

export default function About() {
  const { t } = useTranslation();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const experienceVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: [0.25, 0.4, 0.25, 1] },
    },
  };

  return (
    <Layout>
      <Container>
        <MotionSection
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <section className="about-content">
            <FadeIn direction="down" duration={0.6}>
              <h1>{t("about.title")}</h1>
            </FadeIn>

            <FadeIn direction="up" duration={0.6} delay={0.2}>
              <p dangerouslySetInnerHTML={{ __html: t("about.text") }} />
            </FadeIn>

            <FadeIn direction="up" duration={0.6} delay={0.3}>
              <h3>{t("about.experience.title")}</h3>
            </FadeIn>

            <article className="about-experiences">
              <MotionList
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
              >
                {experiences.map((experience: ExperienceType) => (
                  <MotionListItem
                    key={experience.id}
                    variants={experienceVariants}
                    whileHover={{ x: 5, transition: { duration: 0.2 } }}
                  >
                    <header>
                      <motion.h4
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.1 }}
                      >
                        {t(experience.title)}
                        <span>{t(experience.subTitle)}</span>
                      </motion.h4>

                      <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.2 }}
                      >
                        {experience.period}
                      </motion.span>
                    </header>

                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.3 }}
                    >
                      {t(experience.descriptionKey)}
                    </motion.p>

                    <motion.ul
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.4 }}
                    >
                      {experience.technologies.map((tech, i) => (
                        <motion.li
                          key={i}
                          initial={{ scale: 0, opacity: 0 }}
                          whileInView={{ scale: 1, opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 0.3,
                            delay: 0.5 + i * 0.05,
                            ease: [0.34, 1.56, 0.64, 1],
                          }}
                          whileHover={{
                            scale: 1.05,
                            transition: { duration: 0.2 },
                          }}
                        >
                          <TechnologyCard>{tech}</TechnologyCard>
                        </motion.li>
                      ))}
                    </motion.ul>
                  </MotionListItem>
                ))}
              </MotionList>
            </article>
          </section>

          <ScaleIn duration={0.8} delay={0.4}>
            <motion.div
              className="about-image"
              whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
            >
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 5,
                  ease: "easeInOut",
                  repeat: Infinity,
                }}
              >
                <Image
                  src={my_photo}
                  alt={t("about.imageAlt") || "Foto pessoal"}
                  priority
                />
              </motion.div>
            </motion.div>
          </ScaleIn>
        </MotionSection>
      </Container>
    </Layout>
  );
}
