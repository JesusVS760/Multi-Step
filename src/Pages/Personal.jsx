import React from "react";
import "./Personal.css";
import Steps from "../components/Steps";
import NextStep from "../components/NextStep";
import { useForm } from "react-hook-form";

const Personal = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="personal-container">
      <div className="sidebar-container">
        <Steps page={1} />
      </div>
      <div className="personal-content">
        <div className="personal-header">
          <h1>Personal Info</h1>
          <p>Please provide your name, email address, and phone number.</p>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="personal-input">
          <div className="personal-name">
            <p>Name</p>
            <input {...register("name")} placeholder="John Smith" />
          </div>
          <div className="personal-email">
            <p>Email Address</p>
            <input
              {...register("email")}
              placeholder="JohnSmith123@gmail.com"
            />
          </div>
          <div className="personal-number button-push">
            <p>Phone Number</p>
            <input {...register("phone")} placeholder="e.g.+1 234 567 890" />
          </div>
          <NextStep data={data} to={"/select"} />
        </form>
        <div className="next-step-button">
          {/* <NextStep type="submit" to={"/select"} /> */}
        </div>
      </div>
    </div>
  );
};

export default Personal;
