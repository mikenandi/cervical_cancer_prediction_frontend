const List = ({people}) => {
	return (
		<div>
			{people.map((person) => {
				const {id, name, age, image} = person
				return (
					<div
						key={id}
						className='mt-3 bg-white flex flex-row justify-start items-center'>
						<img
							src={image}
							alt='image'
							className='mr-3 rounded-full h-20 w-20'
						/>
						<div className=''>
							<h4 className='text-xl text-gray-700 font-semibold'>{name}</h4>
							<p className='text-sm text-red-400 font-semibold'>{age} years</p>
						</div>
					</div>
				)
			})}
		</div>
	)
}

export default List
