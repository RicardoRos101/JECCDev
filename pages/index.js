// import { useState } from 'react';
// import Head from 'next/head';
// import styles from '../styles/Home.module.css'; 

import { useEffect } from 'react';
import { testConnection } from '../lib/db';

export default function Home() {
  // const [idNumber, setIdNumber] = useState('');
  // const [voter, setVoter] = useState(null);
  // const [modalMessage, setModalMessage] = useState(null);

  // const handleQuery = async (event) => {
  //   event.preventDefault();
  //   try {
  //     const response = await fetch(`/pages/api/voters/${idNumber}`);
  //     if (!response.ok) {
  //       if (response.status === 404) {
  //         setModalMessage('No voter found with that ID Number.');
  //       } else {
  //         setModalMessage(`Error: ${response.status} ${response.statusText}`);
  //       }
  //       return;
  //     }
  //     const foundVoter = await response.json();

  //     if (foundVoter) {
  //       setVoter({
  //         ...foundVoter,
  //         time: new Date().toLocaleTimeString(),
  //         area: "Table 12, Example School",
  //       });
  //     }
  //   } catch (error) {
  //     console.error('Failed to fetch voter:', error);
  //     setModalMessage('An error occurred while trying to fetch voter data. Please try again.');
  //   }
  // };

  // const handleSave = async () => {
  //   if (voter) {
  //     try {
  //       const response = await fetch('/api/voters', {
  //         method: 'PUT',
  //         headers: {
  //           'Content-Type': 'application/json',
  //         },
  //         body: JSON.stringify({ idVoters: voter.idVoters, status: "CHECKED" }),
  //       });

  //       if (!response.ok) {
  //         throw new Error('Failed to update voter status.');
  //       }

  //       const result = await response.json();
  //       if (result.message) {
  //         setModalMessage('Voter status updated successfully.');
  //         resetForm();
  //       }
  //     } catch (error) {
  //       console.error('Error while updating status:', error);
  //       setModalMessage('There was an error updating the status. Please try again.');
  //     }
  //   } else {
  //     setModalMessage('Please confirm the entry.');
  //   }
  // };

  // const resetForm = () => {
  //   setIdNumber('');
  //   setVoter(null);
  //   setModalMessage(null);
  // };

  // const closeModal = () => {
  //   setModalMessage(null);
  // }

  // return (
  //   <div className={styles.body}>
  //     <div className={styles.layout}>
  //       <div className={styles.mainContent}>
  //         <div className={styles.container}>
  //           <Head>
  //             <title>Entry Confirmation (ID)</title>
  //             <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  //           </Head>
            
  //           {/* Reset Button in the top-left corner */}
  //           <button className={styles.resetButton} onClick={resetForm}>Reset</button>

  //           <h1 className={styles.h1}>Entry Confirmation (ID)</h1>

  //           <form className={styles.form} id="query-form" onSubmit={handleQuery}>
  //             <label className={styles.label} htmlFor="idNumber">ID Number:</label>
  //             <input
  //               type="number"
  //               id="idNumber"
  //               name="idNumber"
  //               required
  //               className={styles.input}
  //               value={idNumber}
  //               onChange={(e) => setIdNumber(e.target.value)}
  //             />
  //             <button className={styles.button} type="submit">Query</button>
  //           </form>

  //           {voter && (
  //             <div id="result">
  //               <h2>Voter Information</h2>
  //               <p><strong>Name:</strong> <span>{voter.name}</span></p>
  //               <p><strong>Last Name:</strong> <span>{voter.lastName}</span></p>
  //               <p><strong>Location:</strong> <span>{voter.location}</span></p>
  //               <p><strong>Political Party:</strong> <span>{voter.party}</span></p>
  //               <p><strong>Phone:</strong> <span>{voter.phone}</span></p>
  //               <p><strong>Status:</strong> <span>{voter.status ? 'CHECKED' : 'NOT CHECKED'}</span></p>

  //               <p id="entry-time"><strong>Entry Time:</strong> <span>{voter.time}</span></p>
  //               <p id="geographical-area"><strong>Geographical Area/Table:</strong> <span>{voter.area}</span></p>

  //               <button className={styles.button} type="button" onClick={handleSave}>Save</button>
  //             </div>
  //           )}

  //           {modalMessage && (
  //             <div className={styles.modalOverlay}>
  //               <div className={styles.modal}>
  //                 <p>{modalMessage}</p>
  //                 <button className={styles.button} onClick={closeModal}>Close</button>
  //               </div>
  //             </div>
  //           )}
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // );

  useEffect(() => {
    // Esta llamada será del lado del servidor
    testConnection();
  }, []);

  return <div>Verifica la consola para el estado de la conexión a la base de datos.</div>;
}
