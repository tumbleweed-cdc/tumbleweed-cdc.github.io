// import { useEffect, useRef } from 'react';
// import './CursorGif.css'; // Import your CSS file

// const CursorGif = () => {
//     const cursorGifRef = useRef(null);

//     useEffect(() => {
//         const handleMouseMove = (event) => {
//             if (cursorGifRef.current) {
//                 cursorGifRef.current.style.transform = `translate(${event.clientX}px, ${event.clientY}px)`;
//             }
//         };

//         // Add mousemove event listener
//         document.addEventListener('mousemove', handleMouseMove);

//         // Cleanup the event listener on component unmount
//         return () => {
//             document.removeEventListener('mousemove', handleMouseMove);
//         };
//     }, []);

//     return (
//         <img
//             ref={cursorGifRef}
//             src="../../img/tumbleweed_2.gif" // Replace with your GIF path
//             alt="Cursor GIF"
//             id="cursor-gif"
//             className="max-w-[32px]"
//         />
//     );
// };

// export default CursorGif;