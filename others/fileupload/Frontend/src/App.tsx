import React, { useState } from "react";
import {
	Container,
	Row,
	Col,
	Form,
	Button,
	ProgressBar,
	Alert,
} from "react-bootstrap";
import Tests from "./Tests";
import axiosInstance from "./utils/axios";
// import fs from 'fs'

function App() {
	const [selectedFiles, setSelectedFiles] = useState([]);
	const [progress, setProgress] = useState<number>(0);
	const [error, setError] = useState<string>("");

	const submitHandler = (e: any) => {
		e.preventDefault(); //prevent the form from submitting
		let formData = new FormData();
		console.log(selectedFiles[0]);

		formData.append("file", selectedFiles[0]);
		//Clear the error message
		setError("");

		axiosInstance
			.post("/upload_file", formData, {
				headers: {
					"Content-Type": "multipart/form-data",
				},
				onUploadProgress: (data) => {
					//Set the progress value to show the progress bar
					setProgress(Math.round((100 * data.loaded) / data.total));
				},
			})
			.catch((error) => {
				console.log(error);

				const { code } = error?.response?.data;
				switch (code) {
					case "FILE_MISSING":
						setError("Please select a file before uploading!");
						break;
					case "LIMIT_FILE_SIZE":
						setError("File size is too large. Please upload files below 1MB!");
						break;
					case "INVALID_TYPE":
						setError(
							"This file type is not supported! Only .png, .jpg and .jpeg files are allowed"
						);
						break;

					default:
						setError("Sorry! Something went wrong. Please try again later");
						break;
				}
			});
	};

	React.useEffect(() => {
		const url = 'https://api-football-beta.p.rapidapi.com/venues?league=39';

const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '18cae65599mshc2ae603a38272a2p19e31djsn4718e8d63b0c',
    'X-RapidAPI-Host': 'api-football-beta.p.rapidapi.com'
  }
};

		fetch(
			url,
			options
		)
			.then((response) => response.json())
			.then((response) => {
        		localStorage.setItem("venues", JSON.stringify(response.response));
				console.log(response);
			})
			.catch((err) => console.error(err));
	}, []);

	return (
		<Container>
			<Tests />
			<Row>
				<Col lg={{ span: 4, offset: 3 }}>
					<Form
						action="http://localhost:8081/upload_file"
						method="post"
						encType="multipart/form-data"
						onSubmit={submitHandler}
					>
						<Form.Group>
							<input
								type="file"
								id="exampleFormControlFile1"
								name="file"
								onChange={(e: any) => {
									setSelectedFiles(e.target.files);
								}}
							/>
						</Form.Group>
						<Form.Group>
							<Button variant="info" type="submit">
								Upload
							</Button>
						</Form.Group>
						{error && <Alert variant="danger">{error}</Alert>}
						{!error && progress && (
							<ProgressBar now={progress} label={`${progress}%`} />
						)}
					</Form>
				</Col>
			</Row>
		</Container>
	);
}

export default App;
