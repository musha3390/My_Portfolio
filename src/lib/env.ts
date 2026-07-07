export const env = {
    isDevlopment: process.env.NODE_ENV === "development",
    isProduction: process.env.VERCEL_ENV === "production",
    isPreview: process.env.VERCEL_ENV === 'preview', 
}