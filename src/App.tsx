import { useEffect, useState } from "react";

const ViteInspiredAnimation = () => {
  const [rotation, setRotation] = useState(0);
  const [hovered, setHovered] = useState(false);
  const [pulseSize, setPulseSize] = useState(1);

  // Handle rotation animation
  useEffect(() => {
    const rotationInterval = setInterval(() => {
      setRotation((prev) => (prev + 1) % 360);
    }, 50);

    return () => clearInterval(rotationInterval);
  }, []);

  // Handle pulse animation
  useEffect(() => {
    const pulseInterval = setInterval(() => {
      setPulseSize(() => 1 + 0.05 * Math.sin(Date.now() / 500));
    }, 50);

    return () => clearInterval(pulseInterval);
  }, []);

  useEffect(() => {
    const getOktaUser = async () => {
      const resp = await fetch("https://dev-65882879.okta.com/api/v1/users", {
        method: "GET",
        headers: {
          Authorization: "SSWS 00yV94qA7yNzWt9jDyaDWD_q8i4digoYTqckKauDn0",
        },
      });

      try {
        const data = await resp.text();
        console.log(data);
      } catch (e) {
        console.log("e:::: ", e);
      }
    };

    getOktaUser();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 p-4">
      <h2 className="text-white">workflow success</h2>
      <div className="mb-8 relative">
        <svg
          width="180"
          height="180"
          viewBox="0 0 180 180"
          className="transform transition-all duration-300 hover:scale-110"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          {/* Background glow effect */}
          <circle
            cx="90"
            cy="90"
            r="70"
            fill="url(#glowGradient)"
            filter="blur(15px)"
            style={{ transform: `scale(${pulseSize})` }}
            className="opacity-70"
          />

          {/* Rotating Orbit */}
          <g
            style={{
              transform: `rotate(${rotation}deg)`,
              transformOrigin: "90px 90px",
            }}
          >
            <circle
              cx="90"
              cy="25"
              r="8"
              fill="#38bdf8"
              className="opacity-75"
            />
            <circle
              cx="155"
              cy="90"
              r="6"
              fill="#a855f7"
              className="opacity-75"
            />
            <circle
              cx="90"
              cy="155"
              r="10"
              fill="#34d399"
              className="opacity-75"
            />
            <circle
              cx="25"
              cy="90"
              r="7"
              fill="#f97316"
              className="opacity-75"
            />
          </g>

          {/* Central logo */}
          <polygon
            points="90,50 120,90 90,130 60,90"
            fill={hovered ? "#646cff" : "#747bff"}
            className="transition-all duration-300"
            style={{ transform: hovered ? "scale(1.1)" : "scale(1)" }}
          />

          {/* Gradients */}
          <defs>
            <radialGradient
              id="glowGradient"
              cx="50%"
              cy="50%"
              r="50%"
              fx="50%"
              fy="50%"
            >
              <stop offset="0%" stopColor="#646cff" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#646cff" stopOpacity="0" />
            </radialGradient>
          </defs>
        </svg>
      </div>

      <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500 mb-4">
        Vite + React
      </h1>

      <h2 className="text-[#FFFFFF]">{import.meta.env.VITE_ENV}</h2>

      <p className="text-gray-300 max-w-md text-center mb-6">
        Next Generation Frontend Tooling
      </p>

      <div className="flex gap-4 mt-4">
        <button className="bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 px-6 rounded-full transition-all duration-300 transform hover:scale-105">
          Get Started
        </button>
        <button className="bg-transparent border border-gray-500 hover:border-gray-300 text-gray-300 hover:text-white font-medium py-2 px-6 rounded-full transition-all duration-300 transform hover:scale-105">
          Why Vite?
        </button>
      </div>
    </div>
  );
};

export default ViteInspiredAnimation;
