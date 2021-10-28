const Paragraph = ({ children, className, ...props }) => {
	return <p className={className}>{children}</p>;
};

export { Paragraph };
