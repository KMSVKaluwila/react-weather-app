import { useRef } from 'react';

function HorizontallyScrollable({ children, className = '' }) {
    const scrollRef = useRef();

    const handleMouseDown = (evt) => {
        const startX = evt.pageX;
        const startScrollLeft = scrollRef.current.scrollLeft;

        const handleMouseMove = (moveEvt) => {
            const newX = moveEvt.pageX;
            const offset = newX - startX;
            scrollRef.current.scrollLeft = startScrollLeft - offset;
        };

        const handleMouseUp = () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseup', handleMouseUp);
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseup', handleMouseUp);
    };

    const handleTouchStart = (evt) => {
        const startX = evt.touches[0].pageX;
        const startScrollLeft = scrollRef.current.scrollLeft;

        const handleTouchMove = (moveEvt) => {
            const newX = moveEvt.touches[0].pageX;
            const offset = newX - startX;
            scrollRef.current.scrollLeft = startScrollLeft - offset;
        };

        const handleTouchEnd = () => {
            window.removeEventListener('touchmove', handleTouchMove);
            window.removeEventListener('touchend', handleTouchEnd);
        };

        window.addEventListener('touchmove', handleTouchMove, { passive: false });
        window.addEventListener('touchend', handleTouchEnd);
    };

    return (
        <div
            className={`hide-scrollbar ${className}`}
            ref={scrollRef}
            onMouseDown={handleMouseDown}
            onTouchStart={handleTouchStart}
            style={{ overflowX: 'auto', cursor: 'grab' }} // optional styling
        >
            {children}
        </div>
    );
}

export default HorizontallyScrollable;
