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
			try {
				const response = axios.post('http://localhost:3001/api/v1/trackings', {
					codigo,
					descricao,
					statuses_attributes: historicos,
				});
				if (await response) {
					return await response;
					setSave(true);
				}
			} catch (error) {
				throw 'Erro ao salvar os dados';
				setSave(false);
			}
		} else {
			throw 'dados inválidos';
			setSave(false);
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
