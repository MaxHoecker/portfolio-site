import { useEffect } from "react";

export function useInsideAlerter(ref, callback) {
    useEffect(() => {
        /**
         * Alert if clicked on outside of element
         */
        function handleClickInside(event) {
            if (ref.current && ref.current.contains(event.target)) {
                callback(true);
            }
        }

        // Bind the event listener
        document.addEventListener("mousedown", handleClickInside);
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener("mousedown", handleClickInside);
        };
    }, [ref, callback]);
}