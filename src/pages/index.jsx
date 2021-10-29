import Head from 'next/head';

import { NavPageMenu } from '../components/sections/menu';
import { SectionHomeEnvios } from '../components/sections/envios';
import { SectionHomeRastreios } from '../components/sections/rastreios';
import { SectionHomeTranspotter } from '../components/sections/transpotters';
import { SectionHomeBanner } from '../components/sections/banners';
import { FooterPage } from '../components/sections/footer';

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

			<NavPageMenu />
			<main>
				<SectionHomeBanner />
				<SectionHomeEnvios />
				<SectionHomeRastreios />
				<SectionHomeTranspotter />
			</main>
			<FooterPage />
		</div>
	);
}
