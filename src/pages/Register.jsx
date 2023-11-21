import React, { Component } from "react";
export default class Login extends Component {
  state = {
    first: "",
    last: "",
    username: "",
    pass: "",
    confirm: "",
  };

  handleChange = (evt) => {
    const fields = Object.assign({}, this.state);
    fields[evt.target.name] = evt.target.value;
    this.setState({ ...fields });
    console.log(this.state);
  };

  render() {
    return (
      <div className="flex justify-center">
        <div className="flex flex-col absolute top-[30%] shadow-lg border-[2px] p-5 w-[60%] rounded-lg mobile:w-[90%]">
          <text className="text-2xl">Register</text>

          <div className="flex mt-3">
            <input
              className="border-[2px] rounded-lg w-[100%] p-2 outline-[#8a4af3] focus:border-[#8a4af3] ease-linear duration-200"
              placeholder="first name"
              name="first"
              value={this.state.first}
              onChange={this.handleChange}
              required
            />

            <input
              className="border-[2px] rounded-lg w-[100%] p-2 outline-[#8a4af3] focus:border-[#8a4af3] ease-linear duration-200 ml-3"
              placeholder="last name"
              name="last"
              value={this.state.last}
              onChange={this.handleChange}
              required
            />
          </div>

          <div className="flex mt-3">
            <input
              className="border-[2px] rounded-lg w-[100%] p-2 outline-[#8a4af3] focus:border-[#8a4af3] ease-linear duration-200"
              placeholder="username"
              name="username"
              value={this.state.username}
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="flex mt-3">
            <input
              className="border-[2px] rounded-lg w-[100%] p-2 outline-[#8a4af3] focus:border-[#8a4af3] ease-linear duration-200"
              placeholder="password"
              name="pass"
              value={this.state.pass}
              onChange={this.handleChange}
              required
            />

            <input
              className="border-[2px] rounded-lg w-[100%] p-2 outline-[#8a4af3] focus:border-[#8a4af3] ease-linear duration-200 ml-3"
              placeholder="Confirm"
              name="confirm"
              value={this.state.confirm}
              onChange={this.handleChange}
              required
            />
          </div>
          <input
            type="button"
            value="Register"
            className="btn mt-7 hover:scale-[1.02]"
          />
        </div>
      </div>
    );
  }
}
