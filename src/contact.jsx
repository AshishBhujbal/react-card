import React from "react";
import { Card } from "./card";
function Contact() {
  return (
    <div>
      <p> Contact App </p>
      <Card
        name="Elon Musk"
        photo="images/elon.jpg"
        alternative="elon musk img"
        mobile="+91 586 963 7852"
        description="Elon Musk is the co-founder, CEO, and lead designer of SpaceX, a private aerospace manufacturer and space transportation company"
      />
      <Card
        name="Ratan Tata"
        photo="images/ratantata.jpg"
        alternative="Ratan Tata img"
        mobile="+91 886 963 2452"
        description="Ratan Tata is an Indian industrialist, philanthropist, and former chairman of Tata Sons, the holding company of the Tata Group. "
      />
      <Card
        name="Mark Zukerberg"
        photo="images/zukerberg.jpg"
        alternative="Mark Zukerberg img"
        mobile="+91 259 783 4125"
        description="Mark Zuckerberg is an American technology entrepreneur and philanthropist. He was born on May 14, 1984, in White Plains, New York, United States."
      />
    </div>
  );
}

export { Contact };
