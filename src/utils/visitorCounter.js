/**
 * Simple unique visitor counter using a free API (Hcount)
 * or simulating it with LocalStorage if the API is unavailable.
 */

const API_BASE_URL = 'https://visit-tracker.up.railway.app/api/';

const getSystemId = () => {
    let systemId = localStorage.getItem('narendra_portfolio_system_id');
    if (!systemId) {
        systemId = 'sys_' + Math.random().toString(36).substr(2, 9) + Date.now().toString(36);
        localStorage.setItem('narendra_portfolio_system_id', systemId);
    }
    return systemId;
};

export const getVisitorCount = async () => {
    try {
        const systemId = getSystemId();

        // We call the increment endpoint with the systemId.
        const response = await fetch(`${API_BASE_URL}/visitors/increment`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ systemId })
        });

        if (!response.ok) {
            throw new Error('Failed to update visitor count');
        }

        const data = await response.json();
        return data.count || 0;
    } catch (error) {
        console.error('Error with visitor tracker:', error);

        // Fallback: try to just get the count without incrementing if POST fails
        try {
            const response = await fetch(`${API_BASE_URL}/visitors`);
            const data = await response.json();
            return data.count || 0;
        } catch (fallbackError) {
            console.error('Fallback fetch also failed:', fallbackError);
            return 0;
        }
    }
};
