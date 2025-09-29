import { useEffect, useState } from "react";

const Hello = () => {
  const greetings = [
    "Hello", // English
    "こんにちは", // Japanese
    "你好", // Chinese
    "안녕하세요", // Korean
    "Bonjour", // French
    "Hola", // Spanish
    "Ciao", // Italian
    "Hallo", // German
    "Olá", // Portuguese
    "Привет", // Russian
    "नमस्ते", // Hindi
    "مرحبا", // Arabic
    "Γεια σας", // Greek
    "สวัสดี", // Thai
    "Xin chào", // Vietnamese
    "Hej", // Swedish
    "Merhaba", // Turkish
    "שָׁלוֹם", // Hebrew
    "Hallå", // Swedish
    "Namaste", // Nepali
    "Salam", // Persian
    "Sawubona", // Zulu
    "Jambo", // Swahili
    "Dia dhuit", // Irish
    "Talofa", // Samoan
    "Buna", // Romanian
    "Zdravo", // Croatian
    "Ahoj", // Czech
    "Terve", // Finnish
    "Kamusta", // Filipino
    "Aloha", // Hawaiian
    "សួស្តី", // Khmer
    "Bongu", // Maltese
    "Kia ora", // Maori
    "Салам", // Kazakh
    "Сайн уу", // Mongolian
    "Dumela", // Tswana
    "Ayubowan",
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (index < greetings.length - 1) {
        setIndex((prev) => prev + 1);
      } else {
        setIndex(0);
      }
    }, 800);

    return () => clearInterval(interval);
  });

  return <>{greetings[index]}</>;
};
export default Hello;
