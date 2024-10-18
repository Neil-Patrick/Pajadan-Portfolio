.logo-glow {
    font-size: 25px;
    font-family:Verdana, Geneva, Tahoma, sans-serif;
    color: #fff;
    text-align: center;
    text-shadow: 0 0 10px rgb(255, 0, 0),  
                 0 0 20px rgb(255, 0, 0), 
                 0 0 30px rgb(255, 0, 0), 
                 0 0 40px rgb(255, 0, 0); 
    animation: rgbGlow 3s infinite alternate;  
    transition: text-shadow 0.3s ease-in-out;
    cursor: pointer;
}

@keyframes rgbGlow {
    0% {
      text-shadow: 0 0 10px rgb(255, 0, 0),   /* Red */
                   0 0 20px rgb(255, 0, 0),
                   0 0 30px rgb(255, 0, 0),
                   0 0 40px rgb(255, 0, 0);
    }
    33% {
      text-shadow: 0 0 10px rgb(0, 255, 0),   /* Green */
                   0 0 20px rgb(0, 255, 0),
                   0 0 30px rgb(0, 255, 0),
                   0 0 40px rgb(0, 255, 0);
    }
    66% {
      text-shadow: 0 0 10px rgb(0, 0, 255),   /* Blue */
                   0 0 20px rgb(0, 0, 255),
                   0 0 30px rgb(0, 0, 255),
                   0 0 40px rgb(0, 0, 255);
    }
    100% {
      text-shadow: 0 0 10px rgb(255, 0, 0),   /* Back to Red */
                   0 0 20px rgb(255, 0, 0),
                   0 0 30px rgb(255, 0, 0),
                   0 0 40px rgb(255, 0, 0);
    }
  }