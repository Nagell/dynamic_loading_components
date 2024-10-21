/** ====================================================================================
 * TYPES FOR DYNAMIC LOAD FILTERS
 *
 * If you need to test the types, you can uncomment the types at the bottom of each type
 * In case you need more domains, you can add them to the types below in marked (🟠) places
 */

import type { AllowedComponentProps, Component, VNodeProps } from 'vue'

type Prettify<T> = { [K in keyof T]: T[K] } & object

export type DynamicLoadGroups = keyof DynamicLoadList

/**
 *  Filter out a group of components by group key
 *  Output: { DOMAIN_A: { key: InjectionKey, component: Component }, DOMAIN_B: ... }
 */
type FilterGroup<G extends DynamicLoadGroups> = {
    [K in keyof DynamicLoadList]: DynamicLoadList[K] extends {
        [key in keyof DynamicLoadDomains]?: unknown
    } ? DynamicLoadList[K] : never
}[G]
// type TEST_FILTER_GROUP = FilterGroup<'DomainTestGroup_1'>

/**
 *  Filter out components for a given group by the group key
 *  Output: { DOMAIN_A: DefineComponent<...>, DOMAIN_B: ... }
 */
export type FilterComponents<G extends DynamicLoadGroups> = {
    [K in keyof FilterGroup<G>]: DynamicLoadList[G][K] extends infer C ? C : never
}
// type TEST_FILTER_COMPONENTS = FilterComponents<'DomainTestGroup_1'>

/**
 *  Filter out Props from a component
 *  Output: { Props }
 */
type ComponentProps<C extends Component> = C extends new (...args: unknown[]) => unknown
    ? Omit<InstanceType<C>['$props'], keyof VNodeProps | keyof AllowedComponentProps>
    : never

/**
 *  Filter out Props for every component from previously filtered out components
 *  Output: { DOMAIN_A: Props, DOMAIN_B: Props }
 */
type FilterComponentsProps<G extends DynamicLoadGroups> = {
    [K in keyof FilterComponents<G>]: FilterComponents<G>[K] extends Component
        ? ComponentProps<FilterComponents<G>[K]> : never
}
// type TEST_FILTER_COMPONENTS_PROPS = FilterComponentsProps<'DomainTestGroup_1'>

/**
 *  Pick Props from a component by Scope
 *  Output: Props
*/
type Domain1ComponentProps<G extends DynamicLoadGroups>
    = FilterComponentsProps<G> extends { DOMAIN_A: unknown }
        ? FilterComponentsProps<G>['DOMAIN_A'] : object
type Domain2ComponentProps<G extends DynamicLoadGroups>
    = FilterComponentsProps<G> extends { DOMAIN_B: unknown }
        ? FilterComponentsProps<G>['DOMAIN_B'] : object
// 🟠 add more domains here if needed
// type TEST_FILTER_COMPONENTS_PROPS_DOMAIN_A = Domain1ComponentProps<'DomainTestGroup_1'>
// type TEST_FILTER_COMPONENTS_PROPS_DOMAIN_B = Domain2ComponentProps<'DomainTestGroup_1'>

/**
 *  Merges all picked Props into one type
 *  Output: Props
 */
export type CombinedComponentsProps<G extends DynamicLoadGroups> = Prettify<
    Domain1ComponentProps<G>
    & Domain2ComponentProps<G>
// 🟠 add them also here to the combined type
>
// type TEST_FILTER_COMPONENTS_PROPS_ALL = CombinedComponentsProps<'DomainTestGroup_1'>
