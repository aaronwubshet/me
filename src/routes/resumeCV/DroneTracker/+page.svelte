

<svelte:head>
	<title>A Drone's Eye View</title>
</svelte:head>

<script>
</script>


<div id="about" class="section wb">
    <div class="container">
      <div class="row">
        <div class="col-md-8">
          <div class="message-box">
            <h2>A Drone's Eye View</h2>

            <p>
              <b><font size ="+2">What is it?</font></b>
            </p>

            <p>
              A drone's eye view introduces a novel way to transform any surface into an interactive
              interface. The struggle of fumbling around with a phone or laptop connecting to a full sized projector
              will be a thing of
              the past with our system. By eliminating this large barrier of size and portability, the Drone's Eye View
              creates a truly portable interaction generator. Simply put a small projector attached to a drone. By
              combining the portability of “picoprojectors” with the transportation mechanism of drone flight, this
              system allows a user to show large interfaces on flat surfaces. However, this doesn't quite capture the
              power of our system. The incorporation of a leap motion gesture recognition system allows not only control
              of the drone, but also interaction with the interface being projected onto the surface.
            </p>
            <p>
              Our system is composed of a drone flying around with reflective markers attached to it. The markers are
              picked up by the external tracking system called OptiTrack which consists of up to 6 IR cameras around the
              room in which the device will be used. The tracking system feeds data to Unity over the drone's Wifi
              network which also takes in leap motion input to create drone commands. Attached to the drone is a 3D
              printed enclosure with a picoprojector, microcomputer, buck converter, lipo battery, USB hub, Bluetooth
              transmitter, USB audio sound card, and USB Wifi dongle. These parts when connected appropriately make up
              our system: A Drone's Eye View.
            </p>
            <p>
              <b><font size ="+2">How does it work?</font></b>
            </p>
            <p>
              Combining a pico projector, microcomputer, drone, leap motion, and the OptiTrack IR tracking system, our
              system provides the user with a seamless natural user interface on any surface.
            </p>

            <p>
              There are quite a few moving parts (literally and figuratively) with our system. The literal moving part
              is the drone. Our system uses a Parrot AR 2.0 Drone Elite Edition as vehicle for our projector and
              microcomputer. While the drone has an internal control system for stability and a packaged phone app, we
              wanted more control over the movement of the drone, so using a C# SDK and an external tracking system in
              the form of the OptiTrack system we can actually create missions for the drone to follow certain markers
              recognized by the OptiTrack system. An external control system using the data of the absolute location
              tracked by OptiTrack actually allows for finer tuning of movements. The OptiTrack system consists of up to
              6 IR cameras set up around the room and small reflective markers that can be tracked by the system. Thus
              by placing markers on a wrist band and the drone, two distinct (or more) objects can be tracked and that
              data can then be streamed (wired or wirelessly) into Unity which sends the actual commands to the drone
              via Wifi. However, Unity has to receive the commands from somewhere. That’s where the Leap motion comes
              in.
            </p>

            <p>
              The leap motion gesture recognition system is attached to the user via a flexible wood wristband and 3D
              printed encasing. The different preprogramed gestures allow for drone commands such as takeoff, turn, go
              forward, and land. When these gestures are triggered, the Unity server which is running on a machine
              connected to the drone’s built in Wifi network, sends the command to the drone. However, the leap motion
              gestures trigger more than just drone movement. The gestures are also mapped to interactions with the user
              interface that is the main crux of our system.
            </p>

            <p>
              Before describing how the leap motion interfaces with the projector and microcomputer, let's clarify how
              the projector and microcomputer work. The two devices are separate, but have plug and play pairing that
              can be configured via SSHing into the microcomputer to run the appropriate commands. The demo application
              loaded onto the microcomputer is a simple music player with play, pause, volume control, and next song
              functionality. The audio is routed through a USB hub with a USB audio card and Bluetooth transmitter
              add-on. However, this is all somewhat useless if the device needs to be SSH'ed the entire time, so a
              startup script takes care of everything including connecting to the correct Wifi network in order to
              receive the leap motion gesture triggers to interact with the interface. In order to bring it all together
              a power source is still required. This comes in the form a lipo battery and a buck converter to step down
              the voltage to the appropriate level.
            </p>

            <p>
              Putting everything together means having a lipo battery powered microcomputer and projector with Bluetooth
              audio capabilities that responds to leap motion controls, all mounted on a drone that also responds to
              leap motion controls with external controlling and tracking via the OptiTrack system with all
              communication happening over the drone's Wifi network. However, putting everything together is always as
              clean as we want. In our case the main breakdown in the chain came at the point of mounting the payload to
              the drone. The weight was simply too much for the drone to effectively take off and fly the way we wanted.
              Thus our demonstrations showcase everything integrated on either side of this breakdown.
            </p>
          </div><!-- end messagebox -->
        </div><!-- end col -->

        <div class="col-md-4">
          <img src="../images/portfolio/drone/architecture.jpg" height="450" vspace = 100>
          <img src="../images/portfolio/drone/battery power.JPG" height="450" vpsace = 100>
          <img src="../images/portfolio/drone/gif of drone crash midterm.gif" height="450" vspace = 100>

        </div><!-- end col -->
      </div><!-- end row -->
    </div><!-- end container -->
  </div><!-- end section -->

<style>
	
	
</style>