import Tour from "./Tour"

const Tours = ({tours, removeTour}) => {
	return (
		<div className='mt-3 bg-green-200 flex flex-col items-center justify center h-auto w-3/6'>
			<div className='capitalize border-b-2 border-white text-3xl text-gray-800 font-extrabold'>
				<h1>our tours</h1>
			</div>
			<div className='m-5 h-auto w-full flex flex-col justify-center items-center'>
				{tours.map((tour) => {
					return <Tour key={tour.id} {...tour} removeTour={removeTour} />
				})}
			</div>
		</div>
	)
}
export default Tours
