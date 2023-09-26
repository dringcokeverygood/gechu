import React from 'react';
import RootRouterContainer from './routes/containers/RootRouterContainer';
import { RecoilRoot } from 'recoil';

function App() {
	return (
		<RecoilRoot>
			<div className="App h-screen bg-white-950">
				<RootRouterContainer />
			</div>
		</RecoilRoot>
	);
}

export default App;
