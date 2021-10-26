import Head from 'next/head';

export default function Home() {
	return (
		<div className={''}>
			<Head>
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
				<link
					href="https://fonts.googleapis.com/css2?family=Red+Rose:wght@300;500;600;700&family=Righteous&display=swap"
					rel="stylesheet"
				/>
			</Head>
			<h1 className={'font-righteous text-7xl text-tp-purppe'}>transporta</h1>
		</div>
	);
}
