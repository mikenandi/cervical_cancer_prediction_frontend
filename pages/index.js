import Head from "next/head";
import questions from "../components/risk_factors_qns";
import {useEffect, useState} from "react";
import RadioQn from "../components/radio_qn";
import TextQn from "../components/text_qns";
import axios from "axios";
import {useRouter} from "next/router";
const Home = () => {
	const router = useRouter();
	const [answer, setanswer] = useState([]);

	const handleChange = (e) => {
		const name = e.target.name;
		const value = e.target.value;
		setanswer({...answer, [name]: value});
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		axios({
			method: "post",
			url: "http://localhost:8000/predictions",
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
			},
			data: {
				age: answer.age,
				number_of_sexual_partners: answer.number_of_sexual_partners,
				first_sexual_intercourse: answer.first_sexual_intercourse,
				num_of_pregnancies: answer.num_of_pregnancies,
				smokes: answer.smokes,
				smokes_years: answer.smokes_years,
				smokes_packs_per_year: answer.smokes_packs_per_year,
				hormonal_contraceptives: answer.hormonal_contraceptives,
				hormonal_contraceptives_years: answer.hormonal_contraceptives,
				iud: answer.iud,
				iud_years: answer.iud_years,
				stds: answer.stds,
				stds_number: answer.stds_number,
				stds_condylomatosis: answer.stds_condylomatosis,
				stds_cervical_condylomatosis: answer.stds_cervical_condylomatosis,
				stds_vaginal_condylomatosis: answer.stds_vaginal_condylomatosis,
				stds_vulvo_perineal_condylomatosis:
					answer.stds_vulvo_perineal_condylomatosis,
				stds_syphilis: answer.stds_syphilis,
				stds_pelvic_inflammatory_disease:
					answer.stds_pelvic_inflammatory_disease,
				stds_genital_herpes: answer.stds_genital_herpes,
				stds_molluscum_contagiosum: answer.stds_molluscum_contagiosum,
				stds_aids: answer.stds_aids,
				stds_hiv: answer.stds_hiv,
				stds_hepatitis_b: answer.stds_hepatitis_b,
				stds_hpv: answer.stds_hpv,
				dx_cancer: answer.dx_cancer,
				stds_number_of_diagnosis: answer.stds_number_of_diagnosis,
				dx_cin: answer.dx_cin,
				dx_hpv: answer.dx_hpv,
				dx: answer.dx,
				hinselmann: answer.hinselman,
				schiller: answer.schiller,
				citology: answer.citology,
			},
		})
			.then((res) => {
				if (res.status === 200 && res.data.biopsy === true)
					router.push("/biopsy_true");
				else router.push("/biopsy_false");
			})
			.catch((err) => console.log(err.code));

		console.log(answer);
	};
	useEffect(() => {
		handleChange;
	}, []);

	return (
		<div>
			<Head>
				<title>Base10 - cervical cancer risk factors prediction</title>
			</Head>
			<div className='bg-green-100 h-full flex flex-col items-center w-12/12'>
				<div className='sm:w-3/5 m-2 border rounded-xl bg-white flex flex-col items-center p-8 w-3/5'>
					<h1 className='text-gray-900 font-semibold text-5xl'>Base10 </h1>

					<p className='m-1 text-xl text-pink-600 font-serif font-semibold'>
						We are using machine learning to predict the risk of a person to get
						cervical cancer by using biopsy test.
					</p>
				</div>

				<form action='' method='post' className='w-6/12 sm:w-6/12'>
					{questions.map((question) => {
						if (question.qn_type === "text") {
							return (
								<TextQn
									id={question.id}
									qn={question.qn}
									name={question.name}
									handleChange={handleChange}
									answer={answer}
								/>
							);
						}
						return (
							<RadioQn
								id={question.id}
								qn={question.qn}
								name={question.name}
								handleChange={handleChange}
								answer={answer}
							/>
						);
					})}

					<button
						han
						type='submit'
						className='bg-pink-700 px-8 py-3 m-4 border-2 border-pink-400 rounded-xl text-gray-100 font-semibold'
						onClick={handleSubmit}>
						Send
					</button>
				</form>
			</div>
		</div>
	);
};
export default Home;
