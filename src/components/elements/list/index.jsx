const ListUnOrder = ({ children }) => {
	return (
		<div className={'mx-2'}>
			<ul className={'flex flex-row'}>{children}</ul>
		</div>
	);
};

const ListItem = ({ idSectionPage = '#', children, ...props }) => {
	return (
		<li>
			<a href={`#${idSectionPage}`} className={'px-3 text-lg rounded'}>
				{children}
			</a>
		</li>
	);
};

export { ListUnOrder, ListItem };
