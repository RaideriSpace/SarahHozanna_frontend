module.exports = {
	theme: {
		extend: {
			animation: {
				"scroll-slow": "scroll 60s linear infinite",
				"scroll-normal": "scroll 40s linear infinite",
				"scroll-fast": "scroll 20s linear infinite",
			},
			keyframes: {
				scroll: {
					from: {
						transform: "translateX(0)",
					},
					to: {
						transform: "translateX(-100%)",
					},
				},
			},
		},
	},
};