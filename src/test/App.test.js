import React from "react";
import ReactDOM from "react-dom";
import App from "../App";
import { shallow } from "enzyme";
import "./setup";

describe("<App/>", () => {
	const wrapper = shallow(<App />);

	it("renders without crashing", () => {
		const div = document.createElement("div");
		ReactDOM.render(<App />, div);
		ReactDOM.unmountComponentAtNode(div);
	});

	it("didnt have a state", () => {
		expect(wrapper.state).not.toEqual(undefined);
	});

	it("have a header", () => {
		let list = wrapper.find("header");
		expect(list).toHaveLength(1);
	});

	it("should start with empty list ", () => {
		let todostate = wrapper.state("todos");
		expect(todostate).toEqual([]);
	});
});
