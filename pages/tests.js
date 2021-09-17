import Head from "next/head";
import data from "../components/data";
import questions from "../components/cervical_cancer_tests_qns";
import List from "../components/List";
import {useEffect, useState} from "react";
import RadioQn from "../components/radio_qn";
import TextQn from "../components/text_qns";
import axios from "axios";
import {useRouter} from "next/router";
const CervicalTests = () => {
	const [answer, setanswer] = useState([]);
	const router = useRouter();

	const handleChange = (e) => {
		const name = e.target.name;
		const value = e.target.value;
		setanswer({...answer, [name]: value});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(answer);
		axios({
			method: "post",
			url: "http://localhost:4000/test_predictions",
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
			},
			data: {
				age: answer.age,
				alcohol: answer.alcohol,
				children: answer.children,
				family_history: answer.family_history,
				gender: answer.gender,
				height: answer.height,
				smokes: answer.smokes,
				temperature: answer.temperature,
				weight: answer.weight,
				region: answer.region,
				symptomDuration: answer.symptomDuration,
				baso: answer.baso,
				eos: answer.eos,
				hb: answer.hb,
				lymphocyte: answer.lymphocyte,
				mch: answer.mch,
				mcv: answer.mcv,
				neutrophil: answer.neutrophil,
				plt: answer.plt,
				rbc: answer.rbc,
				hiv: answer.hiv,
				bilirubin: answer.bilirubin,
				creatinine: answer.creatinine,
				epithelial: answer.epithelial,
				ph: answer.ph,
				protein: answer.protein,
				urea: answer.urea,
				uric_acid: answer.uric_acid,
				chest_xray: answer.chest_xray,
				ultrasound: answer.ultrasound,
				abdominal_pain: answer.abdominal_pain,
				prolonged_vaginal_bleeding: answer.prolonged_vaginal_bleeding,
				back_pain: answer.back_pain,
				nausea: answer.nausea,
				vaginal_discharge: answer.vaginal_discharge,
				pain_during_sexual_intercourse: answer.pain_during_sexual_intercourse,
				abnormal_bleeding: answer.abnormal_bleeding,
				lower_abdominal_pain: answer.lower_abdominal_pain,
				post_menopausal_bleeding: answer.post_menopausal_bleeding,
				prolonged_vaginal_watery_discharge: answer.prolonged_vaginal_bleeding,
				difficulty_passing_sto: answer.difficulty_passing_stool,
				cough: answer.cough,
				fever: answer.fever,
				lower_back_pain: answer.lower_back_pain,
				frequent_micturation: answer.frequent_micturation,
				waist_pain: answer.waist_pain,
				difficulty_micturation: answer.difficulty_micturation,
				chest_pain: answer.chest_pain,
				lower_lumbs_swelling: answer.lower_limbs_swelling,
				vomiting: answer.vomiting,
				pelvic_pain: answer.pelvic_pain,
				swelling: answer.swelling,
				foul_smelling_discharge: answer.foul_smelling_discharge,
				fatigue: answer.fatigue,
				weight_loss: answer.weight_loss,
				post_coital_bleeding: answer.post_coital_bleeding,
				rectal_bleeding: answer.rectal_bleeding,
				constipation: 0,
				lower_limbs_swelling: 0,
				occasional_painful_defecation: 0,
				difficulty_in_breathing: answer.difficulty_in_breathing,
				pervic_pain: answer.pervic_pain,
				blood_in_urine: answer.blood_in_urine,
				headache: answer.headache,
				polpitations: answer.polpitations,
				yellowish_vaginal_discharge: answer.yellowish_vaginal_discharge,
				palpitations: answer.palpitations,
				vulva_itching: answer.vulva_itching,
				vaginal_pain: answer.vaginal_pain,
				spot_bleeding: answer.spot_bleeding,
				metromenorrhagia: answer.metromenorrhagia,
			},
		})
			.then((res) => {
				if (res.status === 200 && res.data.cervical_cancer === false)
					router.push("/cervical_cancer_false");
				else router.push("/cervical_cancer_true");
			})
			.catch((err) => console.log(err));
	};
	useEffect(() => {
		handleChange;
	}, []);
	return (
		<div>
			<Head>
				<title>Base10 - cervical cancer risk factors prediction</title>
			</Head>
			<div className='bg-green-100 h-full flex justify-center items-center flex-col w-12/12'>
				<div className='sm:w-3/5 m-2 border rounded-xl bg-white flex flex-col items-center p-8 w-3/5'>
					<h1 className='text-gray-700 font-semibold text-5xl'>Base10 </h1>

					<p className='m-1 text-xl text-pink-600 font-serif font-semibold'>
						We are using machine learning to predict cervical cancer tests which
						are done in hospitals.
					</p>
				</div>

				<form action='' method='post' className='w-6/12 sm:w-6/12'>
					{questions.map((question) => {
						if (question.qn_type === "text") {
							return (
								<TextQn
									qn={question.qn}
									name={question.name}
									handleChange={handleChange}
									answer={answer}
								/>
							);
						}
						return (
							<RadioQn
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
export default CervicalTests;
