import { createContext, useState } from "react";

export const ToggleContext = createContext({
	show: null,
	setShow: () => null,
});

export const ToggleProvider = ({ children }) => {
	const [show, setShow] = useState(false);
	const value = { show, setShow };

	return (
		<ToggleContext.Provider value={value}>{children}</ToggleContext.Provider>
	);
};
