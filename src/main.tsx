import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root") as HTMLDivElement).render(
	<BrowserRouter>
		<App />
	</BrowserRouter>
);