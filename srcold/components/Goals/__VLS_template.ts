import { chevronForwardOutline } from "ionicons/icons";
import { __VLS_internalComponent, __VLS_componentsOption, __VLS_name, goals, selectGoal, selectedGoal } from "./MyGoals.vue";

function __VLS_template() {
let __VLS_ctx!: InstanceType<__VLS_PickNotAny<typeof __VLS_internalComponent, new () => {}>> & {};
/* Components */
let __VLS_otherComponents!: NonNullable<typeof __VLS_internalComponent extends { components: infer C; } ? C : {}> & typeof __VLS_componentsOption;
let __VLS_own!: __VLS_SelfComponent<typeof __VLS_name, typeof __VLS_internalComponent & (new () => { $slots: typeof __VLS_slots; })>;
let __VLS_localComponents!: typeof __VLS_otherComponents & Omit<typeof __VLS_own, keyof typeof __VLS_otherComponents>;
let __VLS_components!: typeof __VLS_localComponents & __VLS_GlobalComponents & typeof __VLS_ctx;
/* Style Scoped */
type __VLS_StyleScopedClasses = {} &
{ 'goals-list'?: boolean; } &
{ 'goal-item'?: boolean; } &
{ 'goal-status'?: boolean; } &
{ 'half'?: boolean; } &
{ 'goals-header'?: boolean; } &
{ 'show-all-button'?: boolean; };
let __VLS_styleScopedClasses!: __VLS_StyleScopedClasses | keyof __VLS_StyleScopedClasses | (keyof __VLS_StyleScopedClasses)[];
/* CSS variable injection */
/* CSS variable injection end */
let __VLS_resolvedLocalAndGlobalComponents!: {} &
__VLS_WithComponent<'IonPage', typeof __VLS_localComponents, "IonPage", "ionPage", "ion-page"> &
__VLS_WithComponent<'IonButton', typeof __VLS_localComponents, "IonButton", "ionButton", "ion-button"> &
__VLS_WithComponent<'IonContent', typeof __VLS_localComponents, "IonContent", "ionContent", "ion-content"> &
__VLS_WithComponent<'IonList', typeof __VLS_localComponents, "IonList", "ionList", "ion-list"> &
__VLS_WithComponent<'IonItem', typeof __VLS_localComponents, "IonItem", "ionItem", "ion-item"> &
__VLS_WithComponent<'IonLabel', typeof __VLS_localComponents, "IonLabel", "ionLabel", "ion-label"> &
__VLS_WithComponent<'IonIcon', typeof __VLS_localComponents, "IonIcon", "ionIcon", "ion-icon">;
__VLS_components.IonPage; __VLS_components.IonPage; __VLS_components.ionPage; __VLS_components.ionPage; __VLS_components["ion-page"]; __VLS_components["ion-page"];
// @ts-ignore
[IonPage, IonPage,];
__VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div;
__VLS_intrinsicElements.h1; __VLS_intrinsicElements.h1;
__VLS_components.IonButton; __VLS_components.IonButton; __VLS_components.ionButton; __VLS_components.ionButton; __VLS_components["ion-button"]; __VLS_components["ion-button"];
// @ts-ignore
[IonButton, IonButton,];
__VLS_components.IonContent; __VLS_components.IonContent; __VLS_components.ionContent; __VLS_components.ionContent; __VLS_components["ion-content"]; __VLS_components["ion-content"];
// @ts-ignore
[IonContent, IonContent,];
__VLS_components.IonList; __VLS_components.IonList; __VLS_components.ionList; __VLS_components.ionList; __VLS_components["ion-list"]; __VLS_components["ion-list"];
// @ts-ignore
[IonList, IonList,];
__VLS_components.IonItem; __VLS_components.IonItem; __VLS_components.ionItem; __VLS_components.ionItem; __VLS_components["ion-item"]; __VLS_components["ion-item"];
// @ts-ignore
[IonItem, IonItem,];
__VLS_components.IonLabel; __VLS_components.IonLabel; __VLS_components.ionLabel; __VLS_components.ionLabel; __VLS_components["ion-label"]; __VLS_components["ion-label"];
// @ts-ignore
[IonLabel, IonLabel,];
__VLS_components.IonIcon; __VLS_components.IonIcon; __VLS_components.ionIcon; __VLS_components.ionIcon; __VLS_components["ion-icon"]; __VLS_components["ion-icon"];
// @ts-ignore
[IonIcon, IonIcon,];
{
const __VLS_0 = ({} as 'IonPage' extends keyof typeof __VLS_ctx ? { 'IonPage': typeof __VLS_ctx.IonPage; } : 'ionPage' extends keyof typeof __VLS_ctx ? { 'IonPage': typeof __VLS_ctx.ionPage; } : 'ion-page' extends keyof typeof __VLS_ctx ? { 'IonPage': (typeof __VLS_ctx)["ion-page"]; } : typeof __VLS_resolvedLocalAndGlobalComponents).IonPage;
const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ ...{}, }));
({} as { IonPage: typeof __VLS_0; }).IonPage;
({} as { IonPage: typeof __VLS_0; }).IonPage;
const __VLS_2 = __VLS_1({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_1));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_0, typeof __VLS_2> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_3 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2)!;
let __VLS_4!: __VLS_NormalizeEmits<typeof __VLS_3.emit>;
{
const __VLS_5 = __VLS_intrinsicElements["div"];
const __VLS_6 = __VLS_elementAsFunctionalComponent(__VLS_5);
const __VLS_7 = __VLS_6({ ...{}, class: ("goals-header"), }, ...__VLS_functionalComponentArgsRest(__VLS_6));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_5, typeof __VLS_7> & Record<string, unknown>) => void)({ ...{}, class: ("goals-header"), });
const __VLS_8 = __VLS_pickFunctionalComponentCtx(__VLS_5, __VLS_7)!;
let __VLS_9!: __VLS_NormalizeEmits<typeof __VLS_8.emit>;
{
const __VLS_10 = __VLS_intrinsicElements["h1"];
const __VLS_11 = __VLS_elementAsFunctionalComponent(__VLS_10);
const __VLS_12 = __VLS_11({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_11));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_10, typeof __VLS_12> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_13 = __VLS_pickFunctionalComponentCtx(__VLS_10, __VLS_12)!;
let __VLS_14!: __VLS_NormalizeEmits<typeof __VLS_13.emit>;
(__VLS_13.slots!).default;
}
{
const __VLS_15 = ({} as 'IonButton' extends keyof typeof __VLS_ctx ? { 'IonButton': typeof __VLS_ctx.IonButton; } : 'ionButton' extends keyof typeof __VLS_ctx ? { 'IonButton': typeof __VLS_ctx.ionButton; } : 'ion-button' extends keyof typeof __VLS_ctx ? { 'IonButton': (typeof __VLS_ctx)["ion-button"]; } : typeof __VLS_resolvedLocalAndGlobalComponents).IonButton;
const __VLS_16 = __VLS_asFunctionalComponent(__VLS_15, new __VLS_15({ ...{}, fill: ("clear"), class: ("show-all-button"), }));
({} as { IonButton: typeof __VLS_15; }).IonButton;
({} as { IonButton: typeof __VLS_15; }).IonButton;
const __VLS_17 = __VLS_16({ ...{}, fill: ("clear"), class: ("show-all-button"), }, ...__VLS_functionalComponentArgsRest(__VLS_16));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_15, typeof __VLS_17> & Record<string, unknown>) => void)({ ...{}, fill: ("clear"), class: ("show-all-button"), });
const __VLS_18 = __VLS_pickFunctionalComponentCtx(__VLS_15, __VLS_17)!;
let __VLS_19!: __VLS_NormalizeEmits<typeof __VLS_18.emit>;
(__VLS_18.slots!).default;
}
(__VLS_8.slots!).default;
}
{
const __VLS_20 = ({} as 'IonContent' extends keyof typeof __VLS_ctx ? { 'IonContent': typeof __VLS_ctx.IonContent; } : 'ionContent' extends keyof typeof __VLS_ctx ? { 'IonContent': typeof __VLS_ctx.ionContent; } : 'ion-content' extends keyof typeof __VLS_ctx ? { 'IonContent': (typeof __VLS_ctx)["ion-content"]; } : typeof __VLS_resolvedLocalAndGlobalComponents).IonContent;
const __VLS_21 = __VLS_asFunctionalComponent(__VLS_20, new __VLS_20({ ...{}, }));
({} as { IonContent: typeof __VLS_20; }).IonContent;
({} as { IonContent: typeof __VLS_20; }).IonContent;
const __VLS_22 = __VLS_21({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_21));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_20, typeof __VLS_22> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_23 = __VLS_pickFunctionalComponentCtx(__VLS_20, __VLS_22)!;
let __VLS_24!: __VLS_NormalizeEmits<typeof __VLS_23.emit>;
{
const __VLS_25 = ({} as 'IonList' extends keyof typeof __VLS_ctx ? { 'IonList': typeof __VLS_ctx.IonList; } : 'ionList' extends keyof typeof __VLS_ctx ? { 'IonList': typeof __VLS_ctx.ionList; } : 'ion-list' extends keyof typeof __VLS_ctx ? { 'IonList': (typeof __VLS_ctx)["ion-list"]; } : typeof __VLS_resolvedLocalAndGlobalComponents).IonList;
const __VLS_26 = __VLS_asFunctionalComponent(__VLS_25, new __VLS_25({ ...{}, class: ("goals-list"), }));
({} as { IonList: typeof __VLS_25; }).IonList;
({} as { IonList: typeof __VLS_25; }).IonList;
const __VLS_27 = __VLS_26({ ...{}, class: ("goals-list"), }, ...__VLS_functionalComponentArgsRest(__VLS_26));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_25, typeof __VLS_27> & Record<string, unknown>) => void)({ ...{}, class: ("goals-list"), });
const __VLS_28 = __VLS_pickFunctionalComponentCtx(__VLS_25, __VLS_27)!;
let __VLS_29!: __VLS_NormalizeEmits<typeof __VLS_28.emit>;
for (const [goal, index] of __VLS_getVForSourceType((__VLS_ctx.goals)!)) {
{
const __VLS_30 = ({} as 'IonItem' extends keyof typeof __VLS_ctx ? { 'IonItem': typeof __VLS_ctx.IonItem; } : 'ionItem' extends keyof typeof __VLS_ctx ? { 'IonItem': typeof __VLS_ctx.ionItem; } : 'ion-item' extends keyof typeof __VLS_ctx ? { 'IonItem': (typeof __VLS_ctx)["ion-item"]; } : typeof __VLS_resolvedLocalAndGlobalComponents).IonItem;
const __VLS_31 = __VLS_asFunctionalComponent(__VLS_30, new __VLS_30({ ...{ onClick: {} as any, }, key: ((index)), class: ("goal-item"), }));
({} as { IonItem: typeof __VLS_30; }).IonItem;
({} as { IonItem: typeof __VLS_30; }).IonItem;
const __VLS_32 = __VLS_31({ ...{ onClick: {} as any, }, key: ((index)), class: ("goal-item"), }, ...__VLS_functionalComponentArgsRest(__VLS_31));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_30, typeof __VLS_32> & Record<string, unknown>) => void)({ ...{ onClick: {} as any, }, key: ((index)), class: ("goal-item"), });
const __VLS_33 = __VLS_pickFunctionalComponentCtx(__VLS_30, __VLS_32)!;
let __VLS_34!: __VLS_NormalizeEmits<typeof __VLS_33.emit>;
let __VLS_35 = { 'click': __VLS_pickEvent(__VLS_34['click'], ({} as __VLS_FunctionalComponentProps<typeof __VLS_31, typeof __VLS_32>).onClick) };
__VLS_35 = {
click: $event => {
__VLS_ctx.selectGoal(index);
// @ts-ignore
[goals, selectGoal,];
}
};
{
const __VLS_36 = __VLS_intrinsicElements["div"];
const __VLS_37 = __VLS_elementAsFunctionalComponent(__VLS_36);
const __VLS_38 = __VLS_37({ ...{}, class: ("goal-status"), slot: ("start"), }, ...__VLS_functionalComponentArgsRest(__VLS_37));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_36, typeof __VLS_38> & Record<string, unknown>) => void)({ ...{}, class: ("goal-status"), slot: ("start"), });
const __VLS_39 = __VLS_pickFunctionalComponentCtx(__VLS_36, __VLS_38)!;
let __VLS_40!: __VLS_NormalizeEmits<typeof __VLS_39.emit>;
({
full: __VLS_ctx.selectedGoal === index,
half: __VLS_ctx.selectedGoal !== index,
});
__VLS_styleScopedClasses = ({
full: selectedGoal === index,
half: selectedGoal !== index,
});
}
{
const __VLS_41 = ({} as 'IonLabel' extends keyof typeof __VLS_ctx ? { 'IonLabel': typeof __VLS_ctx.IonLabel; } : 'ionLabel' extends keyof typeof __VLS_ctx ? { 'IonLabel': typeof __VLS_ctx.ionLabel; } : 'ion-label' extends keyof typeof __VLS_ctx ? { 'IonLabel': (typeof __VLS_ctx)["ion-label"]; } : typeof __VLS_resolvedLocalAndGlobalComponents).IonLabel;
const __VLS_42 = __VLS_asFunctionalComponent(__VLS_41, new __VLS_41({ ...{}, }));
({} as { IonLabel: typeof __VLS_41; }).IonLabel;
({} as { IonLabel: typeof __VLS_41; }).IonLabel;
const __VLS_43 = __VLS_42({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_42));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_41, typeof __VLS_43> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_44 = __VLS_pickFunctionalComponentCtx(__VLS_41, __VLS_43)!;
let __VLS_45!: __VLS_NormalizeEmits<typeof __VLS_44.emit>;
(goal.text);
(__VLS_44.slots!).default;
}
{
const __VLS_46 = ({} as 'IonIcon' extends keyof typeof __VLS_ctx ? { 'IonIcon': typeof __VLS_ctx.IonIcon; } : 'ionIcon' extends keyof typeof __VLS_ctx ? { 'IonIcon': typeof __VLS_ctx.ionIcon; } : 'ion-icon' extends keyof typeof __VLS_ctx ? { 'IonIcon': (typeof __VLS_ctx)["ion-icon"]; } : typeof __VLS_resolvedLocalAndGlobalComponents).IonIcon;
const __VLS_47 = __VLS_asFunctionalComponent(__VLS_46, new __VLS_46({ ...{}, icon: ((__VLS_ctx.chevronForwardOutline)), slot: ("end"), }));
({} as { IonIcon: typeof __VLS_46; }).IonIcon;
({} as { IonIcon: typeof __VLS_46; }).IonIcon;
const __VLS_48 = __VLS_47({ ...{}, icon: ((__VLS_ctx.chevronForwardOutline)), slot: ("end"), }, ...__VLS_functionalComponentArgsRest(__VLS_47));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_46, typeof __VLS_48> & Record<string, unknown>) => void)({ ...{}, icon: ((__VLS_ctx.chevronForwardOutline)), slot: ("end"), });
const __VLS_49 = __VLS_pickFunctionalComponentCtx(__VLS_46, __VLS_48)!;
let __VLS_50!: __VLS_NormalizeEmits<typeof __VLS_49.emit>;
}
(__VLS_33.slots!).default;
}
// @ts-ignore
[selectedGoal, selectedGoal, chevronForwardOutline, chevronForwardOutline, chevronForwardOutline,];
}
(__VLS_28.slots!).default;
}
(__VLS_23.slots!).default;
}
(__VLS_3.slots!).default;
}
if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
__VLS_styleScopedClasses["goals-header"];
__VLS_styleScopedClasses["show-all-button"];
__VLS_styleScopedClasses["goals-list"];
__VLS_styleScopedClasses["goal-item"];
__VLS_styleScopedClasses["goal-status"];
}
var __VLS_slots!: {};
return __VLS_slots;
}
