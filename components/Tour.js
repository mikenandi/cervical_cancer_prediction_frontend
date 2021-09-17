import {useState} from "react"
const Tour = ({id, image, info, price, name, removeTour}) => {
	const [readmore, setreadmore] = useState(false)
	return (
		<div className='h-auto w-full mt-3 border-2 shodow-xl rounded-md flex flex-col bg-white'>
			<img src={image} alt='image' className='h-96 w-full' />
			<footer className='flex flex-col justify-center'>
				<div className='flex flex-row justify-between '>
					<h1 className='text-lg text-black font-semibold p-4 '>{name}</h1>
					<div className='font-semibold text-white bg-green-400 h-auto w-20 rounded-md py-2 px-4 m-4'>
						${price}
					</div>
				</div>
				<p className='px-2 text-gray-600'>
					{readmore ? info : `${info.substring(0, 200)}...`}
					<button
						className='font-semibold pl-2 '
						onClick={() => setreadmore(!readmore)}>
						{readmore ? "Less" : "More"}
					</button>
				</p>
				<div className='flex justify-center items-center p-2'>
					<button
						onClick={() => removeTour(id)}
						className=' px-4 py-2 rounded-md h-auto w-40 bg-red-500 hover:bg-red-700 text-white font-semibold capitalize text-lg'>
						not interested
					</button>
				</div>
			</footer>
		</div>
	)
}
export default Tour
