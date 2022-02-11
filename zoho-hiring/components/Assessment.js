import React, { useState } from 'react';
import styles from "./Assessment.module.css";

import { isAutheticated } from './Auth/auth';
// import "bootstrap/dist/css/bootstrap.css";
import { useRouter } from "next/router";
import { Button } from "@mui/material";
import { URLS } from './Auth/const';

import axios from 'axios';


export default function Assessment() {
	const {accessToken} =isAutheticated();
    const router = useRouter();
	const questions = [
		{
			questionText: 'Which one of the following is the main memory?',
			answerOptions: [
				{ answerText: 'ROM', isCorrect: false },
				{ answerText: 'RAM', isCorrect: true },
				{ answerText: 'Flash driv', isCorrect: false },
				{ answerText: 'Hard disk', isCorrect: false },
			],
		},
		{
			questionText: 'Which generation of computer used ICs?',
			answerOptions: [
				{ answerText: 'First', isCorrect: false },
				{ answerText: 'Second', isCorrect: false },
				{ answerText: 'Third', isCorrect: true },
				{ answerText: 'Fourth', isCorrect: false },
			],
		},
		{
			questionText: 'Expand POST',
			answerOptions: [
				{ answerText: 'Post on self Test', isCorrect: false },
				{ answerText: 'Power on Software Test', isCorrect: false },
				{ answerText: 'Power on Self Test', isCorrect: true },
				{ answerText: 'Power on Self Text', isCorrect: false },
			],
		},
		{
			questionText: 'When a system restarts ……………….. which type of booting is used.',
			answerOptions: [
				{ answerText: 'Warm booting', isCorrect: true },
				{ answerText: 'Cold booting', isCorrect: false },
				{ answerText: 'Touch boot', isCorrect: false },
				{ answerText: 'Real boot', isCorrect: false },
			],
		},
        {
			questionText: 'Identify the input device',
			answerOptions: [
				{ answerText: 'Printer', isCorrect: false },
				{ answerText: 'Mouse', isCorrect: true },
				{ answerText: 'Plotter', isCorrect: false },
				{ answerText: 'Projector', isCorrect: false },
			],
		},
	];

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);
	const [cdata,setCmail]=useState()
	
	

	const handleAnswerOptionClick = (isCorrect) => {
		const id = JSON.parse(localStorage.getItem("Cids"));


		axios.get(`${URLS}/api/candidate/${id.csi}`,{ headers: {"Authorization" : `Bearer ${accessToken}`}})
	.then((datas)=>{

		setCmail(datas.data.email);

	})
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
			if(score>=4){
				const status ={
					status:"pass"
				}
				
				console.log(id)

				
				axios.put(`${URLS}/api/assessment/${id.asi}`,status,{ headers: {"Authorization" : `Bearer ${accessToken}`}}).then(()=>{
					
					axios.get(`${URLS}/api/candidate/${id.csi}`,{ headers: {"Authorization" : `Bearer ${accessToken}`}}).then((datas)=>{	
						const email = 
						{
							"to":`${datas.data.email}`,
							"body":` Dear ${datas.data.firstName} ${datas.data.lastName}

						   You Will Get Meet Link Soon for HR round..
			  
					        All the Best, Thank You 
					      `,
						 
						  "sub":"Congratulations! Got Selected"
					  }
					  console.log(email)
			  
					  axios.post(`${URLS}/email`,email,{ headers: {"Authorization" : `Bearer ${accessToken}`}})
					  .then(()=>{
						alert("email sent Succesfully");
					  })
					  .catch(()=>{
						alert("Failed to send");
					  })
					})

				})
				
				
			}
			if(score<4){
				const status ={
					status:"fail"
				}
				const id = JSON.parse(localStorage.getItem("Cids"));
				console.log(id)

				
				axios.put(`${URLS}/api/assessment/${id.asi}`,status,{ headers: {"Authorization" : `Bearer ${accessToken}`}}).then(()=>{
					
					axios.get(`${URLS}/api/candidate/${id.csi}`,{ headers: {"Authorization" : `Bearer ${accessToken}`}}).then((datas)=>{
						const email = 
						{
						  "to":`${datas.data.email}`,
						  "body":` Dear ${datas.data.firstName} ${datas.data.lastName}

						   Thank you for your presence ,
						   Unfortunatly you are not cleared your exam
					      `,
						 
						  "sub":"Sorry! Bye"
					  }
					  
			  
					  axios.post(`${URLS}/email`,email,{ headers: {"Authorization" : `Bearer ${accessToken}`}})
					  .then(()=>{
						alert("email sent Succesfully");
					  })
					  .catch(()=>{
						alert("Failed to send");
					  })
					})
					})


			}
		}
	};
	return (
			<>
			<head>
                <title>Assessment - Hiring Software</title>
            </head>
        <div style={{display:'flex',justifyContent:'center',alignItems:'center',minHeight:'100vh',backgroundColor:'blue'}}>
		<div className={styles.app}>
			{showScore ? (
				<div className={styles.score_section}>
					your result will be published soon!<br/>
                    Thank you :)<br/>
                    <Button style={{display:'flex',justifyContent:'center',alignItems:'center',textTransform:'capitalize',backgroundColor:'#ff9900',color:'#ffffff',padding:'2px 20px',borderRadius:'6px'}} onClick={() => { router.push('/') }}>close</Button>
				</div>
			) : (
				<>
					<div className={styles.question_section}>
						<div className={styles.question_count}>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className={styles.question_text}>{questions[currentQuestion].questionText}</div>
					</div>
					<div className={styles.answer_section}>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<Button style={{borderWidth:'5px',textTransform:'capitalize',backgroundColor:'#0080ff',color:'#ffffff',padding:'2px 20px',borderRadius:'6px'}} onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</Button>
						))}
					</div>
				</>
			)}
		</div>
        <div>
            
        </div>
        </div>
		</>
	);
}
