import { Button } from '../../components/elements/button';
import { SubTitle, Title } from '../../components/elements/headers';
import { Input } from '../../components/elements/input';
import { FooterPage } from '../../components/sections/footer';
import { NavPageMenu } from '../../components/sections/menu';

import SVGSend from '../../public/assets/moving_re_pipp.svg';
import SVGRouter from '../../public/assets/on_the_way_re_swjt.svg';
import SVGDelivery from '../../public/assets/package_arrived_63rf.svg';
import SVGFinish from '../../public/assets/finish_line_katerina_limpitsouni_xy20.svg';

import useRastreios from '../../hooks/useRastreios';

export default function Rastrear() {
	const {
		codigo,
		setCodigo,
		historicos,
		loading,
		findCodigo,
		saveHistorico,
		descricao,
		setDescricao,
		save,
	} = useRastreios();

	const handleButtonSaveRastreio = async (e) => {
		try {
			const response = await saveHistorico();
			alert('dados salvos com sucesso');
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<div className={'flex flex-col h-screen'}>
			<NavPageMenu enableList={false} />
			{save === false ? (
				<main className={'flex-grow flex flex-col items-center'}>
					<section className={'h-full w-full'}>
						<div
							className={'container m-auto py-32 flex flex-col h-full gap-3'}
						>
							<div>
								<SubTitle className={'lg:mx-52'}>
									Rastreando encomendas
								</SubTitle>
							</div>
							<div className={'flex justify-between lg:mx-52'}>
								<Input
									type={'text'}
									name={'codigorastreio'}
									value={codigo}
									onChange={(e) => setCodigo(e.target.value)}
									placeholder={'Digite o seu código'}
									className={'flex-grow'}
								/>
								<Button type={'button'} onClick={findCodigo}>
									procurar
								</Button>
							</div>
							{historicos.length === 0 && !loading && (
								<span className={'flex justify-center items-center h-full'}>
									<SubTitle>Nenhum resultado encontrado</SubTitle>
								</span>
							)}
							{!loading ? (
								<div className={' lg:mx-52 '}>
									<ul className={'flex flex-col gap-5'}>
										{historicos.map((historico, index) => {
											return (
												<li
													key={index}
													className={
														'border-2 rounded-sm p-3 flex gap-2 items-center'
													}
												>
													<div
														style={{ width: 140, height: 67 }}
														className={'flex justify-center items-center'}
													>
														{index === 0 ? (
															<SVGSend
																width={140}
																height={67}
																className={'object-contain block'}
															/>
														) : index !== historicos.length - 1 ? (
															<SVGRouter />
														) : (
															<SVGDelivery />
														)}
													</div>
													<div>
														<p>{historico.status}</p>
														<p>data: {historico.data}</p>
														<p>hora: {historico.hora}</p>
														{historico.destino && (
															<p>Destinho: {historico.destino}</p>
														)}
														{historico.origem && (
															<p>Origem: {historico.origem}</p>
														)}
														{historico.local && <p>Local: {historico.local}</p>}
													</div>
												</li>
											);
										})}
									</ul>
								</div>
							) : (
								<span className={'flex justify-center items-center h-full'}>
									<SubTitle>Carregando</SubTitle>
								</span>
							)}
							{historicos.length !== 0 && !loading && (
								<div className={'lg:mx-52 flex flex-col gap-2 mt-3'}>
									<SubTitle>Quer salvar essas informações</SubTitle>
									<Input
										placeholder="coloque uma descrição"
										value={descricao}
										onChange={(e) => setDescricao(e.target.value)}
									/>
									<Button
										bgColor={'bg-tp-green'}
										textColor={'text-tp-white'}
										className={'w-full'}
										onClick={handleButtonSaveRastreio}
									>
										Salvar os dados
									</Button>
								</div>
							)}
						</div>
					</section>
				</main>
			) : (
				<main className={'flex-grow flex flex-col items-center'}>
					<section className={'h-full w-full'}>
						<div
							className={
								'container m-auto py-32 flex flex-col h-full justify-center items-center gap-5'
							}
						>
							<SVGFinish />
							<SubTitle>Dados salvos com sucesso</SubTitle>
						</div>
					</section>
				</main>
			)}
			<FooterPage />
		</div>
	);
}
