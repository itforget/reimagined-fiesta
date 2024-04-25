"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion"

export default function Weather() {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    async function fetchWeather() {
      const response = await fetch(
        "https://api.openweathermap.org/data/2.5/weather?q=Brasilia&appid=15adb0e63c5f05a578a664adfab9d816&units=metric"
      );
      const data = await response.json();
      setWeather(data);
    }

    fetchWeather();
  }, []);

  if (!weather) return <div className=" text-4xl font-extrabold">Loading...</div>;

  const iconId = weather.weather[0].icon;
  console.log(iconId);
  const imageUrl = `https://openweathermap.org/img/wn/${iconId}@2x.png`;

  const temp = weather.main.temp

  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="flex flex-col items-center justify-center space-y-4 mt-44">
        <h1 className=" text-5xl font-extrabold">Tempo Brasilia</h1>
        <div className="flex flex-col items-center justify-center space-y-4 my-48 gap-9">
          <div className="flex flex-row items-center justify-center space-x-4 gap-6">
            <div>
              <p className="text-1xl font-bold">Temperatua atual</p>
              <p className={`text-3xl ${temp == 30 ? "text-red-600" : "text-blue-600"} font-bold`}>
                {temp} °C
              </p>
            </div>
            <div>
              <p className="text-1xl font-bold">Sensação Termica</p>
              <p className="text-3xl font-bold">
                {weather.main.feels_like} °C
              </p>
            </div>
            <div>
              <p className="text-1xl font-bold">Humidade do ar</p>
              <p className="text-3xl font-bold">
                {weather.main.humidity} %
              </p>
            </div>
          </div>
          <div className=" bg-slate-800 rounded-xl">
            <img src={imageUrl} width={89} height={89} alt="imagem" />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
