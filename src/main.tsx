import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import RootLayout from "./components/RootLayout.tsx";
import NotFound from "./components/NotFound.tsx";
import HomePage from "./pages/HomePage.tsx";
import CrossChainProtocol from "./pages/CrossChainProtocol.tsx";
import MultiChainBridge from "./pages/MultiChainBridge.tsx";
import SmartContractAutomation from "./pages/SmartContractAutomation.tsx";
import OffChainDataIngestion from "./pages/OffChainDataIngestion.tsx";

const router = createBrowserRouter([
	{
		path: "/",
		Component: RootLayout,
		children: [
			{ index: true, Component: HomePage },
			{ path: "features/cross-chain-protocol", Component: CrossChainProtocol },
			{ path: "features/multi-chain-bridge", Component: MultiChainBridge },
			{
				path: "features/smart-contract-automation",
				Component: SmartContractAutomation,
			},
			{ path: "features/computation-abstraction-layer", Component: HomePage },
			{ path: "features/asset-price-feed", Component: HomePage },
			{
				path: "features/off-chain-data-ingestion-layer",
				Component: OffChainDataIngestion,
			},
			{ path: "*", Component: NotFound },
		],
	},
]);

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>,
);
