import Toggle from "./toggle";

export default function Nav() {
    return (
        <>
            <Toggle />
            <div className="bg-grey-200 dark:bg-grey-700 min-h-800px flex items-center justify-center">
                <h1 className="text-7xl text-grey-700 dark:text-grey-200 font-bold mx-auto">
                    <span className="text-transparent bg-gradient-to-r bg-clip-text from-red-600 to-yellow-500">
                        88 CREATE
                    </span>
                    <br />
                    Coming Soon
                </h1>
            </div>
        </>
    );
}