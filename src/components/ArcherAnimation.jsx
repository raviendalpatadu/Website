import React, { useState, useEffect, useRef } from 'react';

const ArcherAnimation = () => {
  const [arrowPosition, setArrowPosition] = useState({ x: 50, y: 50 });
  const [isShooting, setIsShooting] = useState(false);
  const arrowRef = useRef(null);

  useEffect(() => {
    let animationFrameId;

    const animateArrow = () => {
      setArrowPosition((prevPosition) => ({
        x: prevPosition.x + 10,
        y: prevPosition.y,
      }));

      if (arrowRef.current && arrowPosition.x > window.innerWidth) {
        setIsShooting(false);
        setArrowPosition({ x: 50, y: 50 }); // Reset arrow
        cancelAnimationFrame(animationFrameId);
        return;
      }

      animationFrameId = requestAnimationFrame(animateArrow);
    };

    if (isShooting) {
      animateArrow();
    }

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [isShooting]);

  const handleShoot = () => {
    if (!isShooting) {
      setIsShooting(true);
    }
  };

  return (
    <div style={{ position: 'relative', height: '300px', border: '1px solid black' }}>
      <div
        style={{
          position: 'absolute',
          bottom: '20px',
          left: '20px',
          width: '50px',
          height: '100px',
          background: 'brown',
        }}
      >
        {/* Archer body */}
        <div style={{position: 'absolute', top: '-40px', left: '10px', width: '30px', height: '30px', borderRadius: '50%', background: 'lightBlue'}}></div>
        {/* Archer head */}
      </div>

      {isShooting && (
        <div
          ref={arrowRef}
          style={{
            position: 'absolute',
            left: `${arrowPosition.x}px`,
            top: `${arrowPosition.y}px`,
            width: '30px',
            height: '5px',
            background: 'black',
            transform: 'rotate(45deg)', // Arrow angle
          }}
        />
      )}

      <button onClick={handleShoot}>Shoot</button>
    </div>
  );
};

export default ArcherAnimation;