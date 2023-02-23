import React from "react";
import { useState } from "react";
import { Card, Table } from "react-bootstrap";
import Scheduler from "react-mui-scheduler";
import calenderIcon from "../../assets/icons/calendar-thirty-two-svgrepo-com.svg";
import plusIcon from "../../assets/icons/add-plus-svgrepo-com.svg";
import clockIcon from "../../assets/icons/clock-svgrepo-com.svg";
import studentIcon from "../../assets/icons/student-svgrepo-com.svg";

function Dashboard() {
  const [state] = useState({
    options: {
      transitionMode: "zoom", // or fade
      startWeekOn: "mon", // or sun
      defaultMode: "month", // or week | day | timeline
      minWidth: 540,
      maxWidth: 540,
      minHeight: 540,
      maxHeight: 540,
    },
    alertProps: {
      open: false,
      color: "info", // info | success | warning | error
      severity: "info", // info | success | warning | error
      message: "🚀 Let's start with awesome react-mui-scheduler 🔥 🔥 🔥",
      showActionButton: true,
      showNotification: true,
      delay: 1500,
    },
    toolbarProps: {
      showSearchBar: true,
      showSwitchModeButtons: true,
      showDatePicker: true,
    },
  });

  const events = [
    {
      id: "event-1",
      label: "Medical consultation",
      groupLabel: "Dr Shaun Murphy",
      user: "Dr Shaun Murphy",
      color: "#f28f6a",
      startHour: "04:00 AM",
      endHour: "05:00 AM",
      date: "2022-05-05",
      createdAt: new Date(),
      createdBy: "Kristina Mayer",
    },
    {
      id: "event-2",
      label: "Medical consultation",
      groupLabel: "Dr Claire Brown",
      user: "Dr Claire Brown",
      color: "#099ce5",
      startHour: "09:00 AM",
      endHour: "10:00 AM",
      date: "2022-05-09",
      createdAt: new Date(),
      createdBy: "Kristina Mayer",
    },
    {
      id: "event-3",
      label: "Medical consultation",
      groupLabel: "Dr Menlendez Hary",
      user: "Dr Menlendez Hary",
      color: "#263686",
      startHour: "13 PM",
      endHour: "14 PM",
      date: "2022-05-10",
      createdAt: new Date(),
      createdBy: "Kristina Mayer",
    },
    {
      id: "event-4",
      label: "Consultation prénatale",
      groupLabel: "Dr Shaun Murphy",
      user: "Dr Shaun Murphy",
      color: "#f28f6a",
      startHour: "08:00 AM",
      endHour: "09:00 AM",
      date: "2022-05-11",
      createdAt: new Date(),
      createdBy: "Kristina Mayer",
    },
    {
      id: "event-5",
      label: "Consultation prénatale",
      groupLabel: "Dr Shaun Murphy",
      user: "Dr Shaun Murphy",
      color: "#f28f6a",
      startHour: "08:00 AM",
      endHour: "09:00 AM",
      date: "2022-12-22",
      createdAt: new Date(),
      createdBy: "Kristina Mayer",
    },
    {
      id: "event-6",
      label: "Consultation prénatale",
      groupLabel: "Dr Shaun Murphy",
      user: "Dr Shaun Murphy",
      color: "#f28f6a",
      startHour: "08:00 AM",
      endHour: "09:00 AM",
      date: "2022-12-24",
      createdAt: new Date(),
      createdBy: "Kristina Mayer",
    },
  ];

  const handleCellClick = (event, row, day) => {
    // Do something...
  };

  const handleEventClick = (event, item) => {
    // Do something...
  };

  const handleEventsChange = (item) => {
    // Do something...
  };

  const handleAlertCloseButtonClicked = (item) => {
    // Do something...
  };

  return (
    <>
      <div className="row">
        <div className="col-md-6">
        <div className="row">
          <b>Good Morning,</b>
          <h2 className="text-primary">Mr. Steven</h2>
          <b>Welcome to LinkStaff Swimming Pool School Coach Panel</b>
        </div>
          <div className="row my-4">
            <div className="col-8">
              <Card className="text-center">
                <Card.Body>
                  <Card.Title>
                    <img src={calenderIcon} height="20" width="20" />
                    &nbsp; Upcoming Events
                  </Card.Title>
                  <Card.Text>
                    With supporting text below as a natural lead-in to
                    additional content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div className="col-4">
              <Card className="text-center" style={{ height: "100%" }}>
                <Card.Body>
                  <img src={plusIcon} height="20" width="20" />
                  <h5>Create Events</h5>
                </Card.Body>
              </Card>
            </div>
          </div>
          <Scheduler
            locale="en"
            events={events}
            legacyStyle={false}
            options={state?.options}
            alertProps={state?.alertProps}
            toolbarProps={state?.toolbarProps}
            onEventsChange={handleEventsChange}
            onCellClick={handleCellClick}
            onTaskClick={handleEventClick}
            onAlertCloseButtonClicked={handleAlertCloseButtonClicked}
          />
        </div>

        <div className="col-md-6">
        <div className="row my-4">
            <div className="col-6">
              <Card className="text-center">
                <Card.Body>
                  <Card.Title>
                    <h2>12</h2>
                  </Card.Title>
                  <Card.Text>
                    Total Courses
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div className="col-6">
            <Card className="text-center">
                <Card.Body>
                  <Card.Title>
                    <h2>98</h2>
                  </Card.Title>
                  <Card.Text>
                    Total Students
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </div>
          <div className="row my-4">
            <div className="col-8">
              <Card className="text-center">
                <Card.Body>
                  <Card.Title>
                    <img src={calenderIcon} height="20" width="20" />
                    &nbsp; Upcoming Events
                  </Card.Title>
                  <Card.Text>
                    With supporting text below as a natural lead-in to
                    additional content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div className="col-4">
              <Card className="text-center" style={{ height: "100%" }}>
                <Card.Body>
                  <img src={plusIcon} height="20" width="20" />
                  <h5>Create Events</h5>
                </Card.Body>
              </Card>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <h4 className="mb-3">Upcoming Apointments</h4>
              <Table striped bordered hover size="sm" className="text-center">
                <thead>
                  <tr>
                    <th><img src={studentIcon} height="20" width="20" /> Student</th>
                    <th><img src={clockIcon} height="20" width="20" /> Time</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Mark</td>
                    <td> 07:40 pm</td>
                  </tr>
                  <tr>
                    <td>Jacob</td>
                    <td>09:20 pm</td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
