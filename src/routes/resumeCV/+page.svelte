<!-- npm run dev -- --open -->

<svelte:head>
	<title>Curriculum Vitae</title>
</svelte:head>

<script>
	import CollapsibleSection from './CollapsibleSection.svelte'
    
    import { base } from '$app/paths';

</script>

<article class="resume">

    <h1><a href="images/cv/cv.pdf"><span> tl;dr </span> </a> </h1>


    <section class="education">
        <CollapsibleSection headerText={"Education: I went to MIT. A lot. I have as many MIT degrees as Lebron has NBA rings."} category="education">
            <div class="content">
                <ul>
                    <li> <time>September 2015</time> to <time>May 2019</time>: <b> Bachelors of Science in Electrical Engineering</b> <em>"Cleveland! This is for you!"</em></li>
                    <li> <time>June 2019</time> to <time>May 2020</time>: <b>Masters of Engineering in Electrical Engineering</b> <em>Mickey Mouse Ring</em></li>
                    <li> <time>June 2023</time> to <time>May 2025</time>:<b>Masters of Science in Electrical Engineering*</b> <em> "Taking my talents to south beach"^</em></li>
                    <li> <time>June 2023</time> to <time>May 2025</time>: <b>Masters of Business Administration*</b><em>"Not 1...not 2...not 3...not 4..."^</em> </li>
                    <li> <time>August 2011</time> to <time>May 2015</time>: <b>High School Diploma</b> <em>In-season tournament banner in the rafters</em></li>
                </ul>
                    <a href="https://lgo.mit.edu">*MS and MBA were part of a dual degree program called Leaders of Global Operations (LGO)</a>
                    <br>
                    <a href="https://en.wikipedia.org/wiki/Big_Three_(Miami_Heat)">^the Miami Heat super team of the early 2010s.</a>
                
            </div>
        </CollapsibleSection>
    </section>
   
    <section class="experiences">
        <CollapsibleSection headerText={"Work Experience:"} category="work">
            <div class="content">
                <p>Biotechnology</p>
                <p><a href="{base}/resumeCV/bain">Electromechanical Engineering @ Amgen</a></p>

                <time>June 2024</time> to <time>Dec 2024</time>
                    
                <li>Researched electromechanical drug delivery device market focusing on on-body injectors to identify key trends, features, and landscape dynamics</li>
                <li>Built strategic initiatives for Amgen device team to use as input in their feature selection process to boost device adoption by drug teams and patients   </li>
                <li> Enacted case studies to demonstrate technical value of temperature modeling and sensing capabilities on an autoinjector through RNN based prediction </li>

                <p>Consulting</p>
                <p><a href="{base}/resumeCV/bain">Managmeent Consulting @ Bain</a></p>

                <time>September 2020</time> to <time>May 2023</time>
                    
                        <li>Helped define the 3rd party MRO strategy for a large A&D client</li>
                        <li>Supported procurement cost rationalize SWAT support team at IT services firm</li>
                        <li>Spearheaded financial modeling and market research (survey based and market participant interview based) workflows while managing 1-2 people and conducting company or industry due diligence primarily in healthcare</li>
                        <li>Owned supply chain analysis, helped to stand up cost visibility PMO, and investigated potential volume scale benefits with a heavy industrials and manufacturing end client</li>
                
                <p><a href="{base}/resumeCV/astra">Product Management @ Astra</a></p>
                <time>June 2022</time> to <time>Oct 2022</time>
                    <ul>
                        <li>Investigate technical feasibility and market appetite for new space products and build business case for funding decision for senior leadership team</li>
                        <li>Collaborated with spacecraft team on vendor negotiations, system architecture, and work planning</li>                
                    </ul>
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
                        <p>My experience managing hardware and software interfaces are evident in <a href="{base}/resumeCV/DroneTracker">A Drone's Eye View</a> and <a href="images/portfolio/jaw/JAW_PRES.pdf">Audio Spectral Visual Effects</a>. Both projects involved multiple group memebers working on distinct portions of a final product, and the success of both projects stemmed from an early definition of the system interfaces. </p>
                    
                   <h3>  Rapid Prototype Development: </h3>
                    <p>I have the ability to quickly take a set of vague product requirements and produce a first draft. Extremely fast turn around times are the norm in management consulting, and with rapid hardware development, my experience at the Hong Kong Innovation Node and the extremely fluid timelines while an intern at <a href="https://www.llnl.gov/">LLNL</a> are extremely relevant</p>
                  <h3>  System Modeling</h3>
                    <p>Through a wide range of projects and experiences including multiple feedback controls projects and USRP projects, I developed my system modeling abilities extensively. In the broader engineering sense, I began to appreciate the value of "good enough" system modeling. The key understanding being the trade off between accuracy and complexity once the diminishing returns of each additional bit of complexity is added.</p>
                </div>

                <div class="column" style="flex: 1 ">

                    <h2>Managerial Decision Making</h2>

                    <h3>Logistics and Resource Allocation</h3>
                    <p>My roles with in <a href="http://consulting.mit.edu/">MCG</a> and <a href="https://pkt.mit.edu/">PKT</a> demonstrate my ability to take on logistical responsibility for events as well as efficiently utilize limited resources to please as many members as much as possible. The phrasing of each problem as an optimization that can be reached allows me to utilize my technical skillset for non-technical situations.</p>
            
                    <h3>Teaching and Mentorship</h3>
                    <p>As a grader, teaching assistant, and lab assistant for a half dozen course in EECS, I garnered a deep appreciation of what it really means to explain a concept <i>well</i>. It was after going through my freshmen year struggling, that I began to understand the complexities behind effective instruction and mentorship. As a senior, I pride myself in my ability to distill many years of experiences into useful and actionable intelligence for younger students.</p>
                    
                    <h3>Creative Adaptability</h3>
                        <p>My single greatest skill is my adaptability. Reading the complexity of a situation, whether it be client interactions or electron interactions, I can adapt to changing requirements and environments all while still practicing the other skills mentioned here. Being able to adapt to unexpected and uncontrollable circumstances allows me to tap into my creative side something I usually utilize more when I'm writing poetry, to solve technical problems</p>
                </div>
            </div>
                    
        </div>
        </CollapsibleSection>
       
    </section>
</article>

<style>
	a{
        color: -webkit-link;
        text-decoration-line: underline;
        cursor: auto;
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
        background-color: #f9caad;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Add a subtle shadow */
        border-radius: 10px; /* Optional: Add rounded corners */
    }

    .column h2, .column h3 {
        color: #333;
    }

    .column p {
        color: #555;
        text-align: justify;
    }

    .column a {
        color: #007BFF;
        text-decoration: none;
    }

    .column a:hover {
        text-decoration: underline;
    }
</style>