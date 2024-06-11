import React from "react";

export default function Homepage() {
  return (
    <header className="py-5">
      <div className="container px-lg-5">
        <div className="p-4 p-lg-5 bg-light rounded-3 text-center">
          <div className="m-4 m-lg-5">
            <h1 className="display-5 fw-bold">Welcome to the Front-End part of the application</h1>
            <p className="fs-4 pt-4">
              Here you can view the fetched data, make sure to navigate by clicking the buttons on the navigation bar on top.
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
