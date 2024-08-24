import { useState, useEffect } from "react";

export const Greeting = () => {
  const [greeting, setGreeting] = useState("");

  useEffect(() => {
    const getGreeting = () => {
      const currentHour = new Date().getHours();

      if (currentHour < 12) {
        return "Wishing You a Bright and Beautiful Morning!";
      } else if (currentHour < 18) {
        return "Hope You’re Having a Fantastic Afternoon!";
      } else if (currentHour < 21) {
        return "Good Evening! May Your Night Be As Wonderful As You Are!";
      } else {
        return "Hope You’re Enjoying a Peaceful and Relaxing Evening!";
      }
    };

    setGreeting(getGreeting());
  }, []);

  return <div>{greeting}</div>;
};
