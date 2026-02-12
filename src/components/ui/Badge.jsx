import React from 'react';

const Badge = ({ children, icon: Icon, className = '' }) => {
    return (
        <div className={`flex items-center gap-2 px-4 py-2 bg-muted/50 border border-card-border rounded-lg hover:bg-muted transition-colors cursor-default ${className}`}>
            {Icon && <Icon size={16} className="text-secondary" />}
            <span className="text-sm font-medium text-foreground">{children}</span>
        </div>
    );
};

export default Badge;
