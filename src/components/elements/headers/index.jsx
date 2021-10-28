const SubTitle = ({ children, className, ...props }) => {
	return (
		<h2 className={`font-righteous text-4xl font-black ${className}`}>
			{children}
		</h2>
	);
};

const Title = ({ children, className, ...props }) => {
	return (
		<h1 className={`font-righteous text-8xl font-black ${className}`}>
			{children}
		</h1>
	);
};

export { SubTitle, Title };
