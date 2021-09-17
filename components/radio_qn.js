const RadioQn = ({id, qn, name, handleChange}) => {
	return (
		<div className='' key={id}>
			<div className='m-2 border rounded-xl bg-white flex flex-col p-10 w-full'>
				<label
					htmlFor=''
					className='text-normal lowercase text-gray-900 font-semibold'>
					{qn}
				</label>
				<div className='flex flex-row'>
					<input
						type='radio'
						name={name}
						value={1}
						onChange={handleChange}
						className='mt-2 hover:bg-gray-100 border-b-2 rounded'
					/>
					<label htmlFor='' className='ml-2'>
						yes
					</label>
				</div>

				<div className='flex flex-row'>
					<input
						type='radio'
						name={name}
						value={0}
						onChange={handleChange}
						className='mt-2 hover:bg-gray-100 border-b-2 rounded'
					/>
					<label htmlFor='' className='ml-2'>
						no
					</label>
				</div>
			</div>
		</div>
	);
};

export default RadioQn;
