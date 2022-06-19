export * from './inertia';

export type FormStatus = 'idle' | 'processing' | 'success' | 'error';

export interface Toast {
    _id?: string;
    message: string;
    status?: 'success' | 'error' | 'default' | 'warning';
    timeout?: number;
}
