const appConfig = {
    isProduction: process.env.NEXT_PUBLIC_APP_APP_ENV === 'prod' || false,
    isTesting: process.env.NEXT_PUBLIC_APP_APP_ENV === 'test' || false,
    appEnv: process.env.NEXT_PUBLIC_APP_APP_ENV || 'local',
    appName: process.env.NEXT_PUBLIC_APP_APP_NAME || 'Avenir Infographic',
    appUrl: process.env.NEXT_PUBLIC_APP_APP_URL || 'http://localhost:3000',
    apiUrl: process.env.NEXT_PUBLIC_APP_FRONTEND_API_URL || 'http://localhost:3001'
}

export default appConfig
