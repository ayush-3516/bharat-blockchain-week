import { useState, useEffect } from 'react';

export default function ReadMe() {
    const [readmeContent, setReadmeContent] = useState('');

    useEffect(() => {
        async function fetchReadme() {
            try {
                const response = await fetch('/api/readme');
                const data = await response.json();
                setReadmeContent(data.readmeContent);
            } catch (error) {
                console.error('Error fetching README.md:', error);
            }
        }
        fetchReadme();
    }, []);

    return (
        <div>
            <h1>README Content</h1>
            <pre
                className='bg-gray-800 text-gray-400 p-4 rounded-lg overflow-auto'
            >{readmeContent}</pre>
        </div>
    );
}
