import {
IonPage,
IonHeader,
IonSearchbar, IonContent,
IonList,
IonItem,
IonThumbnail,
IonImg,
IonLabel,
IonIcon
} from "@ionic/vue";
import router from "@/router/index";
import score from "@/components/Header/Header.vue";
import { __VLS_internalComponent, __VLS_componentsOption, __VLS_name, resources, openModal } from "./Academy.vue";

function __VLS_template() {
let __VLS_ctx!: InstanceType<__VLS_PickNotAny<typeof __VLS_internalComponent, new () => {}>> & {};
/* Components */
let __VLS_otherComponents!: NonNullable<typeof __VLS_internalComponent extends { components: infer C; } ? C : {}> & typeof __VLS_componentsOption;
let __VLS_own!: __VLS_SelfComponent<typeof __VLS_name, typeof __VLS_internalComponent & (new () => { $slots: typeof __VLS_slots; })>;
let __VLS_localComponents!: typeof __VLS_otherComponents & Omit<typeof __VLS_own, keyof typeof __VLS_otherComponents>;
let __VLS_components!: typeof __VLS_localComponents & __VLS_GlobalComponents & typeof __VLS_ctx;
/* Style Scoped */
type __VLS_StyleScopedClasses = {} &
{ 'list-ios'?: boolean; } &
{ 'resource-item'?: boolean; } &
{ 'titleStyle'?: boolean; } &
{ 'custom-searchbar'?: boolean; } &
{ 'resource-thumbnail'?: boolean; } &
{ 'resource-thumbnail'?: boolean; } &
{ 'resource-title'?: boolean; } &
{ 'resource-title'?: boolean; } &
{ 'resource-info'?: boolean; } &
{ 'play-icon'?: boolean; } &
{ 'desClass'?: boolean; } &
{ 'addStyle'?: boolean; };
let __VLS_styleScopedClasses!: __VLS_StyleScopedClasses | keyof __VLS_StyleScopedClasses | (keyof __VLS_StyleScopedClasses)[];
/* CSS variable injection */
/* CSS variable injection end */
let __VLS_resolvedLocalAndGlobalComponents!: {} &
__VLS_WithComponent<'IonPage', typeof __VLS_localComponents, "IonPage", "ionPage", "ion-page"> &
__VLS_WithComponent<'IonHeader', typeof __VLS_localComponents, "IonHeader", "ionHeader", "ion-header"> &
__VLS_WithComponent<'score', typeof __VLS_localComponents, "Score", "score", "score"> &
__VLS_WithComponent<'IonContent', typeof __VLS_localComponents, "IonContent", "ionContent", "ion-content"> &
__VLS_WithComponent<'IonSearchbar', typeof __VLS_localComponents, "IonSearchbar", "ionSearchbar", "ion-searchbar"> &
__VLS_WithComponent<'IonList', typeof __VLS_localComponents, "IonList", "ionList", "ion-list"> &
__VLS_WithComponent<'IonItem', typeof __VLS_localComponents, "IonItem", "ionItem", "ion-item"> &
__VLS_WithComponent<'IonThumbnail', typeof __VLS_localComponents, "IonThumbnail", "ionThumbnail", "ion-thumbnail"> &
__VLS_WithComponent<'IonImg', typeof __VLS_localComponents, "IonImg", "ionImg", "ion-img"> &
__VLS_WithComponent<'IonLabel', typeof __VLS_localComponents, "IonLabel", "ionLabel", "ion-label"> &
__VLS_WithComponent<'IonIcon', typeof __VLS_localComponents, "IonIcon", "ionIcon", "ion-icon"> &
__VLS_WithComponent<'IonFab', typeof __VLS_localComponents, "IonFab", "ionFab", "ion-fab"> &
__VLS_WithComponent<'IonFabButton', typeof __VLS_localComponents, "IonFabButton", "ionFabButton", "ion-fab-button">;
__VLS_components.IonPage; __VLS_components.IonPage; __VLS_components.ionPage; __VLS_components.ionPage; __VLS_components["ion-page"]; __VLS_components["ion-page"];
// @ts-ignore
[IonPage, IonPage,];
__VLS_components.IonHeader; __VLS_components.IonHeader; __VLS_components.ionHeader; __VLS_components.ionHeader; __VLS_components["ion-header"]; __VLS_components["ion-header"];
// @ts-ignore
[IonHeader, IonHeader,];
__VLS_components.Score; __VLS_components.score;
// @ts-ignore
[score,];
__VLS_components.IonContent; __VLS_components.IonContent; __VLS_components.ionContent; __VLS_components.ionContent; __VLS_components["ion-content"]; __VLS_components["ion-content"];
// @ts-ignore
[IonContent, IonContent,];
__VLS_intrinsicElements.h4; __VLS_intrinsicElements.h4;
__VLS_components.IonSearchbar; __VLS_components.IonSearchbar; __VLS_components.ionSearchbar; __VLS_components.ionSearchbar; __VLS_components["ion-searchbar"]; __VLS_components["ion-searchbar"];
// @ts-ignore
[IonSearchbar, IonSearchbar,];
__VLS_components.IonList; __VLS_components.IonList; __VLS_components.ionList; __VLS_components.ionList; __VLS_components["ion-list"]; __VLS_components["ion-list"];
// @ts-ignore
[IonList, IonList,];
__VLS_components.IonItem; __VLS_components.IonItem; __VLS_components.ionItem; __VLS_components.ionItem; __VLS_components["ion-item"]; __VLS_components["ion-item"];
// @ts-ignore
[IonItem, IonItem,];
__VLS_components.IonThumbnail; __VLS_components.IonThumbnail; __VLS_components.ionThumbnail; __VLS_components.ionThumbnail; __VLS_components["ion-thumbnail"]; __VLS_components["ion-thumbnail"];
// @ts-ignore
[IonThumbnail, IonThumbnail,];
__VLS_components.IonImg; __VLS_components.IonImg; __VLS_components.ionImg; __VLS_components.ionImg; __VLS_components["ion-img"]; __VLS_components["ion-img"];
// @ts-ignore
[IonImg, IonImg,];
__VLS_components.IonLabel; __VLS_components.IonLabel; __VLS_components.ionLabel; __VLS_components.ionLabel; __VLS_components["ion-label"]; __VLS_components["ion-label"];
// @ts-ignore
[IonLabel, IonLabel,];
__VLS_intrinsicElements.div; __VLS_intrinsicElements.div;
__VLS_components.IonIcon; __VLS_components.IonIcon; __VLS_components.IonIcon; __VLS_components.IonIcon; __VLS_components.ionIcon; __VLS_components.ionIcon; __VLS_components.ionIcon; __VLS_components.ionIcon; __VLS_components["ion-icon"]; __VLS_components["ion-icon"]; __VLS_components["ion-icon"]; __VLS_components["ion-icon"];
// @ts-ignore
[IonIcon, IonIcon, IonIcon, IonIcon,];
__VLS_intrinsicElements.h2; __VLS_intrinsicElements.h2;
__VLS_intrinsicElements.p; __VLS_intrinsicElements.p; __VLS_intrinsicElements.p; __VLS_intrinsicElements.p;
__VLS_components.IonFab; __VLS_components.IonFab; __VLS_components.ionFab; __VLS_components.ionFab; __VLS_components["ion-fab"]; __VLS_components["ion-fab"];
// @ts-ignore
[IonFab, IonFab,];
__VLS_components.IonFabButton; __VLS_components.IonFabButton; __VLS_components.ionFabButton; __VLS_components.ionFabButton; __VLS_components["ion-fab-button"]; __VLS_components["ion-fab-button"];
// @ts-ignore
[IonFabButton, IonFabButton,];
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
const __VLS_5 = ({} as 'IonHeader' extends keyof typeof __VLS_ctx ? { 'IonHeader': typeof __VLS_ctx.IonHeader; } : 'ionHeader' extends keyof typeof __VLS_ctx ? { 'IonHeader': typeof __VLS_ctx.ionHeader; } : 'ion-header' extends keyof typeof __VLS_ctx ? { 'IonHeader': (typeof __VLS_ctx)["ion-header"]; } : typeof __VLS_resolvedLocalAndGlobalComponents).IonHeader;
const __VLS_6 = __VLS_asFunctionalComponent(__VLS_5, new __VLS_5({ ...{}, }));
({} as { IonHeader: typeof __VLS_5; }).IonHeader;
({} as { IonHeader: typeof __VLS_5; }).IonHeader;
const __VLS_7 = __VLS_6({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_6));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_5, typeof __VLS_7> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_8 = __VLS_pickFunctionalComponentCtx(__VLS_5, __VLS_7)!;
let __VLS_9!: __VLS_NormalizeEmits<typeof __VLS_8.emit>;
{
const __VLS_10 = ({} as 'Score' extends keyof typeof __VLS_ctx ? { 'score': typeof __VLS_ctx.Score; } : 'score' extends keyof typeof __VLS_ctx ? { 'score': typeof __VLS_ctx.score; } : typeof __VLS_resolvedLocalAndGlobalComponents).score;
const __VLS_11 = __VLS_asFunctionalComponent(__VLS_10, new __VLS_10({ ...{}, }));
({} as { score: typeof __VLS_10; }).score;
const __VLS_12 = __VLS_11({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_11));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_10, typeof __VLS_12> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_13 = __VLS_pickFunctionalComponentCtx(__VLS_10, __VLS_12)!;
let __VLS_14!: __VLS_NormalizeEmits<typeof __VLS_13.emit>;
}
(__VLS_8.slots!).default;
}
{
const __VLS_15 = ({} as 'IonContent' extends keyof typeof __VLS_ctx ? { 'IonContent': typeof __VLS_ctx.IonContent; } : 'ionContent' extends keyof typeof __VLS_ctx ? { 'IonContent': typeof __VLS_ctx.ionContent; } : 'ion-content' extends keyof typeof __VLS_ctx ? { 'IonContent': (typeof __VLS_ctx)["ion-content"]; } : typeof __VLS_resolvedLocalAndGlobalComponents).IonContent;
const __VLS_16 = __VLS_asFunctionalComponent(__VLS_15, new __VLS_15({ ...{}, fullscreen: ((true)), }));
({} as { IonContent: typeof __VLS_15; }).IonContent;
({} as { IonContent: typeof __VLS_15; }).IonContent;
const __VLS_17 = __VLS_16({ ...{}, fullscreen: ((true)), }, ...__VLS_functionalComponentArgsRest(__VLS_16));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_15, typeof __VLS_17> & Record<string, unknown>) => void)({ ...{}, fullscreen: ((true)), });
const __VLS_18 = __VLS_pickFunctionalComponentCtx(__VLS_15, __VLS_17)!;
let __VLS_19!: __VLS_NormalizeEmits<typeof __VLS_18.emit>;
{
const __VLS_20 = __VLS_intrinsicElements["h4"];
const __VLS_21 = __VLS_elementAsFunctionalComponent(__VLS_20);
const __VLS_22 = __VLS_21({ ...{}, class: ("titleStyle"), }, ...__VLS_functionalComponentArgsRest(__VLS_21));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_20, typeof __VLS_22> & Record<string, unknown>) => void)({ ...{}, class: ("titleStyle"), });
const __VLS_23 = __VLS_pickFunctionalComponentCtx(__VLS_20, __VLS_22)!;
let __VLS_24!: __VLS_NormalizeEmits<typeof __VLS_23.emit>;
(__VLS_23.slots!).default;
}
{
const __VLS_25 = ({} as 'IonSearchbar' extends keyof typeof __VLS_ctx ? { 'IonSearchbar': typeof __VLS_ctx.IonSearchbar; } : 'ionSearchbar' extends keyof typeof __VLS_ctx ? { 'IonSearchbar': typeof __VLS_ctx.ionSearchbar; } : 'ion-searchbar' extends keyof typeof __VLS_ctx ? { 'IonSearchbar': (typeof __VLS_ctx)["ion-searchbar"]; } : typeof __VLS_resolvedLocalAndGlobalComponents).IonSearchbar;
const __VLS_26 = __VLS_asFunctionalComponent(__VLS_25, new __VLS_25({ ...{}, placeholder: ("Search here"), showClearButton: ("never"), class: ("custom-searchbar"), }));
({} as { IonSearchbar: typeof __VLS_25; }).IonSearchbar;
({} as { IonSearchbar: typeof __VLS_25; }).IonSearchbar;
const __VLS_27 = __VLS_26({ ...{}, placeholder: ("Search here"), showClearButton: ("never"), class: ("custom-searchbar"), }, ...__VLS_functionalComponentArgsRest(__VLS_26));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_25, typeof __VLS_27> & Record<string, unknown>) => void)({ ...{}, placeholder: ("Search here"), showClearButton: ("never"), class: ("custom-searchbar"), });
const __VLS_28 = __VLS_pickFunctionalComponentCtx(__VLS_25, __VLS_27)!;
let __VLS_29!: __VLS_NormalizeEmits<typeof __VLS_28.emit>;
}
{
const __VLS_30 = ({} as 'IonList' extends keyof typeof __VLS_ctx ? { 'IonList': typeof __VLS_ctx.IonList; } : 'ionList' extends keyof typeof __VLS_ctx ? { 'IonList': typeof __VLS_ctx.ionList; } : 'ion-list' extends keyof typeof __VLS_ctx ? { 'IonList': (typeof __VLS_ctx)["ion-list"]; } : typeof __VLS_resolvedLocalAndGlobalComponents).IonList;
const __VLS_31 = __VLS_asFunctionalComponent(__VLS_30, new __VLS_30({ ...{}, class: ("list-ios"), }));
({} as { IonList: typeof __VLS_30; }).IonList;
({} as { IonList: typeof __VLS_30; }).IonList;
const __VLS_32 = __VLS_31({ ...{}, class: ("list-ios"), }, ...__VLS_functionalComponentArgsRest(__VLS_31));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_30, typeof __VLS_32> & Record<string, unknown>) => void)({ ...{}, class: ("list-ios"), });
const __VLS_33 = __VLS_pickFunctionalComponentCtx(__VLS_30, __VLS_32)!;
let __VLS_34!: __VLS_NormalizeEmits<typeof __VLS_33.emit>;
for (const [resource, index] of __VLS_getVForSourceType((__VLS_ctx.resources)!)) {
{
const __VLS_35 = ({} as 'IonItem' extends keyof typeof __VLS_ctx ? { 'IonItem': typeof __VLS_ctx.IonItem; } : 'ionItem' extends keyof typeof __VLS_ctx ? { 'IonItem': typeof __VLS_ctx.ionItem; } : 'ion-item' extends keyof typeof __VLS_ctx ? { 'IonItem': (typeof __VLS_ctx)["ion-item"]; } : typeof __VLS_resolvedLocalAndGlobalComponents).IonItem;
const __VLS_36 = __VLS_asFunctionalComponent(__VLS_35, new __VLS_35({ ...{ onClick: {} as any, }, key: ((index)), lines: ("none"), class: ("resource-item"), }));
({} as { IonItem: typeof __VLS_35; }).IonItem;
({} as { IonItem: typeof __VLS_35; }).IonItem;
const __VLS_37 = __VLS_36({ ...{ onClick: {} as any, }, key: ((index)), lines: ("none"), class: ("resource-item"), }, ...__VLS_functionalComponentArgsRest(__VLS_36));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_35, typeof __VLS_37> & Record<string, unknown>) => void)({ ...{ onClick: {} as any, }, key: ((index)), lines: ("none"), class: ("resource-item"), });
const __VLS_38 = __VLS_pickFunctionalComponentCtx(__VLS_35, __VLS_37)!;
let __VLS_39!: __VLS_NormalizeEmits<typeof __VLS_38.emit>;
let __VLS_40 = { 'click': __VLS_pickEvent(__VLS_39['click'], ({} as __VLS_FunctionalComponentProps<typeof __VLS_36, typeof __VLS_37>).onClick) };
__VLS_40 = {
click: $event => {
__VLS_ctx.openModal(resource);
// @ts-ignore
[resources, openModal,];
}
};
{
const __VLS_41 = ({} as 'IonThumbnail' extends keyof typeof __VLS_ctx ? { 'IonThumbnail': typeof __VLS_ctx.IonThumbnail; } : 'ionThumbnail' extends keyof typeof __VLS_ctx ? { 'IonThumbnail': typeof __VLS_ctx.ionThumbnail; } : 'ion-thumbnail' extends keyof typeof __VLS_ctx ? { 'IonThumbnail': (typeof __VLS_ctx)["ion-thumbnail"]; } : typeof __VLS_resolvedLocalAndGlobalComponents).IonThumbnail;
const __VLS_42 = __VLS_asFunctionalComponent(__VLS_41, new __VLS_41({ ...{}, slot: ("start"), class: ("resource-thumbnail"), }));
({} as { IonThumbnail: typeof __VLS_41; }).IonThumbnail;
({} as { IonThumbnail: typeof __VLS_41; }).IonThumbnail;
const __VLS_43 = __VLS_42({ ...{}, slot: ("start"), class: ("resource-thumbnail"), }, ...__VLS_functionalComponentArgsRest(__VLS_42));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_41, typeof __VLS_43> & Record<string, unknown>) => void)({ ...{}, slot: ("start"), class: ("resource-thumbnail"), });
const __VLS_44 = __VLS_pickFunctionalComponentCtx(__VLS_41, __VLS_43)!;
let __VLS_45!: __VLS_NormalizeEmits<typeof __VLS_44.emit>;
{
const __VLS_46 = ({} as 'IonImg' extends keyof typeof __VLS_ctx ? { 'IonImg': typeof __VLS_ctx.IonImg; } : 'ionImg' extends keyof typeof __VLS_ctx ? { 'IonImg': typeof __VLS_ctx.ionImg; } : 'ion-img' extends keyof typeof __VLS_ctx ? { 'IonImg': (typeof __VLS_ctx)["ion-img"]; } : typeof __VLS_resolvedLocalAndGlobalComponents).IonImg;
const __VLS_47 = __VLS_asFunctionalComponent(__VLS_46, new __VLS_46({ ...{}, src: ((resource.img)), }));
({} as { IonImg: typeof __VLS_46; }).IonImg;
({} as { IonImg: typeof __VLS_46; }).IonImg;
const __VLS_48 = __VLS_47({ ...{}, src: ((resource.img)), }, ...__VLS_functionalComponentArgsRest(__VLS_47));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_46, typeof __VLS_48> & Record<string, unknown>) => void)({ ...{}, src: ((resource.img)), });
const __VLS_49 = __VLS_pickFunctionalComponentCtx(__VLS_46, __VLS_48)!;
let __VLS_50!: __VLS_NormalizeEmits<typeof __VLS_49.emit>;
}
(__VLS_44.slots!).default;
}
{
const __VLS_51 = ({} as 'IonLabel' extends keyof typeof __VLS_ctx ? { 'IonLabel': typeof __VLS_ctx.IonLabel; } : 'ionLabel' extends keyof typeof __VLS_ctx ? { 'IonLabel': typeof __VLS_ctx.ionLabel; } : 'ion-label' extends keyof typeof __VLS_ctx ? { 'IonLabel': (typeof __VLS_ctx)["ion-label"]; } : typeof __VLS_resolvedLocalAndGlobalComponents).IonLabel;
const __VLS_52 = __VLS_asFunctionalComponent(__VLS_51, new __VLS_51({ ...{}, class: ("ion-text-wrap"), }));
({} as { IonLabel: typeof __VLS_51; }).IonLabel;
({} as { IonLabel: typeof __VLS_51; }).IonLabel;
const __VLS_53 = __VLS_52({ ...{}, class: ("ion-text-wrap"), }, ...__VLS_functionalComponentArgsRest(__VLS_52));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_51, typeof __VLS_53> & Record<string, unknown>) => void)({ ...{}, class: ("ion-text-wrap"), });
const __VLS_54 = __VLS_pickFunctionalComponentCtx(__VLS_51, __VLS_53)!;
let __VLS_55!: __VLS_NormalizeEmits<typeof __VLS_54.emit>;
{
const __VLS_56 = __VLS_intrinsicElements["div"];
const __VLS_57 = __VLS_elementAsFunctionalComponent(__VLS_56);
const __VLS_58 = __VLS_57({ ...{}, class: ("resource-title"), }, ...__VLS_functionalComponentArgsRest(__VLS_57));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_56, typeof __VLS_58> & Record<string, unknown>) => void)({ ...{}, class: ("resource-title"), });
const __VLS_59 = __VLS_pickFunctionalComponentCtx(__VLS_56, __VLS_58)!;
let __VLS_60!: __VLS_NormalizeEmits<typeof __VLS_59.emit>;
{
const __VLS_61 = ({} as 'IonIcon' extends keyof typeof __VLS_ctx ? { 'IonIcon': typeof __VLS_ctx.IonIcon; } : 'ionIcon' extends keyof typeof __VLS_ctx ? { 'IonIcon': typeof __VLS_ctx.ionIcon; } : 'ion-icon' extends keyof typeof __VLS_ctx ? { 'IonIcon': (typeof __VLS_ctx)["ion-icon"]; } : typeof __VLS_resolvedLocalAndGlobalComponents).IonIcon;
const __VLS_62 = __VLS_asFunctionalComponent(__VLS_61, new __VLS_61({ ...{}, icon: ((resource.icon)), class: ("play-icon"), }));
({} as { IonIcon: typeof __VLS_61; }).IonIcon;
({} as { IonIcon: typeof __VLS_61; }).IonIcon;
const __VLS_63 = __VLS_62({ ...{}, icon: ((resource.icon)), class: ("play-icon"), }, ...__VLS_functionalComponentArgsRest(__VLS_62));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_61, typeof __VLS_63> & Record<string, unknown>) => void)({ ...{}, icon: ((resource.icon)), class: ("play-icon"), });
const __VLS_64 = __VLS_pickFunctionalComponentCtx(__VLS_61, __VLS_63)!;
let __VLS_65!: __VLS_NormalizeEmits<typeof __VLS_64.emit>;
}
{
const __VLS_66 = __VLS_intrinsicElements["h2"];
const __VLS_67 = __VLS_elementAsFunctionalComponent(__VLS_66);
const __VLS_68 = __VLS_67({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_67));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_66, typeof __VLS_68> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_69 = __VLS_pickFunctionalComponentCtx(__VLS_66, __VLS_68)!;
let __VLS_70!: __VLS_NormalizeEmits<typeof __VLS_69.emit>;
(resource.title);
(__VLS_69.slots!).default;
}
(__VLS_59.slots!).default;
}
{
const __VLS_71 = __VLS_intrinsicElements["p"];
const __VLS_72 = __VLS_elementAsFunctionalComponent(__VLS_71);
const __VLS_73 = __VLS_72({ ...{}, class: ("desClass"), }, ...__VLS_functionalComponentArgsRest(__VLS_72));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_71, typeof __VLS_73> & Record<string, unknown>) => void)({ ...{}, class: ("desClass"), });
const __VLS_74 = __VLS_pickFunctionalComponentCtx(__VLS_71, __VLS_73)!;
let __VLS_75!: __VLS_NormalizeEmits<typeof __VLS_74.emit>;
(resource.snippet);
(__VLS_74.slots!).default;
}
{
const __VLS_76 = __VLS_intrinsicElements["p"];
const __VLS_77 = __VLS_elementAsFunctionalComponent(__VLS_76);
const __VLS_78 = __VLS_77({ ...{}, class: ("resource-info"), }, ...__VLS_functionalComponentArgsRest(__VLS_77));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_76, typeof __VLS_78> & Record<string, unknown>) => void)({ ...{}, class: ("resource-info"), });
const __VLS_79 = __VLS_pickFunctionalComponentCtx(__VLS_76, __VLS_78)!;
let __VLS_80!: __VLS_NormalizeEmits<typeof __VLS_79.emit>;
(resource.duration);
(resource.updated);
(__VLS_79.slots!).default;
}
(__VLS_54.slots!).default;
}
(__VLS_38.slots!).default;
}
}
(__VLS_33.slots!).default;
}
{
const __VLS_81 = ({} as 'IonFab' extends keyof typeof __VLS_ctx ? { 'IonFab': typeof __VLS_ctx.IonFab; } : 'ionFab' extends keyof typeof __VLS_ctx ? { 'IonFab': typeof __VLS_ctx.ionFab; } : 'ion-fab' extends keyof typeof __VLS_ctx ? { 'IonFab': (typeof __VLS_ctx)["ion-fab"]; } : typeof __VLS_resolvedLocalAndGlobalComponents).IonFab;
const __VLS_82 = __VLS_asFunctionalComponent(__VLS_81, new __VLS_81({ ...{ onClick: {} as any, }, class: ("addStyle"), slot: ("fixed"), horizontal: ("end"), vertical: ("bottom"), }));
({} as { IonFab: typeof __VLS_81; }).IonFab;
({} as { IonFab: typeof __VLS_81; }).IonFab;
const __VLS_83 = __VLS_82({ ...{ onClick: {} as any, }, class: ("addStyle"), slot: ("fixed"), horizontal: ("end"), vertical: ("bottom"), }, ...__VLS_functionalComponentArgsRest(__VLS_82));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_81, typeof __VLS_83> & Record<string, unknown>) => void)({ ...{ onClick: {} as any, }, class: ("addStyle"), slot: ("fixed"), horizontal: ("end"), vertical: ("bottom"), });
const __VLS_84 = __VLS_pickFunctionalComponentCtx(__VLS_81, __VLS_83)!;
let __VLS_85!: __VLS_NormalizeEmits<typeof __VLS_84.emit>;
let __VLS_86 = { 'click': __VLS_pickEvent(__VLS_85['click'], ({} as __VLS_FunctionalComponentProps<typeof __VLS_82, typeof __VLS_83>).onClick) };
__VLS_86 = { click: (() => __VLS_ctx.router.push({ name: 'addteam' })) };
{
const __VLS_87 = ({} as 'IonFabButton' extends keyof typeof __VLS_ctx ? { 'IonFabButton': typeof __VLS_ctx.IonFabButton; } : 'ionFabButton' extends keyof typeof __VLS_ctx ? { 'IonFabButton': typeof __VLS_ctx.ionFabButton; } : 'ion-fab-button' extends keyof typeof __VLS_ctx ? { 'IonFabButton': (typeof __VLS_ctx)["ion-fab-button"]; } : typeof __VLS_resolvedLocalAndGlobalComponents).IonFabButton;
const __VLS_88 = __VLS_asFunctionalComponent(__VLS_87, new __VLS_87({ ...{}, }));
({} as { IonFabButton: typeof __VLS_87; }).IonFabButton;
({} as { IonFabButton: typeof __VLS_87; }).IonFabButton;
const __VLS_89 = __VLS_88({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_88));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_87, typeof __VLS_89> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_90 = __VLS_pickFunctionalComponentCtx(__VLS_87, __VLS_89)!;
let __VLS_91!: __VLS_NormalizeEmits<typeof __VLS_90.emit>;
{
const __VLS_92 = ({} as 'IonIcon' extends keyof typeof __VLS_ctx ? { 'IonIcon': typeof __VLS_ctx.IonIcon; } : 'ionIcon' extends keyof typeof __VLS_ctx ? { 'IonIcon': typeof __VLS_ctx.ionIcon; } : 'ion-icon' extends keyof typeof __VLS_ctx ? { 'IonIcon': (typeof __VLS_ctx)["ion-icon"]; } : typeof __VLS_resolvedLocalAndGlobalComponents).IonIcon;
const __VLS_93 = __VLS_asFunctionalComponent(__VLS_92, new __VLS_92({ ...{}, src: ("/src/pictures/answer-correct-icon 1.svg"), }));
({} as { IonIcon: typeof __VLS_92; }).IonIcon;
({} as { IonIcon: typeof __VLS_92; }).IonIcon;
const __VLS_94 = __VLS_93({ ...{}, src: ("/src/pictures/answer-correct-icon 1.svg"), }, ...__VLS_functionalComponentArgsRest(__VLS_93));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_92, typeof __VLS_94> & Record<string, unknown>) => void)({ ...{}, src: ("/src/pictures/answer-correct-icon 1.svg"), });
const __VLS_95 = __VLS_pickFunctionalComponentCtx(__VLS_92, __VLS_94)!;
let __VLS_96!: __VLS_NormalizeEmits<typeof __VLS_95.emit>;
}
(__VLS_90.slots!).default;
}
(__VLS_84.slots!).default;
}
(__VLS_18.slots!).default;
}
(__VLS_3.slots!).default;
}
if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
__VLS_styleScopedClasses["titleStyle"];
__VLS_styleScopedClasses["custom-searchbar"];
__VLS_styleScopedClasses["list-ios"];
__VLS_styleScopedClasses["resource-item"];
__VLS_styleScopedClasses["resource-thumbnail"];
__VLS_styleScopedClasses["ion-text-wrap"];
__VLS_styleScopedClasses["resource-title"];
__VLS_styleScopedClasses["play-icon"];
__VLS_styleScopedClasses["desClass"];
__VLS_styleScopedClasses["resource-info"];
__VLS_styleScopedClasses["addStyle"];
}
var __VLS_slots!: {};
// @ts-ignore
[router,];
return __VLS_slots;
}
