const TextQn = ({id, qn, name, handleChange, answer}) => {
	return (
		<div className='' key={id}>
			<div className='m-2 border rounded-xl bg-white flex flex-col p-10 w-full'>
				<label className='text-normal lowercase text-gray-900 font-semibold'>
					{qn}
				</label>
				<input
					name={name}
					type='text'
					className='mt-2 hover:bg-gray-100 border-b-2 rounded'
					onChange={handleChange}
					value={answer.name}
				/>
			</div>
		</div>
	);
};

export default TextQn;
