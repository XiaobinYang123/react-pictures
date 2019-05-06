import React from "react";
import {render} from "react-dom";
import {Provider} from "react-redux";
import {createStore , applyMiddleware} from "redux";
import reducer from "./reducers/index.js";
import Main from "./components/Main.js";
import { createLogger } from 'redux-logger';
import thunk from "redux-thunk";


let store = createStore(reducer,applyMiddleware(createLogger(),thunk));

render(
	<Provider store={store}>
		<Main></Main>
	</Provider>
	,
	document.getElementById("root")
)

