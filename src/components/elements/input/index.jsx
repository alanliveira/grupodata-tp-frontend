const Input = ({
	placeholder,
	className,
	id,
	name,
	type = 'text',
	...props
}) => {
	return (
		<input
			type={type}
			name={name}
			id={id}
			className={`w-full p-2 border-2 border-tp-purppe rounded-sm ${className}`}
			placeholder={placeholder}
			{...props}
		/>
	);
};

export { Input };
