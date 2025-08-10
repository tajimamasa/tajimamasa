declare global {
	interface Window {
		gtag: (
			command: string,
			action: string | Date,
			parameters?: Record<string, unknown>,
		) => void;
		dataLayer?: IArguments[];
	}
}

export function GoogleAnalytics() {
	const gaId = import.meta.env.VITE_GA_MEASUREMENT_ID;

	if (!gaId || typeof window === "undefined") {
		return;
	}

	// Load Google Analytics script
	const script = document.createElement("script");
	script.src = `https://www.googletagmanager.com/gtag/js?id=${gaId}`;
	script.async = true;
	document.head.appendChild(script);

	// Initialize gtag
	window.dataLayer = window.dataLayer || [];
	window.gtag = window.gtag || function() {
		// eslint-disable-next-line prefer-rest-params
		window.dataLayer!.push(arguments);
	};

	window.gtag("js", new Date());
	window.gtag("config", gaId);

	return null;
}

export function trackEvent(
	action: string,
	parameters?: Record<string, unknown>,
) {
	if (typeof window !== "undefined" && window.gtag) {
		window.gtag("event", action, parameters);
	}
}
