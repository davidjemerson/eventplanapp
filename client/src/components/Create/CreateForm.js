import React from 'react';

const CreateForm = props => (
  <form className="create-event">
    <div className="form-group">
      <label htmlFor="event-type">Event Type</label>
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
      <label htmlFor="event-name">Event Name</label>
      <input
        type="text"
        name="event-name"
        className="form-control"
        placeholder="Name Your Awesome Event"
        id="event-name"
      />
      <label htmlFor="event-location">Where's Your Event</label>
      <input
        type="text"
        name="event-location"
        className="form-control"
        placeholder="Where's This Going Down?"
        id="event-location"
      />
      <label htmlFor="event-address">What Is The Address?</label>
      <input
        type="text"
        name="event-address"
        className="form-control"
        placeholder="Address of the Event"
        id="event-address"
      />
      <label htmlFor="friends-reqd" />
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
      //TODO
      {/* add some code here for react-select -> https://jedwatson.github.io/react-select/ */}
      <label htmlFor="add-friends">Wanna Invite Some People?</label>
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
