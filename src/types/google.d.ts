declare interface Window {
    google?: {
        accounts: {
            id: {
                initialize: (config: {
                    client_id: string;
                    callback: (response: { credential: string }) => void;
                }) => void;
                renderButton: (
                    element: HTMLElement,
                    options: {
                        theme?: 'outline' | 'filled_blue' | 'filled_black';
                        size?: 'large' | 'medium' | 'small';
                        width?: number | string;
                    }
                ) => void;
                prompt: () => void;
            };
        };
    };
} 