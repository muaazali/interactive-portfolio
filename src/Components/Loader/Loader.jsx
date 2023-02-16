import React from "react";
import "./Loader.css";

export default function Loader(props) {
	return (
		<div class="wrapper">
			<div class="circle"></div>
			<div class="circle"></div>
			<div class="circle"></div>
			<div class="shadow"></div>
			<div class="shadow"></div>
			<div class="shadow"></div>
			<span>Loading ({Math.floor(props.progress)}%)</span>
		</div>
	);
}
