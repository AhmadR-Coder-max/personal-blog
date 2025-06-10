tailwind.config = {
    content: [
        '../public/*.html',
        '../app/helpers/**/*.rb',
        '../app/javascript/**/*.js',
        '../app/views/**/*.{erb,haml,html,slim}'
    ],
    theme: {
        extend: {
            colors: {
                'slate-950': '#020617',
                'slate-900': '#0f172a',
                'slate-800': '#1e293b',
                'blue-500': '#3b82f6',
                'blue-600': '#2563eb',
                'emerald-400': '#34d399',
                'purple-500': '#8b5cf6'
            },
        },
    },
    plugins: [],
}