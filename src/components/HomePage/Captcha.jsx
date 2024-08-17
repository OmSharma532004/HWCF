import React, { useState, useEffect, useRef } from 'react';

const Captcha = ({ onChange }) => {
  const [captchaText, setCaptchaText] = useState('');
  const canvasRef = useRef(null);

  const generateCaptchaText = () => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let text = '';
    for (let i = 0; i < 6; i++) {
      text += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return text;
  };

  const drawCaptcha = (text) => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    // Clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Background color
    ctx.fillStyle = '#f2f2f2';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Text color and font
    ctx.font = '28px Arial';
    ctx.fillStyle = '#000';
    ctx.setTransform(1, Math.random() * 0.2, Math.random() * 0.2, 1, 0, 0);

    // Draw the text
    ctx.fillText(text, 10, 30);

    // Add some random lines for distraction
    for (let i = 0; i < 5; i++) {
      ctx.strokeStyle = `rgba(0, 0, 0, ${Math.random()})`;
      ctx.beginPath();
      ctx.moveTo(Math.random() * canvas.width, Math.random() * canvas.height);
      ctx.lineTo(Math.random() * canvas.width, Math.random() * canvas.height);
      ctx.stroke();
    }
  };

  useEffect(() => {
    const newCaptchaText = generateCaptchaText();
    setCaptchaText(newCaptchaText);
    drawCaptcha(newCaptchaText);
  }, []);

  return (
    <div>
      <canvas ref={canvasRef} width="200" height="50"></canvas>
      <button onClick={() => {
        const newCaptchaText = generateCaptchaText();
        setCaptchaText(newCaptchaText);
        drawCaptcha(newCaptchaText);
      }}>
        Refresh Captcha
      </button>
      <input
        type="text"
        placeholder="Enter the text"
        onChange={(e) => onChange(e.target.value, captchaText)}
      />
    </div>
  );
};

export default Captcha;
