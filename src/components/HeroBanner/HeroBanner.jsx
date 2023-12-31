import RocketImage from '../../assets/rocket.png';


function HeroBanner() {
	return (
		<div className='grid max-w-screen-xl px-4 md:px-10 py-4 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 mt-10 '>
			<div className='mr-auto place-self-center lg:col-span-7'>
				<h1 className='max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white'>
					SpaceX Capsules Diary
				</h1>
				<p className='max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400'>
					Explore SpaceX capsules: Your Gateway to the stars. Discover and interact with iconic capsules from spaceX through our captivating app and API integration. Embark on a cosmic journey like never before. 
				</p>
			</div>
			<div className='hidden lg:mt-0 lg:col-span-5 lg:flex'>
				<img src={RocketImage} alt='Rocket' />
			</div>
		</div>
	);
}

export default HeroBanner;
