async function check() {
  console.log('--- Testing Imports for Home.jsx ---');

  const reactParallaxTilt = await import('react-parallax-tilt');
  console.log('react-parallax-tilt:', reactParallaxTilt);
  console.log('react-parallax-tilt default:', typeof reactParallaxTilt.default);

  const reactCountup = await import('react-countup');
  console.log('react-countup:', reactCountup);
  console.log('react-countup default:', typeof reactCountup.default);

  const swiperReact = await import('swiper/react');
  console.log('swiper/react Swiper:', typeof swiperReact.Swiper);
  console.log('swiper/react SwiperSlide:', typeof swiperReact.SwiperSlide);

  const framerMotion = await import('framer-motion');
  console.log('framer-motion motion:', typeof framerMotion.motion);

  const reactRouterDom = await import('react-router-dom');
  console.log('react-router-dom Link:', typeof reactRouterDom.Link);

  const reactIntersectionObserver = await import('react-intersection-observer');
  console.log('react-intersection-observer useInView:', typeof reactIntersectionObserver.useInView);
}

check().catch(console.error);
