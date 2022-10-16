import React, { useEffect, useState, useRef } from "react";
import "./App.css";

// import video from "./assets/video.mp4";
import Example from "./Emoji";
import Emoji from "./emoji_lib";
// import useVideoPlayer from "./hooks/useVideoPlayer";

const App = () => {
	const [playerState, setPlayerState] = useState({
		isPlaying: false,
		progress: 0,
		speed: 1,
		isMuted: false,
	});
	const videoElement = useRef(null);

	const togglePlay = () => {
		setPlayerState({
			...playerState,
			isPlaying: !playerState.isPlaying,
		});
	};

	useEffect(() => {
		playerState.isPlaying
			? videoElement.current.play()
			: videoElement.current.pause();
	}, [playerState.isPlaying, videoElement]);

	const handleOnTimeUpdate = () => {
		const progress =
			(videoElement.current.currentTime / videoElement.current.duration) * 100;
		setPlayerState({
			...playerState,
			progress,
		});
	};

	const handleVideoProgress = (event) => {
		const manualChange = Number(event.target.value);
		videoElement.current.currentTime =
			(videoElement.current.duration / 100) * manualChange;
		console.log(
			videoElement.current.currentTime,
			videoElement.current.duration,
			manualChange
		);

		setPlayerState({
			...playerState,
			progress: manualChange,
		});
	};

	const handleVideoSpeed = (event) => {
		const speed = Number(event.target.value);
		videoElement.current.playbackRate = speed;
		setPlayerState({
			...playerState,
			speed,
		});
	};

	const toggleMute = () => {
		setPlayerState({
			...playerState,
			isMuted: !playerState.isMuted,
		});
	};

	useEffect(() => {
		playerState.isMuted
			? (videoElement.current.muted = true)
			: (videoElement.current.muted = false);
	}, [playerState.isMuted, videoElement]);

	return (
		<>
			<div className="container">
				<div className="video-wrapper">
					<video
						src="blob:http://localhost:11111/e2a37a47-3547-49d7-8cd1-5ab7eb3f2398"
						autoPlay={true}
						ref={videoElement}
						onTimeUpdate={handleOnTimeUpdate}
					/>
					<div className="controls">
						<div className="actions">
							<button onClick={togglePlay}>
								{!playerState.isPlaying ? (
									<i className="bx bx-play"></i>
								) : (
									<i className="bx bx-pause"></i>
								)}
							</button>
						</div>

						<input
							type="range"
							min="0"
							max="100"
							value={playerState.progress}
							onChange={handleVideoProgress}
						/>
						<select
							className="velocity"
							value={playerState.speed}
							onChange={(e) => handleVideoSpeed(e)}
						>
							<option value="0.50">0.50x</option>
							<option value="1">1x</option>
							<option value="1.25">1.25x</option>
							<option value="2">2x</option>
						</select>
						<button className="mute-btn" onClick={toggleMute}>
							{!playerState.isMuted ? (
								<i className="bx bxs-volume-full"></i>
							) : (
								<i className="bx bxs-volume-mute"></i>
							)}
						</button>
					</div>
				</div>
			</div>
			{/* <Emoji /> */}
		</>
	);
};

export default App;
