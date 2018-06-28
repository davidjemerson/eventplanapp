import React from 'react';

const CreateForm = props => (
  <form className="create-event">
    <div className="form-group">
      <label className="event-type" htmlFor="event-type">Event Type</label>
      <input
        type="text"
        value={props.search}
        onChange={props.handleInputChange}
        name="event"
        list="eventType"
        className="form-control"
        placeholder="What Type of Event?"
        id="event-type"
      />
      <datalist id="events">
        //TODO add in the list to populate from to the /utils/API
        {/* {props.eventType.map(event => <option value={event} key={event} />)} */}
      </datalist>
      <label className="event-name" htmlFor="event-name">Event Name</label>
      <input
        type="text"
        name="event-name"
        className="form-control"
        placeholder="Name Your Awesome Event"
        id="event-name"
      />
      <label className="event-location" htmlFor="event-location">Where's Your Event</label>
      <input
        type="text"
        name="event-location"
        className="form-control"
        placeholder="Where's This Going Down?"
        id="event-location"
      />
      <label className="event-address" htmlFor="event-address">What Is The Address?</label>
      <input
        type="text"
        name="event-address"
        className="form-control"
        placeholder="Address of the Event"
        id="event-address"
      />
<<<<<<< HEAD
      <label className="friends-reqd" htmlFor="friends-reqd">How Many People Do You Need?</label>
=======
      <label htmlFor="friends-reqd">How Many People Do You Need</label>
>>>>>>> changed a couple of lables on the /dashboard/create page
      <select name="friends-reqd" id="friends-reqd" className="form-control">
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
        <option>6</option>
        <option>7</option>
        <option>8</option>
        <option>9</option>
        <option>10</option>
      </select>
<<<<<<< HEAD
      
      {/* //TODO add some code here for react-select -> https://jedwatson.github.io/react-select/ */}
      <label className="add-friends" htmlFor="add-friends">Wanna Invite Some People?</label>
=======

      {/* //TODO add some code here for react-select -> https://jedwatson.github.io/react-select/ */}
      <label htmlFor="add-friends">Wanna Invite Some People?</label>
>>>>>>> changed a couple of lables on the /dashboard/create page
      <input
        type="text"
        name="add-friends"
        className="form-control"
        id="add-friends"
      />
    </div>
  </form>
);

export default CreateForm;
