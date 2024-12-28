import React from 'react';
import './styles/Projects.css';
import clickdub from './pic/clickdub.png';
import clickdubhover from './pic/clickdubhover.png';
import sudokuvision from './pic/Sudokuvision.png';
import sudokuvisionhover from './pic/sudokuvisionhover.png';
import Emotionsense from './pic/Emotionsense.png';
import Emotionsensehover from './pic/Emotionsensehover.png';
import chat from './pic/chatt.png';
import chathover from './pic/chatthover.png'


const Projects = () => {
    return (
        <div>
            <div className="main-content">
                <a href="https://github.com/BLANKSID" alt="Mythrill" target="_blank">

                    <div className="card">
                        <div className="wrapper">
                            <img src={clickdub} className="cover-image" />
                        </div>
                        <img src={clickdubhover} className="character" />
                    </div>
                    <h3>ClickDub - YouTube Video Dubber</h3>
                    <p className='pp'>Created a web application allowing users to dub YouTube videos with custom voices for personalised
                        audio experiences according to the users preference.</p>
                </a>

                <a href="https://github.com/BLANKSID" alt="Mythrill" target="_blank">
                    <div className="card">
                        <div className="wrapper">
                            <img src={sudokuvision} className="cover-image" />
                        </div>
                        <img src={sudokuvisionhover} className="character" />
                    </div>
                    <h3>SudokuVision</h3>
                    <p className='pp'>Implemented a real-time Sudoku solver using computer vision, allowing users to scan physical puzzles
                        with a camera, which the system automatically detects and processes.

                    </p>
                </a>

                <a href="https://github.com/BLANKSID" alt="Mythrill" target="_blank">
                    <div className="card">
                        <div className="wrapper">
                            <img src={Emotionsense} className="cover-image" />
                        </div>
                        <img src={Emotionsensehover} className="character" />
                    </div>
                    <h3>EmotionSense</h3>
                    <p className='pp'>Engineered an AI-powered emotion detection system capable that accurately identifies emotions (joy, sadness,
                        anger) from voice input, improving human-computer interaction.
                    </p>
                </a>

                <a href="https://github.com/BLANKSID" alt="Mythrill" target="_blank">
                    <div className="card">
                        <div className="wrapper">
                            <img src={chat} className="cover-image" />
                        </div>
                        <img src={chathover} className="character" />
                    </div>
                    <h3>ChatApp</h3>
                    <p className='pp'>Designed an interactive chat application with push notification features and optimised for real-time
                        communication using Flutter and Firebase.</p>
                </a>


            </div>
        </div>
    );
};

export default Projects;
