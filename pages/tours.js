import Head from "next/head"
import {useState, useEffect} from "react"
import Tours from "../components/Tours.js"
import Loading from "../components/loading"

const url = "https://course-api.com/react-tours-project"

const Tourz = () => {
	const [loading, setloading] = useState(true)
	const [tours, settours] = useState([])

	const removeTour = (id) => {
		const newtours = tours.filter((tour) => tour.id !== id)
		settours(newtours)
	}

	const fetchtours = async () => {
		try {
			const res = await fetch(url)
			const tours = await res.json()
			setloading(false)
			settours(tours)
		} catch (error) {
			setloading(false)
			console.log(error)
		}
	}
	useEffect(() => {
		fetchtours()
	}, [])

	if (loading) {
		return (
			<div className='h-screen bg-white flex justify-center items-center'>
				<Loading />
			</div>
		)
	}
	if (tours.length === 0) {
		return (
			<div className=''>
				<Head>
					<title>React plus tailwindcss Projects</title>
				</Head>
				<div className='mt-52 flex justify-center items-center'>
					<button
						onClick={() => fetchtours()}
						className='bg-blue-500 hover:bg-blue-700 text-xl text-white font-semibold h-auto w-auto rounded-full px-3 py-1 '>
						Referesh
					</button>
				</div>
			</div>
		)
	}

	return (
		<div>
			<Head>
				<title>React plus tailwindcss Projects</title>
			</Head>
			<div className='h-auto w-full bg-green-200 flex flex-col justify-center items-center'>
				<Tours tours={tours} removeTour={removeTour} />
			</div>
		</div>
	)
}
export default Tourz
