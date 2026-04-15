// Base URL for API calls.
// Empty string in dev (Vite proxy handles /api → localhost:8000).
// Set VITE_API_BASE_URL to your Railway URL in production.
export const API_BASE = import.meta.env.VITE_API_BASE_URL ?? ''
