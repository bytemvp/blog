// Theme management functions for client-side interaction
export function getThemePreference(): 'light' | 'dark' {
	if (typeof localStorage !== 'undefined') {
		const stored = localStorage.getItem('theme');
		if (stored === 'light' || stored === 'dark') {
			return stored;
		}
	}
	// Check system preference
	if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
		return 'dark';
	}
	return 'light';
}

export function setTheme(theme: 'light' | 'dark'): void {
	document.documentElement.setAttribute('data-theme', theme);
	if (typeof localStorage !== 'undefined') {
		localStorage.setItem('theme', theme);
	}
}

export function toggleTheme(): 'light' | 'dark' {
	const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
	const newTheme = currentTheme === 'light' ? 'dark' : 'light';
	setTheme(newTheme);
	return newTheme;
}
