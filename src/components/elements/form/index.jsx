const Form = ({ children, className, ...props }) => {
	return (
		<form className={`w-full flex flex-col gap-2 ${className}`}>
			{children}
		</form>
	);
};

export { Form };
