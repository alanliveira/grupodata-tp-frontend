import SVGDeliveries from '../../../public/assets/deliveries.svg';
import { Button } from '../../elements/button';
import { SubTitle, Title } from '../../elements/headers';

const SectionHomeBanner = () => {
	return (
		<header className={'xl:h-screen xl:py-0 bg-tp-white py-32'}>
			<div
				className={
					'container m-auto xl:grid xl:grid-cols-2 gap-1 xl:h-full flex flex-col-reverse items-center '
				}
			>
				<div className={'flex flex-col justify-center gap-2 '}>
					<Title className={'text-tp-purppe xl:text-left text-center'}>
						transporta
					</Title>
					<SubTitle
						className={
							'text-red-rose text-3xl text-tp-purppe xl:text-left text-center'
						}
					>
						Qualquer coisa em qualquer lugar sem burocracia
					</SubTitle>
					<div className={'xl:grid xl:grid-cols-2 gap-3 flex flex-col'}>
						<Button>Quero enviar pacote</Button>
						<Button>Quero Rastrear</Button>
					</div>
				</div>
				<div className={'flex flex-col justify-center  items-end'}>
					<SVGDeliveries icon={true} />
				</div>
			</div>
		</header>
	);
};

export { SectionHomeBanner };
