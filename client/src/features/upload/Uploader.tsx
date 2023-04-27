import { Input, Typography } from '@mui/material';

export default function Uploader() {
	const uploadFile = (e: any) => {
		e.preventDefault();
		const formData = new FormData();
		formData.append('file', e.target.files[0]);
		fetch('http://localhost:8080/api/file/upload', {
			method: 'post',
			body: formData,
		}).then((res) => {
			alert('Upload successfully!');
		});
	};

	return (
		<>
			<Typography variant="h2">Uploader Page</Typography>
			<Input type="file" onChange={uploadFile} />
		</>
	);
}
