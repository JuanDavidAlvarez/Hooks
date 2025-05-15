import React, { useState } from 'react';
import { Sidebar } from 'primereact/sidebar';
import { Button } from 'primereact/button';
import { Menu } from 'primereact/menu';
import { Toast } from 'primereact/toast';
import { useRef } from 'react';

const SidebarMenu = () => {
    const [visible, setVisible] = useState(false);
    const toast = useRef(null);

    const handleInicioClick = () => {
        toast.current.show({ severity: 'success', summary: '¡Hola!', detail: 'Te deseo un feliz día 😊', life: 3000 });
    };

    const items = [
        { label: 'Inicio', icon: 'pi pi-home', command: handleInicioClick },
        { label: 'Perfil', icon: 'pi pi-user', url: '#perfil' },
        { label: 'Configuración', icon: 'pi pi-cog', url: '#configuracion' }
    ];

    return (
        <div className="sidebar-container">
            <Toast ref={toast} />
            <Button icon="pi pi-bars" label="Mostrar menú" onClick={() => setVisible(true)} />
            
            <Sidebar visible={visible} onHide={() => setVisible(false)}>
                <h3>Menú de Navegación</h3>
                <Menu model={items} />
            </Sidebar>
        </div>
    );
};

export default SidebarMenu;