import React from 'react';

const styles = {
    page: {
        background: '#f9f9f9',
        width: '100%'
    }
};

export default function Layout({children}) {
  return (
    <div>
        {/* App Bar */}
        {/* Side Drawer */}
        <div styles={styles.page}>
            {children}
        </div>
    </div>
  )
}
