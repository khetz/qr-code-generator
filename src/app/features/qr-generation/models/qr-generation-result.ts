export interface QrGenerationResult {
    type: 'url' | 'wifi' | 'vcard' | 'email' | 'sms' | 'phone' | 'text';
    label: string;
    content: string;
    fields: Record<string, string>;
}