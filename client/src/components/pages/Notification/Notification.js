import './Notification.css'
import Navbar from "../../context/Navbar/Navbar";

const Notifications = () => {
    return ( 
          <body className='body'>
            <div>
                <Navbar />
            </div>
            <div id="container">
              <div id="header">
                <div id="monthDisplay"></div>
                <div>
                  <button className='button' id="backButton">Back</button>
                  <button className='button' id="nextButton">Next</button>
                </div>
              </div>
        
              <div id="weekdays">
                <div>Sunday</div>
                <div>Monday</div>
                <div>Tuesday</div>
                <div>Wednesday</div>
                <div>Thursday</div>
                <div>Friday</div>
                <div>Saturday</div>
              </div>
        
              <div id="calendar"></div>
            </div>
        
            <div id="newEventModal">
              <h2>Event name</h2>
              <input id="eventTitleInput" placeholder="Event's Title" />
              <h2>Teacher's initial</h2>
              <input id="initialInput" placeholder="Teacher's name" />
              <h2>Section</h2>
              <input id="secInput" placeholder="Section" /> 
              <h2>Course_code</h2>
              <input id="codeInput" placeholder="Code" /> 
              <h2>Time</h2>
              <input id="timeInput" placeholder="Time" />
              
              
              <button className='button' id="saveButton">Save</button>
              <button className='button' id="cancelButton">Cancel</button>
            </div>
        
            <div id="deleteEventModal">
              <h2>Event</h2>
        
              <p id="eventText"></p>
        
              <h2>Teacher</h2>
              <p id="eventteacher"></p>
        
              <h2>Section</h2>
              <p id="secnum"></p>
        
              <h2>Code</h2>
              <p id="code"></p>
        
              <h2>Time</h2>
              <p id="time"></p>
        
        
              <button className='button' id="deleteButton">Delete</button>
              <button className='button' id="closeButton">Close</button>
            </div>
        
            <div id="modalBackDrop"></div>
        
            <script src="./script.js"></script>
          </body>
    );
}
 
export default Notifications;