import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';

export default function Toggle() {
    const [isMounted, setIsMounted] = useState(false);
    const [enabled, setEnabled] = useState(false);
    const { theme, setTheme } = useTheme();

    useEffect(() => {
        setIsMounted(true);
    }, []);

    const switchTheme = () => {
        if (isMounted) {
            setTheme(theme === 'light' ? 'dark' : 'light');
        }
    };

    return (
        <div>
            {/* <!-- This example requires Tailwind CSS v2.0+ --> */}
            {/* <!-- On: "bg-indigo-600", Off: "bg-gray-200" --> */}
            <div className="flex justify-center pt-4 bg-grey-200 dark:bg-grey-700">
                <div>
                    <svg
                        viewBox="0 0 24 24"
                        className="w-7 h-7 stroke-current text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                        />
                    </svg>
                </div>
                <div>
                    <button
                        onClick={() => {
                            switchTheme();
                            setEnabled(!enabled);
                        }}
                        type="button"
                        aria-pressed="false"
                        className={`${
                            enabled ? 'bg-blue-200' : 'bg-gray-600'
                        } ml-3 mr-3 relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}>
                        <span className="sr-only">Use setting</span>
                        {/* <!-- On: "translate-x-5", Off: "translate-x-0" --> */}
                        <span
                            aria-hidden="true"
                            className={`${
                                enabled ? 'translate-x-0' : 'translate-x-5'
                            } inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200`}></span>
                    </button>
                </div>
                <div>
                    <svg
                        viewBox="0 0 24 24"
                        className="w-7 h-7 stroke-current"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                        />
                    </svg>
                </div>
            </div>
        </div>
    );
}
