import type { Component } from 'vue'

export type DynamicLoadListShape = {
    [key: string]: {
        [key in keyof DynamicLoadDomains]?: Component
    }
}
