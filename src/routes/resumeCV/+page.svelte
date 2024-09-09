<!-- npm run dev -- --open -->

<svelte:head>
	<title>Curriculum Vitae</title>
</svelte:head>

<script>
	import CollapsibleSection from './CollapsibleSection.svelte'
    
    import { base } from '$app/paths';
   
    import {
		Timeline,
		TimelineItem,
		TimelineSeparator,
		TimelineDot,
		TimelineConnector,
		TimelineContent,
		TimelineOppositeContent
	} from 'svelte-vertical-timeline';

</script>

<article class="resume">

    <h1><a href="images/cv/cv.pdf"><span> tl;dr </span> </a> </h1>


    <section class="education">
        <CollapsibleSection headerText={"Education: I went to MIT. A lot. I have as many MIT degrees as Lebron has NBA rings."} category="education">
            <div class="content">
                <Timeline position="left">


                    <div class="timeline-dot tooltip" data-tooltip="Taking my talents to south beach &#013;Not 1...not 2...not 3...not 4..." >
                            <TimelineItem>
                                <TimelineOppositeContent slot="opposite-content">
                                    <p style={'margin-top: -1px;'}>June 2023 - May 2025</p>
                                </TimelineOppositeContent>
                                <TimelineSeparator>
                                    <TimelineDot style={'background-color: var(--primary-color-accent);'}/>
                                    <TimelineConnector />
                                </TimelineSeparator>
                                <TimelineContent style={'height: 90px;'}>
                                    <h3 style={'margin-top: -2px;'}>MIT</h3>
                                    <p style={'margin-top: -20px;'}>Masters of Business Administration<sup>*</sup></p>
                                    <p style={'margin-top: -20px;'}>Masters of Science in EECS<sup>*</sup></p>
                                </TimelineContent>
                            </TimelineItem>
                    </div>
                    <div class="timeline-dot tooltip" data-tooltip="Mickey Mouse Ring" >
                        <TimelineItem>
                            <TimelineOppositeContent slot="opposite-content">
                                <p style={'margin-top: -1px;'}>June 2019 - May 2020</p>
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                                <TimelineDot style={'background-color: var(--primary-color-accent);'}/>
                                <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent style={'height: 90px;'}>
                                <h3 style={'margin-top: -2px;'}>MIT</h3>
                                <p style={'margin-top: -20px;'}>Masters of Engineering in EECS</p>
                            </TimelineContent>
                        </TimelineItem>
                    </div>
                    <div class="timeline-dot tooltip" data-tooltip="Cleveland! This is for you!" >
                        <TimelineItem>
                            <TimelineOppositeContent slot="opposite-content">
                                <p style={'margin-top: -1px;'}>September 2015 - May 2019</p>
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                                <TimelineDot style={'background-color: var(--primary-color-accent);'}/>
                                <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent style={'height: 90px;'}>
                                <h3 style={'margin-top: -2px;'}>MIT</h3>
                                <p style={'margin-top: -20px;'}>Bachelor's of Science in EECS</p>
                            </TimelineContent>
                        </TimelineItem>
                    </div>

                    <div class="timeline-dot tooltip" data-tooltip="In-season tournament banner in the rafters" >
                        <a href="{base}/resumeCV/gsmst" class="timeline-link">

                        <TimelineItem>
                            <TimelineOppositeContent slot="opposite-content">
                                <p style={'margin-top: -1px;'}>September 2011 - May 2015</p>
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                                <TimelineDot style={'background-color: var(--primary-color-accent);'}/>
                            </TimelineSeparator>
                            <TimelineContent style={'height: 0px;'}>
                                <h3 style={'margin-top: -2px;'}>GSMST</h3>
                                <p style={'margin-top: -20px;'}>High School Diploma</p>
                            </TimelineContent>
                        </TimelineItem>
                        </a>
                    </div>
                </Timeline>
                <a href="https://lgo.mit.edu">*MS and MBA were part of a dual degree program called Leaders of Global Operations (LGO)</a>
            </div>
        </CollapsibleSection>
    </section>
   
    <section class="experiences">
        <CollapsibleSection headerText={"Work Experience: 'we can't pay you, but we can offer you exposure'"} category="work">
            <div class="content">
                <Timeline position="left">

                    <div class="timeline-dot">
                        <a href="{base}/resumeCV/lgo" class="timeline-link">
                            <TimelineItem>
                                <TimelineOppositeContent slot="opposite-content">
                                    <p style={'margin-top: -1px;'}>June 2024 - December 2024</p>
                                </TimelineOppositeContent>
                                <TimelineSeparator>
                                    <TimelineDot style={'background-color: var(--primary-color-accent);'}/>
                                    <TimelineConnector />
                                </TimelineSeparator>
                                <TimelineContent style={'height: 90px;'}>
                                    <h3 style={'margin-top: -2px;'}>Amgen</h3>
                                    <p style={'margin-top: -20px;'}>Electromechanical Engineering Research Fellow</p>
                                </TimelineContent>
                            </TimelineItem>
                        </a>
                    </div>

                    <div class="timeline-dot">
                        <a href="{base}/resumeCV/bain" class="timeline-link">
                            <TimelineItem>
                                <TimelineOppositeContent slot="opposite-content">
                                    <p style={'margin-top: -1px;'}>Oct 2022 - May 2023</p>
                                </TimelineOppositeContent>
                                <TimelineSeparator>
                                    <TimelineDot style={'background-color: var(--primary-color-accent);'}/>
                                    <TimelineConnector />
                                </TimelineSeparator>
                                <TimelineContent style={'height: 90px;'}>
                                    <h3 style={'margin-top: -2px;'}>Bain & Company</h3>
                                    <p style={'margin-top: -20px;'}>Consultant</p>
                                </TimelineContent>
                            </TimelineItem>
                        </a>
                    </div>

                    <div class="timeline-dot">
                        <a href="{base}/resumeCV/astra" class="timeline-link">
                            <TimelineItem>
                                <TimelineOppositeContent slot="opposite-content">
                                    <p style={'margin-top: -1px;'}>May 2022 - Oct 2022</p>
                                </TimelineOppositeContent>
                                <TimelineSeparator>
                                    <TimelineDot style={'background-color: var(--primary-color-accent);'}/>
                                    <TimelineConnector />
                                </TimelineSeparator>
                                <TimelineContent style={'height: 90px;'}>
                                    <h3 style={'margin-top: -2px;'}>Astra Space Inc</h3>
                                    <p style={'margin-top: -20px;'}>Product Manager and Strategy Analyst</p>
                                </TimelineContent>
                            </TimelineItem>
                        </a>
                    </div>

                    <div class="timeline-dot">
                        <a href="{base}/resumeCV/bain" class="timeline-link">
                            <TimelineItem>
                                <TimelineOppositeContent slot="opposite-content">
                                    <p style={'margin-top: -1px;'}>October 2020 - May 2022</p>
                                </TimelineOppositeContent>
                                <TimelineSeparator>
                                    <TimelineDot style={'background-color: var(--primary-color-accent);'}/>
                                    <TimelineConnector />
                                </TimelineSeparator>
                                <TimelineContent style={'height: 90px;'}>
                                    <h3 style={'margin-top: -2px;'}>Bain & Company</h3>
                                    <p style={'margin-top: -20px;'}>(Senior) Associate Consultant</p>
                                </TimelineContent>
                            </TimelineItem>
                        </a>
                    </div>

                    <div class="timeline-dot">
                        <a href="{base}/resumeCV/teaching" class="timeline-link">
                            <TimelineItem>
                                <TimelineOppositeContent slot="opposite-content">
                                    <p style={'margin-top: -1px;'}>January 2020 - June 2020</p>
                                </TimelineOppositeContent>
                                <TimelineSeparator>
                                    <TimelineDot style={'background-color: var(--primary-color-accent);'}/>
                                    <TimelineConnector />
                                </TimelineSeparator>
                                <TimelineContent style={'height: 90px;'}>
                                    <h3 style={'margin-top: -2px;'}>MIT EECS Department</h3>
                                    <p style={'margin-top: -20px;'}>TA/Course Staff/LA/Grader</p>
                                </TimelineContent>
                            </TimelineItem>
                        </a>
                    </div>


                    <div class="timeline-dot">
                        <a href="{base}/resumeCV/6athesis" class="timeline-link">
                            <TimelineItem>
                                <TimelineOppositeContent slot="opposite-content">
                                    <p style={'margin-top: -1px;'}>June 2019 - December 2019</p>
                                </TimelineOppositeContent>
                                <TimelineSeparator>
                                    <TimelineDot style={'background-color: var(--primary-color-accent);'}/>
                                    <TimelineConnector />
                                </TimelineSeparator>
                                <TimelineContent style={'height: 90px;'}>
                                    <h3 style={'margin-top: -2px;'}>Lawrence Livermore National Laboratory</h3>
                                    <p style={'margin-top: -20px;'}>Electrical Engineering Research Fellow</p>
                                </TimelineContent>
                            </TimelineItem>
                        </a>
                    </div>

                    <div class="timeline-dot">
                        <a href="{base}/resumeCV/teaching" class="timeline-link">
                            <TimelineItem>
                                <TimelineOppositeContent slot="opposite-content">
                                    <p style={'margin-top: -1px;'}>August 2018 - May 2019</p>
                                </TimelineOppositeContent>
                                <TimelineSeparator>
                                    <TimelineDot style={'background-color: var(--primary-color-accent);'}/>
                                    <TimelineConnector />
                                </TimelineSeparator>
                                <TimelineContent style={'height: 90px;'}>
                                    <h3 style={'margin-top: -2px;'}>MIT EECS Department</h3>
                                    <p style={'margin-top: -20px;'}>TA/Course Staff/LA/Grader</p>
                                </TimelineContent>
                            </TimelineItem>
                        </a>
                    </div>

                    <div class="timeline-dot">
                        <a href="{base}/resumeCV/bain" class="timeline-link">
                            <TimelineItem>
                                <TimelineOppositeContent slot="opposite-content">
                                    <p style={'margin-top: -1px;'}>June 2018 - August 2018</p>
                                </TimelineOppositeContent>
                                <TimelineSeparator>
                                    <TimelineDot style={'background-color: var(--primary-color-accent);'}/>
                    
                                    <TimelineConnector />
                                </TimelineSeparator>
                                <TimelineContent style={'height: 90px;'}>
                                    <h3 style={'margin-top: -2px;'}>Bain & Company</h3>
                                    <p style={'margin-top: -20px;'}>Associate Consultant Intern</p>
                                </TimelineContent>
                            </TimelineItem>
                        </a>
                    </div>

                    <div class="timeline-dot">
                        <a href="{base}/resumeCV/teaching" class="timeline-link">
                            <TimelineItem>
                                <TimelineOppositeContent slot="opposite-content">
                                    <p style={'margin-top: -1px;'}>August 2017 - May 2018</p>
                                </TimelineOppositeContent>
                                <TimelineSeparator>
                                    <TimelineDot style={'background-color: var(--primary-color-accent);'}/>
                                    <TimelineConnector />
                                </TimelineSeparator>
                                <TimelineContent style={'height: 90px;'}>
                                    <h3 style={'margin-top: -2px;'}>MIT EECS Department</h3>
                                    <p style={'margin-top: -20px;'}>TA/Course Staff/LA/Grader</p>
                                </TimelineContent>
                            </TimelineItem>
                        </a>
                    </div>

                    <div class="timeline-dot">
                        <a href="{base}/resumeCV/bain#BEL" class="timeline-link">
                        <TimelineItem>
                            <TimelineOppositeContent slot="opposite-content">
                                <p style={'margin-top: -1px;'}>August 2017</p>
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                                <TimelineDot style={'background-color: var(--primary-color-accent);'}/>
                                <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent style={'height: 90px;'}>
                                <h3 style={'margin-top: -2px;'}>Bain & Company</h3>
                                <p style={'margin-top: -20px;'}>Bain Entrepreneurial Leaders Intern</p>
                            </TimelineContent>
                        </TimelineItem>
                        </a>

                    </div>

                    <div class="timeline-dot">
                        <a href="{base}/resumeCV/draper#intern" class="timeline-link">
                        <TimelineItem>
                            <TimelineOppositeContent slot="opposite-content">
                                <p style={'margin-top: -1px;'}>June 2017 - August 2017</p>
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                                <TimelineDot style={'background-color: var(--primary-color-accent);'}/>
                                <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent style={'height: 90px;'}>
                                <h3 style={'margin-top: -2px;'}>Draper Laboratory</h3>
                                <p style={'margin-top: -20px;'}>Signal Engineering Intern</p>
                            </TimelineContent>
                        </TimelineItem>
                        </a>
                    </div>

                    <div class="timeline-dot">
                        <a href="{base}/resumeCV/urops#SSL" class="timeline-link">
                        <TimelineItem>
                            <TimelineOppositeContent slot="opposite-content">
                                <p style={'margin-top: -1px;'}>June 2017 - August 2017</p>
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                                <TimelineDot style={'background-color: var(--primary-color-accent);'}/>
                                <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent style={'height: 90px;'}>
                                <h3 style={'margin-top: -2px;'}>Space, Telecommunications, Astronomy and Radiation Laboratory / Space Systems Laboratory at MIT</h3>
                                <p style={'margin-top: -20px;'}>Undergraduate researcher</p>
                            </TimelineContent>
                        </TimelineItem>
                        </a>
                    </div>

                    <div class="timeline-dot">
                        <a href="{base}/resumeCV/teaching" class="timeline-link">
                            <TimelineItem>
                                <TimelineOppositeContent slot="opposite-content">
                                    <p style={'margin-top: -1px;'}>February 2017 - May 2017</p>
                                </TimelineOppositeContent>
                                <TimelineSeparator>
                                    <TimelineDot style={'background-color: var(--primary-color-accent);'}/>
                                    <TimelineConnector />
                                </TimelineSeparator>
                                <TimelineContent style={'height: 90px;'}>
                                    <h3 style={'margin-top: -2px;'}>MIT EECS Department</h3>
                                    <p style={'margin-top: -20px;'}>TA/Course Staff/LA/Grader</p>
                                </TimelineContent>
                            </TimelineItem>
                        </a>
                    </div>

                    <div class="timeline-dot">
                        <a href="{base}/resumeCV/draper" class="timeline-link">
                        <TimelineItem>
                            <TimelineOppositeContent slot="opposite-content">
                                <p style={'margin-top: -1px;'}>January 2017</p>
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                                <TimelineDot style={'background-color: var(--primary-color-accent);'}/>
                                <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent style={'height: 90px;'}>
                                <h3 style={'margin-top: -2px;'}>Draper Laboratory</h3>
                                <p style={'margin-top: -20px;'}>Signal Engineering Extern</p>
                            </TimelineContent>
                        </TimelineItem>
                        </a>
                    </div>

                    <div class="timeline-dot">
                        <a href="{base}/resumeCV/teaching" class="timeline-link">
                            <TimelineItem>
                                <TimelineOppositeContent slot="opposite-content">
                                    <p style={'margin-top: -1px;'}>February 2016 - May 2016</p>
                                </TimelineOppositeContent>
                                <TimelineSeparator>
                                    <TimelineDot style={'background-color: var(--primary-color-accent);'}/>
                                    <TimelineConnector />
                                </TimelineSeparator>
                                <TimelineContent style={'height: 90px;'}>
                                    <h3 style={'margin-top: -2px;'}>MIT Physics Department</h3>
                                    <p style={'margin-top: -20px;'}>TA/Course Staff/LA/Grader</p>
                                </TimelineContent>
                            </TimelineItem>
                        </a>
                    </div>

                    <div class="timeline-dot">
                        <a href="{base}/resumeCV/urops" class="timeline-link">
                        <TimelineItem>
                            <TimelineOppositeContent slot="opposite-content">
                                <p style={'margin-top: -1px;'}>January 2016 - May 2016</p>
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                                <TimelineDot style={'background-color: var(--primary-color-accent);'}/>
                                <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent style={'height: 90px;'}>
                                <h3 style={'margin-top: -2px;'}>Research Laboratory of Electronics at MIT</h3>
                                <p style={'margin-top: -20px;'}>Undergraduate researcher</p>
                            </TimelineContent>
                        </TimelineItem>
                        </a>
                    </div>

                    <div class="timeline-dot">
                        <a href="https://www.pmd.org" class="timeline-link">
                            <TimelineItem>
                                <TimelineOppositeContent slot="opposite-content">
                                    <p style={'margin-top: -1px;'}>January 2016</p>
                                </TimelineOppositeContent>
                                <TimelineSeparator>
                                    <TimelineDot style={'background-color: var(--primary-color-accent);'}/>
                                    <!-- <TimelineConnector /> -->
                                </TimelineSeparator>
                                <TimelineContent style={'height: 90px;'}>
                                    <h3 style={'margin-top: -2px;'}>People Making a Difference</h3>
                                    <p style={'margin-top: -20px;'}>Federal Work Study Volunteer Coordinator</p>
                                </TimelineContent>
                            </TimelineItem>
                        </a>
                    </div>

                </Timeline>
            </div>
        </CollapsibleSection>
    </section>

    <section class="projects">
        <CollapsibleSection headerText={"Projects: I (usually) finish what I start..."} category="projects">
            <div class="content">
                <div style="display: flex;">
                    <div style="flex: 1;">
                        <ul>
                            <li><a href="{base}/resumeCV/lgo">LGO Thesis: Coming Soon<sup>TM</sup></a></li>
                            <li><a href="{base}/resumeCV/datavis">Who Owns Boston</a> </li>
                            <li><a href="{base}/resumeCV/301">Solid State Circuits Final Design Project</a></li>
                            <li><a href="{base}/resumeCV/6athesis">An Investigation of USRP FPGA as a platform for Quantum Sensing and Control</a> </li>
                            <li><a href="{base}/resumeCV/334">Power Electronics Final Design Project</a></li>
                            <li><a href="{base}/resumeCV/836">Sensor Systems for Interactive Environments Final Project</a> </li> 
                            <li><a href="{base}/resumeCV/085">Computational Science and Engineering Final Project</a> </li> 
                            <li><a href="{base}/resumeCV/DroneTracker">A Drone's Eye View</a> </li>
                        </ul>
                    </div>
                    <div style="flex: 1;">
                        <ul>
                            <li><a href="{base}/resumeCV/374">Analysis and Design of Digital Integrated Circuits Final Design Project</a></li>
                            <li><a href="{base}/resumeCV/012">Device Physics Final Project</a> </li> 
                            <li><a href="{base}/resumeCV/013">Electromagnetic Fields and Energy Final Project</a> </li> 
                            <li><a href="{base}/resumeCV/memsi"> TrueLink @ MEMSI</a></li>
                            <li><a href="{base}/resumeCV/111">JAW Dropping Audio Spectral Visual Effects</a></li>
                            <li><a href="{base}/resumeCV/SpeakerTracker">Mounted Loudspeaker Tracking System</a> </li> 
                            <li><a href="https://github.com/aaronwubshet/noise_cancellation_matlab_model">Noise Cancellation Feedback System Data Analysis</a></li>
                            
                        </ul>
                    </div>
                </div>
            </div>
        </CollapsibleSection>
    </section>
        
    <section class="skills">
        <CollapsibleSection headerText={"Skills: I don't know who you are. I don't know what you want. If you are looking for ransom I can tell you I don't have money, but what I do have are a very particular set of skills. Skills I have acquired over a very long career*..."} category="skills">
            
            
        <div class="content">
            <div class="image-container">
                <img src="images/cv/skill_cloud.png" alt="Skill Cloud" style="width: 70%; height:70%">
            </div>

            <div class="text-columns" style="display: flex;">
                <div class="column" style="flex: 1">
                    <h2> System Level Thinking</h2>
                    
                    <h3>HW/SW Integration</h3>
                        <p>I have experience managing hardware - software interfaces (as is evident in <a href="{base}/resumeCV/DroneTracker">A Drone's Eye View</a> and <a href="images/portfolio/jaw/JAW_PRES.pdf">Audio Spectral Visual Effects</a>) where system components have to be developed separately before being brought together. While simulation and and forethought can help avoid a lot of headaches, overcoming the challenges associated bringing hardware and software together is a fun task to do in real time in an iterative manner. Also, both projects involved multiple group members working on distinct portions of a final product, and the success of both projects stemmed from an early definition of the system interfaces. </p>
                    
                   <h3>  Rapid Prototype Development: </h3>
                    <p>I have the ability to quickly take a set of vague product requirements and produce a first draft. Extremely fast turn around times are the norm in both management consulting and software development (and I would agree can be valuable with hardware development as well). My experience at the <a href = "{base}/resumeCV/memsi">Hong Kong Innovation Node </a> and the extremely fluid timelines while an intern at LLNL working on my <a href="{base}/resumeCV/6athesis">6A thesis</a> both are examples of my ability to quickly breakdown a situation and produce results</p>

                  <h3>  System Modeling</h3>
                    <p>Through a wide range of projects and experiences including multiple feedback controls projects and USRP projects, I developed my system modeling abilities extensively. My internships at <a href = "{base}/resumeCV/draper">Draper</a> modeling LTE signals and class projects in <a href="{base}/resumeCV/085">Computational Science & Engineering </a> and <a href="{base}/resumeCV/012">Device Physics </a> demonstrate my skills in extracting the key metrics and system dynamics to model and track in order to better understand a physical system. I have learned to balance complexity and accuracy depending on the demands of the situation as well as leverage analogous existing system models when helpful (think RLC circuit as a dampened spring system).</p>
                </div>

                <div class="column" style="flex: 1 ">

                    <h2>Managerial Decision Making</h2>


                    <h3>Teaching and Mentorship</h3>
                    <p>I've supported the course staff of over half a dozen courses in the MIT EECS and Physics departments as a grader, teaching assistant, and lab assistant. During this time, I garnered a deep appreciation of what it really means to explain a concept <i>well</i>. It was after going through my freshmen year struggling, that I began to understand the complexities behind effective instruction and mentorship. This carried over into my professional career managing direct reports who are trying to learn how to do the job. My goal then was to provide just enough support for my direct reports to understand how to complete a job but also learn how to get better at the job setting them up for future success.</p>


                    <h3>Modeling and Management </h3>
                    <p>My roles with in <a href="{base}/resumeCV/bain">Bain</a> and <a href="{base}/resumeCV/astra">Astra</a> demonstrate my ability to take on responsibility for identifying complex business and product management challenges, develop a plan to address those challenges, and then execute that plan effectively while utilizing limited resources. I've achieve positive outcomes by leveraging my skills in financial modeling, stakeholder management, and operations focused mindset. One key benefit of my technical background is the ability to frame problems as optimizations with a variety of external and internal constraints that must be satisfied.</p>
            
                    
                    <h3>Creative Adaptability</h3>
                        <p>Perhaps my single greatest skill is my adaptability. Reading the complexity of a situation, whether it be client interactions or electron interactions, I can adapt to changing requirements and environments all while still practicing the other skills mentioned here. Being able to adapt to unexpected and uncontrollable circumstances allows me to tap into my creative side something I usually utilize more when I'm writing <a href="{base}/art/poetry">poetry</a>, to solve technical problems</p>
                </div>
            </div>
                    
        </div>
        </CollapsibleSection>
       
    </section>
</article>

<style>
    .tooltip::after {
        content: attr(data-tooltip);
        position: absolute;
        top: 33%; /* Position above the dot */
        left: 51%;
        /* transform: translateX(-100%); */
        background-color: #333;
        color: #fff;
        padding: 5px 10px;
        border-radius: 5px;
        white-space: pre;
        font-size: 12px;
        opacity: 0;
        transition: opacity 0.3s ease;
        pointer-events: none;
    }

    .tooltip:hover::after {
        opacity: 1;
    }
    
    .timeline-link {
        text-decoration: none;
        color: inherit;
        display: block;
    }

	a:hover{
        text-decoration: underline;

    }
	section {
        margin-bottom: 1em;
    }
	.content {
		background-color: var(--primary-color-light);
		padding: 0.5em;
	}

    li {
        margin-bottom: 0.5em;
    }
    .image-container {
        display: flex;
        justify-content: center;
        margin-bottom: 20px;
    }
    .text-columns {
        display: flex;
        gap: 20px; /* Add space between the columns */
        padding: 20px;
    }
    .column {
        flex: 1;
        padding: 10px;
        background-color: var(--primary-color-accent);
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Add a subtle shadow */
        border-radius: 10px; /* Optional: Add rounded corners */
    }

    .timeline-dot {
        transition: transform 0.3s ease;
    }

    .timeline-dot:hover {
        transform: scale(1.1);
    }
</style>