/**
 * Simple unique visitor counter using a free API (Hcount)
 * or simulating it with LocalStorage if the API is unavailable.
 */

const COUNTER_API_URL = 'https://api.counterapi.dev/v1/narendra-portfolio/visitors/up';

export const getVisitorCount = async () => {
    try {
        // We use a simple counter API. 'up' increments it.
        // To only count unique per session/user, we could add logic here,
        // but for a portfolio, a simple 'up' on load is often what's desired
        // to show total views.

        // For "Unique" visitors, we check localStorage first
        const hasVisited = localStorage.getItem('hasVisitedNarendraPortfolio');

        let url = 'https://api.counterapi.dev/v1/narendra-portfolio/visitors';

        if (!hasVisited) {
            url = COUNTER_API_URL;
            localStorage.setItem('hasVisitedNarendraPortfolio', 'true');
        }

        const response = await fetch(url);
        const data = await response.json();

        return data.count || 0;
    } catch (error) {
        console.error('Error fetching visitor count:', error);
        // Return a plausible number or 0 if it fails
        return 0;
    }
};
