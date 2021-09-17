import Head from "next/head"
import {useState} from "react"
import data from "../components/dataAccordion"
import SingleQn from "../components/singleQn"

const Accordion = () => {
	const [qns, setqns] = useState(data)
	return (
		<div className=''>
			<Head>
				<title>Q&A for all of your log in questions</title>
			</Head>
			<div className='flex flex-col  h-screen bg-green-400'>
				<h1>Qustions and answers about log in</h1>
				<div className=''>
					{qns.map((qn) => {
						return <SingleQn key={qn.id} {...qn} />
					})}
				</div>
			</div>
		</div>
	)
}
export default Accordion
