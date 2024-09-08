import { useRef, useImperativeHandle, forwardRef, useState } from 'react';
import { X, ArrowsOut, ArrowsIn } from 'phosphor-react';
import './styles/SidebarC.css'; 

const SidebarC = forwardRef((props, ref) => {
    const { open = false, fullScreen = false, children, className = '', onClose, title } = props;
    const [isFullScreen, setIsFullScreen] = useState(fullScreen);
    const bodyRef = useRef(null);

    const handleClose = () => {
        if (onClose) {
            onClose();
        }
    };

    const handleToggleFullScreen = () => {
        setIsFullScreen(prev => !prev);
    };

    useImperativeHandle(
        ref,
        () => ({
            top(hash) {
                if (!hash) {
                    bodyRef.current?.scrollTo(0, 0);
                    return;
                }
                const element = document.getElementById(hash);
                if (element) {
                    bodyRef.current?.scrollTo({
                        top: element.offsetTop
                    });
                }
            }
        }),
        []
    );

    const style = isFullScreen ? 'sidebar-fullscreen' : 'sidebar-normal';
    const sidebarClassName = `${open ? 'sidebar-open' : 'sidebar-closed'} ${isFullScreen ? 'sidebar-fullscreen' : ''}`;

    return (
        <aside
            className={`sidebar ${sidebarClassName} ${className}`}
            aria-label='Sidebar'
        >
            <div className='sidebar-header'>
                <h2 className='sidebar-title'>{title}</h2>
                <div className='sidebar-header-buttons'>
                    <button className='sidebar-fullscreen-button' onClick={handleToggleFullScreen}>
                        {isFullScreen ? <ArrowsIn size={24} color="#333" /> : <ArrowsOut size={24} color="#333" />}
                    </button>
                    <button className='sidebar-close-button' onClick={handleClose}>
                        <X size={24} color="#333" />
                    </button>
                </div>
            </div>
            <div
                className='sidebar-content'
                ref={bodyRef}
            >
                <div className={style}>{children}</div>
            </div>
        </aside>
    );
});

export default SidebarC;
