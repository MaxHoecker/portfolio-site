import { Transition } from '@headlessui/react';

export default function SlideLeft(props) {
    const { show, children } = props;
    return (
        <Transition
            show={show}
            enter="transform transition ease-out duration-700"
            enterFrom="opacity-0 -translate-x-full"
            enterTo="opacity-100 -translate-x-0"
            leave="transform transition ease-out duration-500"
            leaveFrom="opacity-100 -translate-x-0"
            leaveTo="opacity-0 -translate-x-full"
        >
            {children}
        </Transition>
    );
}