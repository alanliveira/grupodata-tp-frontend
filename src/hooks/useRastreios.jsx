import axios from 'axios';
import { useState } from 'react';

export default function useRastreios() {
	const [codigo, setCodigo] = useState('');
	const [descricao, setDescricao] = useState('');
	const [historicos, setHistoricos] = useState([]);
	const [loading, setLoading] = useState(false);
	const [save, setSave] = useState(false);

	const findCodigo = async () => {
		setLoading(true);
		try {
			const { data } = await axios.get(
				`http://localhost:3000/api/v1/rastreios/${codigo}`
			);
			setHistoricos(data.code);
			setLoading(false);
		} catch (error) {
			setHistoricos([]);
			setLoading(false);
		}
	};

	const saveHistorico = async () => {
		if (codigo !== '' && codigo.length === 13) {
			setLoading(true);
			try {
				const response = axios.post('http://localhost:3001/api/v1/trackings', {
					codigo,
					descricao,
					statuses_attributes: historicos,
				});
				if (await response) {
					setSave(true);
					setLoading(false);
					return await response;
				}
			} catch (error) {
				setSave(false);
				setLoading(false);
				throw 'Erro ao salvar os dados';
			}
		} else {
			setSave(false);
			setLoading(false);
			throw 'dados inválidos';
		}
	};
	return {
		codigo,
		setCodigo,
		historicos,
		loading,
		findCodigo,
		saveHistorico,
		descricao,
		setDescricao,
		save,
		setSave,
	};
}
