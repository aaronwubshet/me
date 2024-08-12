<!-- npm run dev -- --open -->

<svelte:head>
	<title>Curriculum Vitae</title>
</svelte:head>

<script>
	import CollapsibleSection from './CollapsibleSection.svelte'
    

</script>

<article class="resume">

    <h1><a href="images/cv.pdf"><span> tl;dr </span> </a> </h1>


    <section class="education">
        <CollapsibleSection headerText={"Education: I went to MIT. A lot. I have as many MIT degrees as Lebron has NBA rings."} category="education">
            <div class="content">
                <ul>
                    <li> Bachelor of Science in Electrical Engineering: <time>September 2015</time> to <time>May 2019</time> "Cleveland! This is for you!"</li>
                    <li> Masters of Engineering in Electrical Engineering: <time>June 2019</time> to <time>May 2020</time> Mickey Mouse Ring</li>
                    <li> Masters of Science in Electrical Engineering*: <time>June 2023</time> to <time>May 2025</time> "Taking my talents to south beach"</li>
                    <li> Masters of Business Administration*: <time>June 2023</time> to <time>May 2025</time> "Not 1...not 2...not 3...not 4..." </li>
                    <li> High School Diploma: <time>August 2011</time> to <time>May 2015</time> In-season tournament banner in the rafters</li>
                    *The MS and MBA were part of a dual degree program called Leaders of Global Operations (LGO) i.e. the Miami Heat super team of the early 2010s.
                </ul>
            </div>
        </CollapsibleSection>
    </section>
   
    <section class="experiences">
        <CollapsibleSection headerText={"Work Experience:"} category="work">
            <div class="content">
                <p>Consulting</p>
                <p><a href="/resumeCV/bain">Managmeent Consulting @ Bain</a></p>

                <time>September 2020</time> to <time>May 2023</time>
                    
                        <li>Helped define the 3rd party MRO strategy for a large A&D client</li>
                        <li>Supported procurement cost rationalize SWAT support team at IT services firm</li>
                        <li>Spearheaded financial modeling and market research (survey based and market participant interview based) workflows while managing 1-2 people and conducting company or industry due diligence primarily in healthcare</li>
                        <li>Owned supply chain analysis, helped to stand up cost visibility PMO, and investigated potential volume scale benefits with a heavy industrials and manufacturing end client</li>
                
                <p><a href="/resumeCV/astra">Product Management @ Astra</a></p>
                <time>June 2022</time> to <time>Oct 2022</time>
                    <ul>
                        <li>Investigate technical feasibility and market appetite for new space products and build business case for funding decision for senior leadership team</li>
                        <li>Collaborated with spacecraft team on vendor negotiations, system architecture, and work planning</li>                
                    </ul>
            </div>
        </CollapsibleSection>
    </section>

    <section class="projects">
        <CollapsibleSection headerText={"Projects:"} category="projects">
            <div class="content">
                <ul>
                    <li><a href="/resumeCV/datavis">Who Owns Boston</a> </li>
                    <li>374 final project</li>
                    <li>301 final project</li>
                    <li>334 final project</li>
                    <li><a href="../images/portfolio/jaw/Final Project Report.pdf">JAW Dropping Audio Spectral Visual Effects</a></li>
                    <li><a href="/resumeCV/6athesis">An Investigation of USRP FPGA as a platform for Quantum Sensing and Control</a> </li>
                    <li>LGO thesis</li> 
                    <li>noise cancellation 320</li>
                    <li><a href="/resumeCV/DroneTracker">A Drone's Eye View</a> </li>
                    <li><a href="/resumeCV/SpeakerTracker">Mounted Loudspeaker Tracking System</a> </li>
                    
                    <li><a href="images/portfolio/trulink.pdf"> TrueLink @ MEMSI</a></li>
                    <li>aquadio</li>
                </ul>
            </div>
        </CollapsibleSection>
        </section>
        
    <section class="skills">
        <CollapsibleSection headerText={"Skills: I don't know who you are. I don't know what you want. If you are looking for ransom I can tell you I don't have money, but what I do have are a very particular set of skills. Skills I have acquired over a very long career*..."} category="skills">
            <div class="content">
                <ul>
                    <li>Modeling and System integration</li>
                    <li>Mentorship and Teaching</li>
                    <li>Logistics and product management</li>
                    <li>Python, MatLab, Verilog, Cadence, PCB design, LabVIEW, LTSpice</li>
                </ul>
                <h2>Hardware System Integration</h2>
                                <p>My experience managing hardware and software interfaces are evident in <a
                                        href="droneproject.html">A Drone's Eye View</a> and <a
                                        href="images/portfolio/jaw/JAW_PRES.pdf">Audio
                                        Spectral Visual Effects</a>. Both projects involved multiple group memebers working on
                                    distinct portions of a final product, and the success of both projects stemmed from an early
                                    definition of the system interfaces. </p>
        
        
                <h2>Rapid Prototype Development</h2>
                <p>I have the ability to quickly take a set of vague product requirements and produce a first
                    draft. Extremely fast turn around times are the norm in management consulting, and with
                    rapid hardware development, my experience at the Hong Kong Innovation Node and the extremely
                    fluid timelines while an intern at <a href="https://www.llnl.gov/">LLNL</a> are extremely
                    relevant</p>
        
        
                <h2>Logistics and Resource Allocation</h2>
                <p>My roles with in <a href="http://consulting.mit.edu/">MCG</a> and <a
                        href="https://pkt.mit.edu/">PKT</a> demonstrate my ability to take on logistical
                    responsibility for events as well as efficiently utilize limited resources to please as many
                    members as much as possible. The phrasing of each problem as an optimization that can be
                    reached allows me to utilize my technical skillset for non-technical situations.</p>
        
                <h2>Teaching and Mentorship</h2>
                <p>As a grader, teaching assistant, and lab assistant for a half dozen course in EECS, I
                    garnered a deep appreciation of what it really means to explain a concept <i>well</i>. It
                    was after going through my freshmen year struggling, that I began to understand the
                    complexities behind effective instruction and mentorship. As a senior, I pride myself in my
                    ability to distill many years of experiences into useful and actionable intelligence for
                    younger students.</p>
        
        <h2>System Modeling</h2>
        <p>Through a wide range of projects and experiences including multiple feedback controls
            projects and USRP projects, I developed my system modeling abilities extensively. In the
            broader engineering sense, I began to appreciate the value of "good enough" system modeling.
            The key understanding being the trade off between accuracy and complexity once the
            diminishing returns of each additional bit of complexity is added.</p>
        
        <h2>Creative Adaptability</h2>
                                <p>My single greatest skill is my adaptability. Reading the complexity of a situation, whether
                                    it be client interactions or electron interactions, I can adapt to changing requirements and
                                    environments all while still practicing the other skills mentioned here. Being able to adapt
                                    to unexpected and uncontrollable circumstances allows me to tap into my creative side,
                                    something I usually utilize more when I'm writing poetry, to solve technical problems</p>
        
        
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
</style>