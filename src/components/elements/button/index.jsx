import Link from 'next/link';

const ButtonLink = ({
	bgcolor,
	textcolor,
	children,
	className,
	url,
	...props
}) => {
	return (
		<Link href={`${url}`}>
			<a
				className={`${textcolor} ${bgcolor}  py-2 px-5 font-extrabold text-xl border-2 border-purppe rounded ${className}`}
			>
				{children || new Error('Children is not associate')}
			</a>
		</Link>
	);
};

const ButtonSubmit = ({
	formMethod = 'POST',
	formAction = '/',
	children,
	...props
}) => {
	return (
		<button
			className={
				'w-full block text-center border-none py-2.5 px-5 font-extrabold text-xl rounded bg-tp-green text-tp-white'
			}
			formAction={formAction}
			formMethod={formMethod}
			type={'submit'}
		>
			{children}
		</button>
	);
};

const Button = ({
	bgColor = 'bg-tp-purppe',
	textColor = 'text-tp-yellow',
	className = '',
	...props
}) => {
	return (
		<button
			className={` ${bgColor} ${textColor} p-2 rounded-sm text-lg ${className}`}
		>
			Quero rastrear
		</button>
	);
};

export { ButtonLink, ButtonSubmit, Button };
