import React, { useState, useEffect } from 'react';

const ClientOnly = ({ children, ...delegated }) =>{
	const [isOk, setOk] = useState(false);

	useEffect(() => {
    setOk(true);

	}, []);

	if (!isOk) {
		return null;
	}

	return <div {...delegated}>{children}</div>;
}

export default ClientOnly
