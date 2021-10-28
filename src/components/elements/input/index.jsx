const Input = ({ placeholder, id, name, type = 'text', ...props }) => {
	return (
		<input
			type={type}
			name={name}
			id={id}
			className={'w-full p-2 border-2 border-tp-purppe rounded-sm'}
			placeholder={placeholder}
		/>
	);
};

export { Input };
