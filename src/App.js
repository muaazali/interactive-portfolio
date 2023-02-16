import logo from './logo.svg';
import './App.css';
import Unity, { UnityContext } from "react-unity-webgl";
import { useEffect, useState } from "react";
import { isMobile } from "react-device-detect";
import Loader from "./Components/Loader/Loader";

const unityContext = new UnityContext({
	loaderUrl: "build/game.loader.js",
	dataUrl: "build/game.data",
	frameworkUrl: "build/game.framework.js",
	codeUrl: "build/game.wasm",
});

function App() {
	const [progression, setProgression] = useState(0);

	useEffect(function () {
		unityContext.on("progress", function (progression) {
			setProgression(progression);
		});
	}, []);

	// useEffect(() => {
	// 	if (progression >= 1) {
	// 		fullScreen();
	// 	}
	// }, [progression]);

	const fullScreen = () => {
		unityContext.setFullscreen(true);
	};

	return (
		<div className="main-wrapper">
			{progression < 1 ? <Loader progress={progression * 100}></Loader> : ""}
			<Unity
				unityContext={unityContext}
				style={{
					width: "100%",
				}}
			/>
			{progression >= 1 ? (
				<button
					onClick={fullScreen}
					style={{ position: "absolute", top: "5px", left: "5px" }}
				>
					Full Screen
				</button>
			) : (
				""
			)}
		</div>
	);
}

export default App;
