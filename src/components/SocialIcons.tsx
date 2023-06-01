import Link from "next/link";
import React from "react";
import {
  FiGithub,
  FiInstagram,
  FiYoutube,
  FiLinkedin,
  FiTwitter,
} from "react-icons/fi";
import  { RiWhatsappLine } from 'react-icons/ri'
import { motion } from "framer-motion";

function SocialIcons() {
  const socialLinks = [
    { name: "Github", icon: <FiGithub />, link: "https://github.com/Rajeevaletshanth" },
    {
      name: "Youtube",
      icon: <FiYoutube />,
      link: "https://www.youtube.com/@ingeniousvfx3037",
    },
    {
      name: "LinkedIn",
      icon: <FiLinkedin />,
      link: "https://www.linkedin.com/in/ramachandran-rajeevaletshanth-99768b18b/",
    },
    {
      name: "Whatsapp",
      icon: <RiWhatsappLine />,
      link: "https://wa.me/message/VLUJEQGE3ZGJM1?src=qr",
    },
    // {
    //   name: "Twitter",
    //   icon: <FiTwitter />,
    //   link: "https://twitter.com/",
    // },
  ];
  return (
    <motion.div
      className="social-icons"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 0.3,
        ease: "easeInOut",
        delay: 1.95,
      }}
    >
      <ul className="social-icons-list">
        {socialLinks.map(({ name, icon, link }) => (
          <li key={name} title={name} className="social-icons-list-item">
            <Link
              href={link}
              className="social-icons-list-item-link"
              target="_blank"
            >
              {icon}
            </Link>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

export default SocialIcons;
