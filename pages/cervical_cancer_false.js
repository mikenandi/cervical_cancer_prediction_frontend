import Head from "next";

const About = () => {
	return (
		<div className='h-screen flex justify-center items-center bg-green-300'>
			<div className='text-pink-700 font-semibold text-2xl leading-normal font p-14 w-96 h-96 border-2 rounded-xl bg-white flex flex-col justify-center items-center'>
				Prediction for your cervical cancer test is false.
			</div>
		</div>
	);
};
export default About;
