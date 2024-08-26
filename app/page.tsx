"use client";

import { motion } from "framer-motion";
import { fontNoto, fontPlayfair } from "./fonts";

const RootPage: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection:'column',

        height: "100%",
        width: "100%",
        color: "rgba(90,90,90,1)",

      }}
    >
      <motion.h2 style={{
        fontFamily:fontPlayfair.style.fontFamily,
      }}>Emojis : Did you know ?</motion.h2>
      <motion.div style={{
        width:'50%',
        fontFamily: fontNoto.style.fontFamily,
        color: "rgba(100,100,100,1)",
        fontSize: "14px",
      }}>
        🌟 Welcome to the world of emojis! 🎨 Did you know? The first emoji set
      was created in 1999 by Shigetaka Kurita in Japan 🇯🇵, and it originally
      included just 176 emojis. 📱 Since then, emojis have exploded in
      popularity 🌟, with over 3,000 in use today! 😍 The most loved emoji is
      the ❤️ (Red Heart), while the most disliked is the 😒 (Unamused Face). 🌈
      Emojis like 😂 (Face with Tears of Joy) and 🤔 (Thinking Face) have become
      essential in digital conversations 💬, adding color and emotion to our
      messages. 🚀 Explore how these tiny icons can make communication both
      beautiful and expressive! 🌟
      </motion.div>
    </motion.div>
  );
};

export default RootPage;
