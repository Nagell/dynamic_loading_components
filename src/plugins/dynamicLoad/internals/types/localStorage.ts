// localStorage values
export const DOMAIN = {
    DOMAIN_A: 'domain_A',
    DOMAIN_B: 'domain_B',
} as const

// Types
export type Domain = keyof typeof DOMAIN
export type DomainValue = ObjectValues<typeof DOMAIN>
